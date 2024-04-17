Search.setIndex({"docnames": ["architecture/consumer", "architecture/datamodel", "architecture/overview", "architecture/queryprocessing", "architecture/slicing", "clickhouse/death_queries", "clickhouse/schema_design", "clickhouse/supported_versions", "clickhouse/topology", "configuration/dataset", "configuration/entity", "configuration/entity_subscription", "configuration/intro", "configuration/migration_group", "configuration/overview", "configuration/readable_storage", "configuration/writable_storage", "contributing/environment", "getstarted", "index", "intro", "language/mql", "language/snql", "migrations/modes", "profiler", "query/overview"], "filenames": ["architecture/consumer.rst", "architecture/datamodel.rst", "architecture/overview.rst", "architecture/queryprocessing.rst", "architecture/slicing.rst", "clickhouse/death_queries.rst", "clickhouse/schema_design.rst", "clickhouse/supported_versions.rst", "clickhouse/topology.rst", "configuration/dataset.md", "configuration/entity.md", "configuration/entity_subscription.md", "configuration/intro.rst", "configuration/migration_group.md", "configuration/overview.rst", "configuration/readable_storage.md", "configuration/writable_storage.md", "contributing/environment.rst", "getstarted.rst", "index.rst", "intro.rst", "language/mql.rst", "language/snql.rst", "migrations/modes.rst", "profiler.rst", "query/overview.rst"], "titles": ["Snuba Consumers", "Snuba Data Model", "Snuba Architecture Overview", "Snuba Query Processing", "Snuba Data Slicing (under development)", "Clickhouse Queries Of Death", "ClickHouse Schema Design Best Practices", "ClickHouse supported versions", "ClickHouse Topology Best Practices", "Dataset Schema", "Entity Schema", "Entity Subscription Schema", "Dataset Configuration", "Migration Group Schema", "Dataset Configuration", "Readable Storage Schema", "Writable Storage Schema", "Snuba development environment", "Getting started with Snuba", "Features:", "Features:", "The MQL query language", "The SnQL query language", "Snuba Migration Modes", "Profiling", "Querying Snuba"], "terms": {"i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "still": [0, 2, 6, 10, 25], "easiest": 0, "wai": [0, 1, 2, 3, 8, 18, 21, 23, 24, 25], "deploi": [0, 2, 8], "new": [0, 3, 4, 6, 7, 8, 15, 16, 23, 24], "dataset": [0, 2, 4, 6, 8, 19, 22, 25], "can": [0, 1, 2, 3, 4, 6, 8, 10, 16, 19, 20, 21, 22, 23, 24, 25], "written": [0, 2, 3, 8, 18], "us": [0, 1, 2, 3, 4, 7, 8, 10, 15, 16, 17, 18, 21, 22, 23, 24, 25], "serv": [0, 1, 2, 3, 6, 15, 16, 21], "need": [0, 1, 2, 3, 4, 16, 23, 25], "high": [0, 6], "throughput": 0, "sidestep": 0, "all": [0, 1, 3, 6, 17, 19, 20, 21, 22, 23, 25], "problem": 0, "concurr": [0, 25], "For": [0, 3, 4, 8, 16, 21, 22, 24, 25], "an": [0, 1, 2, 3, 4, 6, 8, 10, 16, 22, 25], "experi": [0, 6, 18], "attempt": 0, "consolid": 0, "both": [0, 1, 2, 3, 6, 19, 20], "logic": [0, 1, 6, 10, 19, 20], "so": [0, 1, 2, 6, 22, 23, 24, 25], "we": [0, 1, 2, 3, 4, 6, 8, 16, 22, 23, 25], "eventu": [0, 1, 2], "remov": [0, 6, 15, 16, 25], "code": [0, 3, 22, 25], "beneath": 0, "It": [0, 1, 2, 6, 17, 22, 25], "anywher": 0, "prod": [0, 21], "In": [0, 1, 2, 3, 4, 6, 17, 21, 22, 23, 25], "order": [0, 2, 3, 4, 6, 17, 21, 23, 25], "port": [0, 18], "fulli": [0, 2, 23], "regist": [0, 2, 6], "rust_snuba": 0, "src": 0, "mod": 0, "r": 0, "add": [0, 4, 16, 18, 22], "test_message_processor": 0, "py": [0, 18, 23], "later": 0, "rustcompatprocessor": 0, "get": [0, 6, 17, 19], "rid": 0, "implement": [0, 3], "each": [0, 1, 3, 4, 6, 18, 22, 25], "storag": [0, 6, 10, 14, 18, 23], "defin": [0, 1, 3, 12, 14, 15, 16, 22, 25], "convers": 0, "function": [0, 3, 7, 10, 17, 19, 20, 21, 22, 25], "map": [0, 1, 6, 10, 15, 16], "layout": 0, "kafka": [0, 2, 16, 17, 18, 19, 20], "list": [0, 1, 7, 18, 25], "clickhous": [0, 1, 2, 3, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25], "row": [0, 1, 2, 6, 15, 16, 21, 22, 25], "ar": [0, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 14, 16, 17, 18, 21, 22, 23, 24, 25], "subclass": 0, "from": [0, 1, 2, 3, 4, 5, 6, 8, 10, 16, 17, 18, 19, 20, 21, 22, 25], "datasetmessageprocessor": 0, "just": [0, 1, 6, 24, 25], "name": [0, 1, 3, 4, 6, 8, 9, 10, 11, 13, 15, 16, 24, 25], "becom": [0, 25], "avail": [0, 15, 16, 17], "refer": [0, 8, 17, 22, 25], "configur": [0, 19, 23], "yaml": [0, 4, 12, 14], "run": [0, 1, 2, 3, 5, 6, 15, 16, 18, 23, 25], "mention": [0, 6, 23], "abov": [0, 1, 3, 4, 6, 8, 21, 23, 25], "convert": [0, 16], "batch": [0, 2], "those": [0, 6, 19, 20], "up": [0, 2, 3, 4, 6, 8, 17, 18, 23], "larger": [0, 25], "insert": [0, 2, 16], "statement": [0, 1, 16], "send": [0, 21, 22, 24], "off": [0, 23], "cluster": [0, 15, 16, 18, 23], "set": [0, 1, 3, 4, 6, 10, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25], "sentri": [0, 1, 4, 6, 8, 23, 24], "have": [0, 1, 2, 3, 4, 5, 6, 7, 16, 17, 24, 25], "lot": 0, "want": [0, 5, 6, 17, 22, 23], "certain": [0, 6], "requir": [0, 1, 2, 3, 4, 6, 10, 15, 16, 21, 22], "our": [0, 2, 3, 22], "t": [0, 1, 2, 6, 15, 16, 22], "meet": 0, "which": [0, 1, 2, 3, 5, 6, 10, 15, 16, 17, 19, 20, 21, 22, 23, 25], "don": [0, 1, 6], "appli": [0, 3, 10, 13, 15, 16, 19, 20, 22, 25], "product": [0, 1, 2, 3, 5, 8, 24], "thei": [0, 1, 2, 3, 6, 8, 21, 22, 23], "strong": [0, 1, 2], "consist": [0, 3, 22, 25], "hand": [0, 22], "queri": [0, 1, 4, 10, 15, 16, 17, 19, 20], "assert": 0, "few": [0, 3, 8, 24], "wait": 0, "them": [0, 1, 3, 6, 25], "some": [0, 1, 2, 3, 6, 7, 22, 24], "more": [0, 1, 2, 6, 7, 8, 21, 22, 23, 25], "depend": [0, 1, 2, 3, 6, 16, 17, 22, 23], "data": [0, 3, 8, 17, 18, 19, 20, 22, 23], "becaus": [0, 2, 6, 22], "everi": [0, 1, 4, 6, 22, 24, 25], "synchron": [0, 2, 16], "latenc": 0, "realli": [0, 5], "import": [0, 25], "while": [0, 2, 3, 6], "isn": [0, 22], "basic": [0, 3], "peopl": 0, "write": [0, 2, 3, 4, 6, 16, 25], "e2": 0, "involv": [0, 25], "similarli": 0, "how": [0, 1, 4, 6, 10, 17, 21, 22, 25], "relat": [0, 1, 2, 3, 19, 20, 25], "db": [0, 1], "django": 0, "orm": 0, "being": [0, 3, 6, 25], "wipe": 0, "http": [0, 2, 25], "well": [0, 2, 3, 6, 19, 20], "web": 0, "view": [0, 1, 2, 3, 6, 10], "prefix": [0, 6], "same": [0, 1, 3, 4, 5, 15, 16, 22, 23, 25], "": [0, 1, 4, 6, 16, 17, 21, 22, 23, 24, 25], "One": [0, 1], "request": 0, "directli": [0, 8, 19, 20], "translat": [0, 10], "block": [0, 1], "toward": [0, 1], "come": 0, "two": [0, 1, 2, 3, 6, 8, 10, 21, 22, 23, 24], "flavor": 0, "find": [0, 3, 22], "load": [0, 1, 2, 3, 6, 12, 14, 25], "version": [0, 5, 6, 9, 10, 11, 13, 15, 16, 17, 19, 22, 25], "There": [0, 1, 2, 6, 7, 15, 16, 22, 25], "class": [0, 1, 3, 10, 15, 16, 21, 25], "like": [0, 1, 3, 19, 20, 22, 24, 25], "querylogprocessor": 0, "relev": [0, 2, 4, 6, 25], "If": [0, 2, 15, 16, 17, 22, 23], "exist": [0, 2, 3, 4, 6, 8], "The": [0, 1, 2, 3, 4, 5, 6, 7, 10, 15, 16, 17, 18, 19, 20, 23, 25], "result": [0, 2, 4, 6, 16, 21, 22, 25], "sometim": 0, "20x": 0, "faster": [0, 3, 6], "than": [0, 22], "found": [0, 18, 21, 22, 23, 25], "silent": 0, "fall": [0, 25], "back": [0, 1, 2], "second": [0, 6, 16, 21, 22, 24, 25], "within": [0, 19], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25], "mode": [0, 2, 16, 19, 25], "specif": [0, 1, 2, 3, 6, 10, 19, 20, 22, 23, 24, 25], "ha": [0, 1, 2, 3, 6, 7, 8, 19, 20, 21, 24, 25], "time": [0, 1, 2, 3, 6, 10, 16, 18, 19, 20, 21, 22, 24, 25], "perform": [0, 1, 2, 3, 6, 10, 17, 19, 20], "benefit": [0, 6], "neglig": 0, "even": [0, 1, 22], "when": [0, 1, 2, 4, 5, 6, 7, 10, 22, 23, 25], "process": [0, 2, 17, 19, 25], "100": [0, 21, 24, 25], "e": [0, 16, 21, 22, 25], "api": [0, 2, 6, 8, 17, 24, 25], "purpos": [0, 21, 23], "baseclass": 0, "deleg": [0, 8], "mean": [0, 6, 21, 25], "connect": [0, 1, 23, 25], "multiprocess": 0, "make": [0, 3, 4, 6, 17, 23, 25], "sens": [0, 6], "roundtrip": 0, "through": [0, 1, 2, 6, 12, 14, 19, 20, 22], "onli": [0, 1, 2, 3, 6, 15, 16, 22, 23, 24, 25], "call": [0, 2, 6, 24, 25], "busi": 0, "again": 0, "valid": [0, 1, 4, 6, 7, 10, 12, 14, 22, 25], "equival": [0, 3, 10, 22], "where": [0, 1, 3, 4, 6, 19, 20, 25], "payload": [0, 25], "schema": [0, 1, 3, 4, 19, 25], "against": [0, 1, 6, 16], "miss": [0, 25], "coverag": 0, "prefer": [0, 3], "custom": [0, 3, 4, 6, 21], "replac": [0, 2, 3, 4, 15, 16, 19, 20, 25], "case": [0, 1, 2, 3, 4, 6, 21, 22, 25], "around": [0, 21, 25], "gil": 0, "arroyo": 0, "support": [0, 1, 2, 3, 4, 15, 16, 19, 20, 21, 22, 23], "abl": [0, 1, 25], "multipl": [0, 1, 2, 3, 4, 6, 19, 20, 22, 24], "core": [0, 21], "signific": 0, "serial": 0, "overhead": [0, 24], "amount": [0, 6, 16, 24], "complex": [0, 1, 3, 21], "out": [0, 4, 15, 16, 23], "scope": [0, 25], "document": [0, 6, 21, 22, 23, 25], "despit": 0, "launch": 0, "cli": 0, "work": [0, 1, 2, 3, 6, 7, 19, 22, 23], "compil": 0, "share": [0, 1, 2], "librari": 0, "expos": [0, 1, 15, 16, 22], "packag": [0, 17], "maturin": 0, "wheel": 0, "pars": [0, 3], "argument": [0, 16], "resolv": [0, 6], "config": [0, 4, 10, 15, 16, 23, 24], "build": [0, 1, 4, 25], "json": [0, 3, 22], "contain": [0, 1, 2, 3, 6, 8, 17, 21, 22, 23, 25], "inform": [0, 21, 23], "physic": [0, 1], "topic": [0, 1, 2, 16], "tabl": [0, 1, 2, 3, 10, 15, 16, 18, 23, 25], "point": [0, 1, 2, 4, 19, 20, 23], "take": [0, 3, 5, 6, 22, 23, 25], "over": [0, 1, 6, 19, 20], "entir": [0, 3, 6, 22], "model": [0, 2, 3, 6, 19, 20, 22, 23], "veri": [0, 2, 3, 6, 25], "simpl": [0, 1, 22], "tokio": 0, "runtim": [0, 24], "re": 0, "regular": [0, 4, 6, 19], "o": 0, "thread": [0, 24, 25], "irrelev": 0, "sinc": [0, 1, 2, 19, 20, 24], "mostli": 0, "main": [0, 1, 2, 3, 23, 24], "differ": [0, 1, 2, 3, 4, 6, 7, 8, 10, 15, 16, 22], "progress": [0, 6], "fundament": [0, 1], "subject": [0, 4, 6], "therefor": 0, "forc": [0, 2, 23, 25], "spawn": 0, "subprocess": 0, "ipc": 0, "one": [0, 1, 2, 3, 4, 6, 8, 10, 15, 16, 21, 22, 23, 24, 25], "other": [0, 1, 3, 6, 8, 22, 25], "interpret": 0, "alreadi": [0, 17, 23, 25], "initi": 0, "doe": [0, 1, 2, 3, 6, 17, 25], "except": [0, 2, 3, 22, 25], "signal": 0, "handl": 0, "bit": [0, 6], "tricki": 0, "major": 0, "lifetim": 0, "handler": 0, "cannot": [0, 1, 4, 6, 25], "also": [0, 1, 2, 3, 17, 18, 21, 22, 23, 24, 25], "its": [0, 1, 2, 3, 6, 22, 23], "own": [0, 1, 2, 7, 24], "ctrl": 0, "c": 0, "do": [0, 1, 3, 4, 5, 6, 8, 17, 22], "complet": [0, 5, 15, 16, 17, 25], "ignor": 0, "fine": 0, "keyboardinterrupt": 0, "section": [1, 2, 3, 6, 17, 25], "explain": [1, 2, 3, 17, 25], "organ": [1, 2, 21], "user": [1, 3, 6, 8, 23, 25], "face": 1, "underli": [1, 6, 22], "databas": [1, 2, 4, 8, 19, 20, 22], "divid": [1, 3, 25], "horizont": 1, "what": [1, 3, 6, 16, 21, 25], "visibl": [1, 25], "client": [1, 2, 18, 19, 20, 25], "languag": [1, 2, 3, 19, 20, 25], "element": [1, 6, 25], "mai": [1, 4, 6, 18], "1": [1, 4, 6, 18, 21, 22, 23, 25], "instead": [1, 17, 21], "concept": [1, 8], "reason": [1, 3, 15, 16, 17], "behind": 1, "divis": 1, "allow": [1, 2, 3, 8, 11, 19, 20, 25], "stabl": 1, "interfac": [1, 3], "intern": [1, 15, 16, 25], "execut": [1, 2, 3, 16, 25], "part": [1, 3, 6, 10, 22, 24, 25], "improv": 1, "transpar": 1, "rest": 1, "outlin": [1, 23], "compos": [1, 3, 21], "describ": [1, 2, 3, 6, 21, 22, 25], "below": [1, 2, 22, 25], "A": [1, 2, 4, 5, 6, 10, 15, 16, 18, 22, 25], "space": 1, "provid": [1, 2, 3, 6, 10, 16, 18, 19, 20, 21, 22, 25], "independ": [1, 2, 3, 6], "term": [1, 2], "discov": [1, 19, 20, 25], "outcom": [1, 19, 20], "session": [1, 19, 20, 21], "seen": 1, "compon": [1, 3, 9, 10, 11, 13, 15, 16], "abstract": [1, 10], "concret": 1, "target": 1, "extens": 1, "repres": [1, 2, 3, 10, 15, 16, 21, 22, 25], "instanc": [1, 4, 18], "transact": [1, 3, 19, 21, 22, 25], "error": [1, 3, 15, 16, 19, 20, 22, 25], "practic": [1, 19], "correspond": [1, 4, 22, 23], "field": [1, 4, 6, 16, 21, 22, 25], "associ": [1, 4, 9, 10], "sever": [1, 3, 6, 19, 20, 25], "No": [1, 2], "lower": 1, "level": [1, 6, 10], "suppos": [1, 3], "unequivoc": 1, "present": [1, 6, 25], "mimic": 1, "foreign": 1, "kei": [1, 3, 4, 6, 10, 15, 16, 22, 25], "meant": 1, "mani": 1, "inherit": 1, "nomin": 1, "subtyp": 1, "group": [1, 14, 21, 22, 25], "parent": 1, "semant": [1, 2, 3], "must": [1, 2, 4, 6, 15, 16, 17, 22, 23], "union": 1, "whose": [1, 25], "possibl": [1, 2, 3, 22, 24, 25], "largest": 1, "unit": [1, 17], "guarante": [1, 2, 7, 25], "expect": [1, 6, 23], "serializ": 1, "pleas": [1, 6, 17], "serious": 1, "you": [1, 2, 4, 5, 6, 8, 17, 18, 22, 23, 24, 25], "think": 1, "probabl": 1, "extend": 1, "ani": [1, 2, 3, 7, 15, 16, 21, 22, 25], "span": [1, 4], "best": [1, 19, 23], "impact": [1, 6, 15, 16], "subscript": [1, 2, 3, 10, 14, 16], "These": [1, 2, 3, 4, 12, 14, 17, 21, 22, 23], "otherwis": [1, 18, 21], "would": [1, 3, 22, 25], "To": [1, 3, 4, 6, 24], "precis": 1, "smaller": 1, "ingest": [1, 6, 16, 17, 19, 20], "partit": [1, 2, 10, 15, 16], "project_id": [1, 3, 21, 22, 25], "maximum": [1, 11, 16], "detail": [1, 2, 4, 21, 22, 23, 25], "ok": 1, "guid": [1, 18, 25], "materi": [1, 2, 3], "As": [1, 3, 6, 25], "consequ": 1, "reflect": [1, 3], "gener": [1, 2, 4, 6, 8, 23, 25], "ddl": [1, 19, 20], "discuss": [1, 2, 3, 6, 25], "thu": 1, "least": [1, 2], "readabl": [1, 10, 14], "pre": [1, 3, 6, 19, 20, 25], "aggreg": [1, 3, 8, 11, 19, 20, 21, 22, 25], "per": [1, 4, 15, 16, 18, 21, 25], "optim": [1, 16, 19, 20], "writabl": [1, 10, 14], "fill": [1, 2, 16], "exclus": 1, "real": [1, 2], "world": 1, "studi": 1, "necessarili": 1, "current": [1, 19, 20, 21, 22, 23], "nor": 1, "deploy": [1, 19, 24], "consid": [1, 8], "taken": [1, 2], "isol": 1, "look": [1, 3, 6, 22, 23, 25], "actual": [1, 6, 21, 22, 25], "april": 1, "2020": 1, "though": [1, 25], "design": [1, 3, 19], "should": [1, 3, 4, 6, 10, 15, 16, 18, 21, 22, 23, 24, 25], "move": [1, 6, 23], "individu": [1, 3], "raw": [1, 4, 6, 18], "painfulli": 1, "slow": 1, "comput": 1, "hourli": 1, "much": [1, 6, 19, 20], "effici": [1, 6], "planner": 1, "pick": [1, 3, 24, 25], "canon": [1, 6], "three": [1, 4, 22], "event": [1, 2, 3, 6, 16, 19, 20, 22, 25], "form": [1, 3, 4, 10, 19, 20, 22], "give": [1, 3, 6, 22], "common": [1, 3, 6, 25], "read": [1, 2, 4, 6, 10, 15, 16], "put": [1, 6], "less": [1, 6, 25], "clickhosu": 1, "offer": 1, "merg": [1, 2, 25], "essenti": [1, 2], "includ": [1, 3, 6, 16, 17, 22, 25], "togeth": [1, 19, 20], "groupedmessag": [1, 22, 25], "groupassinge": 1, "left": [1, 10, 22, 25], "similar": [1, 2, 3, 6, 18, 19, 20, 25], "wa": [1, 2, 3, 19, 20, 25], "previou": [1, 3], "seri": [2, 3, 19, 20], "orient": 2, "store": [2, 6, 8, 19, 20, 21], "columnari": 2, "distribut": [2, 6, 15, 16, 18, 19, 20, 22], "suit": [2, 17], "kind": [2, 6, 9, 10, 11, 13, 15, 16], "input": [2, 6], "stream": [2, 16, 19, 20], "todai": 2, "either": [2, 10, 22, 25], "chosen": 2, "good": [2, 6], "balanc": [2, 25], "replic": [2, 8, 25], "natur": 2, "flexibl": [2, 6], "engin": [2, 3, 8], "goal": [2, 3], "endpoint": [2, 18, 22], "debug": [2, 22, 25], "consum": [2, 6, 8, 16, 17, 19, 20, 24, 25], "onto": [2, 3], "most": [2, 3, 8, 17, 19, 20, 25], "effect": 2, "especi": 2, "pass": [2, 3], "onc": [2, 6, 23, 24, 25], "By": 2, "properli": [2, 4, 23, 25], "select": [2, 3, 5, 10, 18, 24, 25], "dedupl": 2, "achiev": [2, 25], "exactli": [2, 22], "accept": [2, 17, 25], "simplest": 2, "system": [2, 3, 6, 17, 19, 20, 25], "express": [2, 6, 10, 22], "snql": [2, 19, 20], "mql": [2, 19], "sent": [2, 22, 24, 25], "post": [2, 25], "transform": [2, 3, 6, 10, 15, 16], "done": [2, 4, 6, 23], "receiv": [2, 3, 25], "push": 2, "Then": 2, "updat": [2, 6, 7, 16], "period": [2, 6], "produc": [2, 3, 6, 22], "coexist": 2, "default": [2, 4, 18, 21, 22, 23, 25], "monoton": 2, "multi": [2, 22, 23], "leader": 2, "hit": [2, 25], "replica": [2, 3, 23], "date": 2, "reach": 2, "state": [2, 15, 16], "befor": [2, 3, 16, 22], "final": [2, 15, 16, 23, 25], "keyword": [2, 22], "singl": [2, 15, 16, 19, 20, 21, 22, 25], "sequenti": [2, 25], "role": 2, "plai": 2, "show": 2, "stand": 2, "alon": 2, "won": 2, "legend": 2, "top": [2, 6, 19, 20], "diagram": [2, 8], "illustr": 2, "entiti": [2, 3, 4, 9, 14, 21, 22, 25], "issu": [2, 3, 6, 18, 19, 20, 25], "featur": [2, 4], "whole": 2, "between": [2, 3, 6, 8, 22, 23], "feed": 2, "messag": [2, 3, 6, 16, 24, 25], "upon": 2, "commit": [2, 4, 16], "record": [2, 4, 25], "log": [2, 4, 10, 16], "alert": 2, "proce": 2, "lockstep": 2, "ident": 2, "addit": [2, 3, 16, 25], "step": [2, 3, 6, 17, 25], "mutat": 2, "unmerg": 2, "reprocess": 2, "etc": [2, 6, 22], "forward": [2, 23], "project": [2, 21, 22, 25], "id": [2, 4, 21, 22, 25], "simpler": 2, "power": [2, 19, 20], "releas": [2, 15, 16, 19, 20], "health": 2, "mainli": [2, 3], "stat": [2, 19, 20, 25], "page": [2, 19, 20], "under": [2, 19], "construct": [2, 6], "cdc": 2, "start": [3, 15, 16, 17, 19, 23, 24, 25], "ast": 3, "ands": 3, "sql": [3, 6, 19, 20, 22, 25], "prevent": [3, 25], "danger": 3, "infrastructur": 3, "focus": [3, 25], "ensur": [3, 4, 15, 16, 17, 23], "match": [3, 6, 10, 25], "promot": 3, "tag": [3, 21], "introduct": [3, 25], "pointer": 3, "exampl": [3, 4, 6, 22, 23, 24, 25], "base": [3, 4, 19, 20, 21, 22, 25], "With": [3, 22], "chang": [3, 4, 6, 18, 19, 20, 23], "whether": [3, 21], "structur": [3, 4, 6, 22, 25], "here": [3, 4, 6, 15, 16, 19, 20, 21, 22, 23], "modul": [3, 25], "yet": [3, 23], "catch": 3, "invalid": [3, 25], "respons": [3, 10, 15, 16, 22], "return": [3, 6, 21, 22, 25], "http400": 3, "proper": 3, "sub": 3, "check": [3, 15, 16], "right": [3, 6, 10, 22, 23, 25], "after": [3, 6, 22, 25], "happen": [3, 4, 22], "alia": [3, 22], "shadow": 3, "signatur": 3, "column": [3, 4, 10, 15, 16, 22, 25], "reject": 3, "condit": [3, 5, 6, 15, 16, 22, 25], "rang": [3, 4, 22, 25], "stateless": 3, "object": [3, 10, 15, 16, 21, 25], "place": [3, 6, 23], "sequenc": [3, 8, 10], "apdex": [3, 21], "bucket": [3, 21, 22], "respond": [3, 25], "At": 3, "end": [3, 6, 25], "inspect": 3, "appropri": 3, "rout": [3, 4], "node": [3, 4, 6, 15, 16, 19, 20, 22, 25], "reduc": 3, "notabl": 3, "abc": 3, "access": [3, 6, 18, 19, 20, 25], "valu": [3, 4, 6, 10, 15, 16, 21, 22, 23, 24, 25], "indexof": 3, "been": [3, 5, 6, 7, 25], "rule": [3, 10, 19, 20], "contrarili": [3, 25], "full": [3, 6, 21], "context": [3, 6, 18], "u": [3, 8, 25], "easili": 3, "reus": 3, "across": [3, 4, 6, 21, 22], "compar": [3, 22], "Their": 3, "oper": [3, 6, 21, 22], "equal": [3, 4, 25], "hashmap": 3, "bloom": 3, "filter": [3, 15, 16, 21, 22, 25], "index": 3, "simpli": [3, 4], "format": [3, 8, 15, 16], "string": [3, 9, 10, 11, 13, 15, 16, 21, 22, 25], "ones": [3, 22], "follow": [3, 4, 5, 6, 7, 8, 17, 18, 23, 25], "slightli": 3, "path": 3, "account": [3, 6, 16], "multipli": 3, "solv": 3, "type": [3, 4, 6, 8, 10, 15, 16, 22, 25], "respect": [3, 21, 22], "creat": [3, 6, 8], "incredibli": 3, "ineffici": 3, "overal": [3, 6], "turn": [3, 23], "semi": 3, "activ": [4, 17], "higher": [4, 19, 20], "volum": [4, 19, 20, 23], "resourc": [4, 15, 16], "redi": [4, 17, 18, 19, 20], "postgr": [4, 19, 20], "assign": [4, 22, 23], "organization_id": 4, "maintain": [4, 25], "logical_partition_map": 4, "futur": [4, 7], "revis": 4, "along": 4, "sliced_storage_set": 4, "incom": [4, 6, 16], "storagesetkei": 4, "slice_id": 4, "pair": [4, 6], "repartit": 4, "increment": 4, "count": [4, 18, 21, 22], "0": [4, 6, 16, 18, 21, 22, 25], "storage_set": 4, "given": [4, 6, 8, 22], "mega": 4, "partial": [4, 15, 16], "resid": 4, "could": [4, 7], "scenario": 4, "now": [4, 6, 23, 25], "usual": 4, "2": [4, 17, 22, 25], "3": [4, 7, 25], "definit": [4, 6], "sliced_clust": 4, "desir": 4, "storage_set_slic": 4, "calcul": 4, "ultim": 4, "destin": [4, 25], "partition_key_column_nam": [4, 10], "properti": [4, 25], "non": [4, 6], "see": [4, 6, 21, 22, 24, 25], "might": [4, 6, 7, 8], "generic_metrics_set": 4, "generic_metrics_distribut": [4, 21], "file": [4, 6, 12, 14, 23], "sliced_kafka_topic_map": 4, "tupl": [4, 10, 22, 25], "logical_topic_nam": 4, "sure": [4, 17, 23], "broker": 4, "sliced_kafka_broker_config": 4, "info": 4, "metric": [4, 21, 25], "broker_config": 4, "note": [4, 6, 18, 22, 23], "boundari": 4, "stop": [4, 6, 24], "first": [4, 6, 25], "your": [4, 6, 7, 17, 23], "extra": [4, 16], "flag": [4, 13, 15, 16], "number": [4, 6, 11, 22, 25], "shown": 5, "segfault": 5, "20": [5, 7, 22], "7": [5, 7], "minimum": [5, 16], "snuba": [5, 6, 7, 8, 12, 14, 19, 20, 21, 22, 24], "trace": 5, "tool": 5, "unless": 5, "down": [5, 25], "environ": [5, 6, 15, 16, 18, 19, 20, 21, 23, 24], "prewher": [5, 25], "fix": [5, 6, 24], "21": [5, 7], "8": [5, 7], "upgrad": [5, 17], "collect": [6, 15, 16], "scale": [6, 24], "someth": [6, 25], "doesn": [6, 22], "seem": 6, "submit": 6, "pr": 6, "columnar": 6, "datastor": 6, "demand": [6, 19], "referenc": [6, 21], "ed": 6, "claus": [6, 11, 22], "abil": 6, "advantag": 6, "tradit": 6, "rdbm": 6, "postgresql": 6, "commonli": 6, "nest": [6, 10, 15, 16], "arrai": [6, 9, 10, 11, 13, 15, 16, 22], "exact": 6, "larg": 6, "NOT": [6, 22], "often": 6, "howev": [6, 21], "substr": 6, "usabl": 6, "attribut": [6, 25], "necessit": 6, "separ": [6, 8, 19, 20, 22, 24, 25], "low": [6, 24], "small": 6, "proport": 6, "break": 6, "style": 6, "neg": 6, "search": [6, 18, 19, 20], "penalti": 6, "unrel": 6, "effort": 6, "made": 6, "avoid": 6, "facilit": 6, "tend": [6, 8], "hash": 6, "uniqu": [6, 15, 16, 22, 25], "stochast": 6, "quickli": [6, 18], "determin": [6, 13, 15, 16, 21, 22, 25], "unbound": 6, "keyspac": 6, "memori": 6, "fals": [6, 23, 25], "posit": 6, "test": [6, 7, 23], "alwai": [6, 25], "mayb": 6, "occur": 6, "scan": 6, "due": [6, 17], "regex": 6, "dure": [6, 25], "necessari": [6, 23], "old": 6, "goe": 6, "ttl": 6, "processor": [6, 10, 15, 16], "duplic": 6, "automat": [6, 21], "roll": 6, "dimens": 6, "let": 6, "owner": 6, "simplifi": 6, "ll": 6, "sampl": [6, 24, 25], "usag": 6, "offici": 6, "contrari": 6, "trigger": 6, "convent": [6, 8, 22], "widgets_raw_loc": 6, "widgets_raw_dist": 6, "local": [6, 15, 16, 17, 18, 25], "widgets_aggregation_mv": 6, "widgets_aggregated_loc": 6, "widgets_aggregated_dist": 6, "immut": 6, "normal": 6, "behavior": 6, "suffix": [6, 8], "widgets_aggregation_mv_v1": 6, "widgets_aggregation_mv_v2": 6, "next": 6, "discard": 6, "longer": 6, "prior": 6, "continu": 6, "without": [6, 22, 23, 24], "loss": 6, "control": [6, 23], "mv": 6, "last": 6, "plu": 6, "click_events_raw_loc": 6, "click_dur": 6, "float64": 6, "click": 6, "click_events_aggregation_mv": 6, "quantilesst": 6, "click_events_aggregated_loc": 6, "zero": 6, "surpris": 6, "p90": 6, "p95": 6, "p99": 6, "durat": [6, 21, 22, 24, 25], "confus": 6, "click_events_aggregation_mv_v1": 6, "via": [6, 8, 23, 24], "__init": 6, "py__": 6, "unus": 6, "known": 7, "clikhous": 7, "outsid": 7, "potenti": 7, "broken": [7, 25], "risk": [7, 24], "plan": 7, "recent": [7, 17], "inher": 8, "intend": 8, "shard": [8, 23], "themselv": 8, "mainten": 8, "invis": 8, "applic": [8, 12, 14], "act": 8, "proxi": 8, "kept": 8, "indefinit": 8, "astut": 8, "notic": 8, "migrat": [8, 14, 19, 20], "_local": 8, "_dist": 8, "distinguish": 8, "mergetre": 8, "deriv": 8, "hopefulli": 8, "combin": [8, 19, 20, 21, 22], "understand": [8, 25], "quick": [8, 18], "conta": [10, 15, 16], "arg": [10, 15, 16], "mapper": 10, "is_writ": 10, "boolean": [10, 13, 22, 23], "mark": 10, "translation_mapp": 10, "instanti": [10, 15, 16], "curried_funct": 10, "join_relationship": 10, "join": [10, 22, 25], "relationship": [10, 22, 25], "specifi": [10, 16, 21, 22, 25], "x": 10, "y": 10, "rhs_entiti": 10, "rh": [10, 22], "join_typ": 10, "inner": [10, 22], "track": 10, "storage_selector": 10, "selector": 10, "querystorageselector": 10, "query_processor": [10, 15, 16], "logicalqueryprocessor": 10, "queryprocessor": [10, 15, 16], "validate_data_model": 10, "null": [10, 11, 16, 22, 25], "mismatch": [10, 18], "required_time_column": 10, "slice": [10, 19], "subscription_processor": 10, "subscription_valid": 10, "max_allowed_aggreg": 11, "integ": [11, 16, 22], "disallowed_aggreg": 11, "option": [13, 21, 22], "identifi": [15, 16, 22, 25], "set_kei": [15, 16], "locat": [15, 16], "readiness_st": [15, 16], "readi": [15, 16, 25], "variou": [15, 16], "label": [15, 16], "four": [15, 16], "limit": [15, 16, 25], "deprecr": [15, 16], "ci": [15, 16], "develop": [15, 16, 18, 19, 20, 23], "deprec": [15, 16], "experiment": [15, 16, 23], "local_table_nam": [15, 16], "dist_table_nam": [15, 16], "not_deleted_mandatory_condit": [15, 16], "delet": [15, 16, 25], "eg": [15, 16, 22], "explicitli": [15, 16], "partition_format": [15, 16], "cleanup": [15, 16], "job": [15, 16], "clickhousequeryprocessor": [15, 16], "mandatory_condition_check": [15, 16], "conditioncheck": [15, 16], "haven": [15, 16], "secur": [15, 16], "allocation_polici": [15, 16], "allocationpolici": [15, 16], "alloc": [15, 16], "stream_load": 16, "loader": 16, "bodi": [16, 22], "default_top": 16, "commit_log_top": 16, "subscription_scheduled_top": 16, "schedul": [16, 25], "subscription_result_top": 16, "subscription_scheduler_mod": 16, "g": [16, 21, 22], "global": 16, "subscription_synchronization_timestamp": 16, "timestamp": [16, 21, 22, 25], "subscription_delay_second": 16, "delai": 16, "ad": [16, 22, 23], "orig_message_t": 16, "typic": 16, "60": [16, 25], "120": 16, "replacement_top": 16, "dlq_topic": 16, "dlq": 16, "pre_filt": 16, "streammessagefilt": 16, "replacer_processor": 16, "replacerprocessor": 16, "writer_opt": 16, "sourc": 17, "pyenv": 17, "assum": [17, 18], "dev": 17, "homebrew": 17, "m1": 17, "mac": 17, "ve": 17, "variabl": [17, 23, 24], "export": 17, "cpath": 17, "opt": 17, "library_path": 17, "lib": 17, "clone": 17, "repo": 17, "workspac": 17, "git": 17, "github": 17, "com": 17, "getsentri": 17, "command": [17, 25], "python": [17, 25], "virtual": 17, "cd": 17, "setup": 17, "m": 17, "venv": 17, "bin": 17, "pip": 17, "22": 17, "capabl": 17, "devserv": 17, "integr": 17, "docker": [17, 18, 23], "p": 17, "grep": 17, "server": [17, 18, 23], "checkout": 17, "branch": 17, "anoth": [17, 22], "termin": 17, "master": 17, "pull": 17, "devservic": [17, 18, 23], "exclud": [17, 18], "bring": 17, "clickhouse_host": 18, "127": [18, 25], "redis_host": 18, "On": [18, 19], "6379": 18, "9092": 18, "servic": [18, 19, 20], "line": [18, 25], "conf": [18, 23], "sentry_eventstream": 18, "eventstream": 18, "kafkaeventstream": 18, "And": 18, "everyth": [18, 22], "utc": 18, "timezon": 18, "sentry_search": 18, "eventsdatasetsnubasearchbackend": 18, "sentry_tsdb": 18, "tsdb": 18, "redissnuba": 18, "redissnubatsdb": 18, "snubaeventstream": 18, "psql": 18, "exec": 18, "sentry_clickhous": 18, "sentry_loc": 18, "hostnam": [18, 24], "v": 18, "host": 18, "rich": [19, 20], "fast": [19, 20], "origin": [19, 20], "evolv": [19, 20], "layer": [19, 20], "graph": [19, 20, 22], "instal": [19, 20], "monitor": [19, 20], "architectur": 19, "overview": 19, "Of": 19, "death": 19, "topologi": 19, "profil": 19, "grammar": 21, "sdk": [21, 25], "repositori": 21, "timeseri": [21, 25], "metric_nam": 21, "mri": 21, "sum": [21, 25], "quantil": 21, "99": 21, "d": 21, "tagkei": 21, "tagvalu": 21, "status_cod": 21, "arithmet": [21, 22], "arithmetic_op": 21, "function_nam": 21, "paramet": [21, 25], "max": [21, 22], "measur": 21, "fcp": 21, "300": 21, "formula": [21, 25], "almost": 21, "200": [21, 25], "failur": 21, "rate": [21, 22, 24, 25], "about": [21, 25], "That": 21, "why": 21, "mql_context": 21, "dictionari": [21, 25], "2023": [21, 25], "01": [21, 22], "02t03": 21, "04": 21, "05": [21, 25], "00": [21, 22, 25], "16t03": 21, "orderbi": 21, "none": [21, 25], "granular": [21, 25], "3600": [21, 22, 25], "interv": [21, 25], "with_tot": 21, "org_id": [21, 25], "11": [21, 22, 25], "use_case_id": [21, 25], "5": [21, 25], "indexer_map": 21, "conveni": 21, "iso": 21, "8601": 21, "metricsqueri": [21, 25], "1000": [21, 22, 25], "total": [21, 25], "alongsid": [21, 25], "infer": [21, 25], "align": 21, "subqueri": 22, "AND": [22, 25], "OR": 22, "asc": 22, "desc": 22, "n": 22, "encod": 22, "bool": 22, "turbo": [22, 25], "impli": 22, "url": [22, 25], "pattern": 22, "subgraph": 22, "insid": 22, "curli": 22, "brace": 22, "entireti": 22, "anyth": 22, "outer": 22, "alias": 22, "avg": 22, "AS": [22, 25], "avg_d": 22, "direct": 22, "short": 22, "comma": [22, 24], "groupassigne": [22, 25], "tot": 22, "user_id": 22, "somebodi": 22, "hard": 22, "safe": 22, "10": [22, 25], "output": 22, "treat": 22, "noth": 22, "empti": 22, "qualifi": 22, "infix": 22, "lh": 22, "op": [22, 25], "liter": [22, 25], "IN": [22, 25], "mandatori": 22, "declar": [22, 25], "pretti": 22, "self": 22, "explanatori": 22, "magic": 22, "floor": 22, "minut": 22, "hour": 22, "dai": [22, 25], "timeseriesprocessor": 22, "event_id": [22, 25], "event_count": 22, "todatetim": [22, 25], "2022": 22, "15t00": 22, "000000": 22, "21t00": 22, "true": [22, 23], "float": 22, "percentag": 22, "Or": 22, "greater": 22, "try": 23, "moment": 23, "switch": 23, "live": 23, "envrion": 23, "sentry_distributed_clickhouse_t": 23, "whenev": 23, "alter": 23, "zookeep": 23, "link": 23, "immedi": [23, 25], "snuba_set": 23, "captur": 24, "enabl": 24, "admin": 24, "who": 24, "snuba_profiles_sample_r": 24, "nonzero": 24, "querylog": 24, "misbehav": 24, "pod": 24, "pod_nam": 24, "6d95f9c8d9": 24, "4cqht": 24, "unknown": 24, "minim": [24, 25], "size": 24, "backlog": 24, "ondemand_profiler_hostnam": 24, "quot": 24, "unset": 24, "warn": 24, "sai": [24, 25], "ondemand": 24, "cap": 24, "30": 24, "forev": 24, "drive": 25, "author": 25, "architect": 25, "know": 25, "interest": 25, "offset": 25, "uint64": 25, "record_delet": 25, "uint8": 25, "statu": 25, "nullabl": 25, "last_seen": 25, "datetim": 25, "first_seen": 25, "active_at": 25, "first_release_id": 25, "group_id": 25, "go": 25, "titl": 25, "uniq": 25, "uniq_ev": 25, "groupbi": 25, "gt": 25, "2021": 25, "arithmeticoper": 25, "public_nam": 25, "timedelta": 25, "14": 25, "rollup": 25, "metricsscop": 25, "wasi": 25, "recommend": 25, "care": 25, "cach": 25, "retri": 25, "bulk": 25, "method": 25, "metadata": 25, "bad": 25, "meta": 25, "1218": 25, "sorri": 25, "screenshot": 25, "exhaust": 25, "statist": 25, "in_ord": 25, "turbo_sample_r": 25, "correct": 25, "4": 25, "success": 25, "400": 25, "500": 25, "timeout": 25, "advanc": 25, "429": 25, "1621038379": 25, "duration_m": 25, "95": 25, "marks_m": 25, "cache_get": 25, "cache_set": 25, "39": 25, "get_config": 25, "prepare_queri": 25, "rate_limit": 25, "validate_schema": 25, "34": 25, "clickhouse_t": 25, "errors_loc": 25, "referr": 25, "project_r": 25, "project_concurr": 25, "global_r": 25, "global_concurr": 25, "result_row": 25, "result_col": 25, "query_id": 25, "f09f3f9e1c632f395792c6a4bfe7c4f": 25, "_snuba_titl": 25, "_snuba_project_id": 25, "greaterorequ": 25, "_snuba_timestamp": 25, "01t00": 25, "univers": 25, "11t00": 25, "phase": 25, "tell": 25, "decid": 25, "tree": 25, "awai": 25, "invalid_queri": 25, "16": 25, "42": 25, "time_window": 25, "150": 25, "resolut": 25, "vari": 25, "past": 25, "window": 25, "increas": 25, "task": 25, "executor": 25, "jitter": 25, "jitteredtaskbuild": 25, "defint": 25}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"snuba": [0, 1, 2, 3, 4, 17, 18, 23, 25], "consum": [0, 4], "summari": 0, "messag": 0, "processor": [0, 3], "python": 0, "test": [0, 17, 25], "endpoint": 0, "rust": 0, "compat": 0, "shim": 0, "architectur": [0, 2], "pure": 0, "hybrid": 0, "data": [1, 2, 4, 6, 25], "model": [1, 25], "dataset": [1, 9, 12, 14], "entiti": [1, 10, 11], "type": 1, "relationship": 1, "between": 1, "consist": [1, 2], "storag": [1, 2, 3, 4, 8, 15, 16], "exampl": 1, "singl": 1, "multi": 1, "join": [1, 3], "overview": 2, "ingest": 2, "queri": [2, 3, 5, 6, 8, 21, 22, 25], "within": 2, "sentri": [2, 17, 18, 19, 20, 25], "deploy": 2, "error": 2, "transact": [2, 24], "flow": 2, "session": 2, "outcom": 2, "chang": 2, "captur": 2, "pipelin": [2, 3], "process": 3, "phase": 3, "legaci": 3, "snql": [3, 22, 25], "parser": 3, "valid": 3, "logic": [3, 4], "selector": 3, "translat": 3, "physic": [3, 4], "formatt": 3, "composit": 3, "subqueri": 3, "gener": 3, "express": 3, "push": 3, "down": 3, "simpl": 3, "optim": 3, "slice": 4, "under": 4, "develop": [4, 17], "configur": [4, 12, 14], "map": 4, "partit": 4, "defin": 4, "clickhous": [4, 5, 6, 7, 8], "cluster": 4, "environ": [4, 17], "prepar": [4, 25], "shard": 4, "ad": 4, "kafka": 4, "topic": 4, "work": 4, "start": [4, 18, 21], "todo": 4, "handl": 4, "subscript": [4, 11, 25], "schedul": 4, "executor": 4, "etc": 4, "Of": 5, "death": 5, "countif": 5, "doom": 5, "schema": [6, 9, 10, 11, 13, 14, 15, 16], "design": 6, "best": [6, 8], "practic": [6, 8], "column": 6, "base": 6, "dictionari": 6, "tag": 6, "promot": 6, "select": [6, 22], "indic": 6, "bloom": 6, "filter": 6, "index": 6, "like": 6, "aggreg": 6, "tabl": [6, 8], "materi": 6, "migrat": [6, 13, 23], "us": [6, 19, 20], "materialization_vers": 6, "support": 7, "version": 7, "topologi": 8, "node": 8, "v": 8, "distribut": [8, 23], "local": [8, 23], "ty": 8, "all": 8, "togeth": 8, "properti": [9, 10, 11, 13, 15, 16], "group": 13, "readabl": 15, "writabl": 16, "prerequisit": 17, "instal": 17, "run": 17, "against": 17, "get": 18, "requir": 18, "set": 18, "featur": [19, 20], "some": [19, 20], "case": [19, 20], "content": 19, "The": [21, 22], "mql": [21, 25], "languag": [21, 22], "end": 21, "limit": [21, 22], "offset": [21, 22], "rollup": 21, "scope": 21, "match": 22, "BY": 22, "where": 22, "have": 22, "order": 22, "granular": 22, "total": 22, "sampl": 22, "mode": 23, "enabl": 23, "profil": 24, "regular": 24, "On": 24, "demand": 24, "explor": 25, "send": 25, "through": 25, "web": 25, "ui": 25, "via": 25, "curl": 25, "request": 25, "respons": 25, "format": 25, "creat": 25}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})