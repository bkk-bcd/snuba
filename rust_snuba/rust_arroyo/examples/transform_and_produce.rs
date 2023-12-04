// An example of using the RunTask and Produce strategies together.
// inspired by https://github.com/getsentry/arroyo/blob/main/examples/transform_and_produce/script.py
// This creates a consumer that reads from a topic test_in, reverses the string message,
// and then produces it to topic test_out.
extern crate rust_arroyo;

use rdkafka::message::ToBytes;
use rust_arroyo::backends::kafka::config::KafkaConfig;
use rust_arroyo::backends::kafka::producer::KafkaProducer;
use rust_arroyo::backends::kafka::types::KafkaPayload;
use rust_arroyo::backends::kafka::KafkaConsumer;
use rust_arroyo::processing::strategies::produce::Produce;
use rust_arroyo::processing::strategies::run_task::RunTask;
use rust_arroyo::processing::strategies::run_task_in_threads::ConcurrencyConfig;
use rust_arroyo::processing::strategies::{
    CommitRequest, InvalidMessage, ProcessingStrategy, ProcessingStrategyFactory, SubmitError,
};
use rust_arroyo::processing::{Callbacks, ConsumerState, StreamProcessor};
use rust_arroyo::types::{Message, Topic, TopicOrPartition};
use std::sync::{Arc, Mutex};
use std::time::Duration;

fn reverse_string(value: KafkaPayload) -> Result<KafkaPayload, InvalidMessage> {
    let payload = value.payload().unwrap();
    let str_payload = std::str::from_utf8(payload).unwrap();
    let result_str = str_payload.chars().rev().collect::<String>();

    println!("transforming value: {:?} -> {:?}", str_payload, &result_str);

    let result = KafkaPayload::new(
        value.key().cloned(),
        value.headers().cloned(),
        Some(result_str.to_bytes().to_vec()),
    );
    Ok(result)
}
struct Noop {}
impl ProcessingStrategy<KafkaPayload> for Noop {
    fn poll(&mut self) -> Result<Option<CommitRequest>, InvalidMessage> {
        Ok(None)
    }
    fn submit(&mut self, _message: Message<KafkaPayload>) -> Result<(), SubmitError<KafkaPayload>> {
        Ok(())
    }
    fn close(&mut self) {}
    fn terminate(&mut self) {}
    fn join(
        &mut self,
        _timeout: Option<Duration>,
    ) -> Result<Option<CommitRequest>, InvalidMessage> {
        Ok(None)
    }
}

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    struct ReverseStringAndProduceStrategyFactory {
        concurrency: ConcurrencyConfig,
        config: KafkaConfig,
        topic: Topic,
    }
    impl ProcessingStrategyFactory<KafkaPayload> for ReverseStringAndProduceStrategyFactory {
        fn create(&self) -> Box<dyn ProcessingStrategy<KafkaPayload>> {
            let producer = KafkaProducer::new(self.config.clone());
            let topic = TopicOrPartition::Topic(self.topic);
            let reverse_string_and_produce_strategy = RunTask::new(
                reverse_string,
                Produce::new(Noop {}, producer, &self.concurrency, topic),
            );
            Box::new(reverse_string_and_produce_strategy)
        }
    }

    let config = KafkaConfig::new_consumer_config(
        vec!["0.0.0.0:9092".to_string()],
        "my_group".to_string(),
        "latest".to_string(),
        false,
        30_000,
        None,
    );

    let consumer_state = Arc::new(Mutex::new(ConsumerState::new(Box::new(
        ReverseStringAndProduceStrategyFactory {
            concurrency: ConcurrencyConfig::new(5),
            config: config.clone(),
            topic: Topic::new("test_out"),
        },
    ))));

    let consumer = Box::new(KafkaConsumer::new(config, Callbacks(consumer_state.clone())).unwrap());
    let mut processor = StreamProcessor::new(consumer, consumer_state, None);
    processor.subscribe(Topic::new("test_in"));
    println!("running processor. transforming from test_in to test_out");
    processor.run().unwrap();
}
