const CATEGORIES = {
    pronouns: {
        name: "Местоимения",
        questions: [
            // Существующие
            {
                estonian: "mina/ma",
                russian: "я",
                answers: {
                    toEstonian: ["mina/ma", "sina/sa", "tema/ta", "meie/me"],
                    toRussian: ["я", "ты", "он/она", "мы"]
                },
                correct: 0
            },
            // Новые
            {
                estonian: "meie/me",
                russian: "мы",
                answers: {
                    toEstonian: ["mina/ma", "sina/sa", "meie/me", "teie/te"],
                    toRussian: ["я", "ты", "мы", "вы"]
                },
                correct: 2
            },
            {
                estonian: "teie/te",
                russian: "вы",
                answers: {
                    toEstonian: ["tema/ta", "meie/me", "teie/te", "nemad/nad"],
                    toRussian: ["он/она", "мы", "вы", "они"]
                },
                correct: 2
            },
            {
                estonian: "nemad/nad",
                russian: "они",
                answers: {
                    toEstonian: ["meie/me", "teie/te", "tema/ta", "nemad/nad"],
                    toRussian: ["мы", "вы", "он/она", "они"]
                },
                correct: 3
            },
            {
                estonian: "see",
                russian: "это",
                answers: {
                    toEstonian: ["see", "need", "too", "nood"],
                    toRussian: ["это", "эти", "то", "те"]
                },
                correct: 0
            }
        ]
    },
    
 basic_verbs: {
        name: "Основные глаголы",
        questions: [
            {
                estonian: "olema",
                russian: "быть",
                answers: {
                    toEstonian: ["olema", "minema", "tulema", "tegema"],
                    toRussian: ["быть", "идти", "приходить", "делать"]
                },
                correct: 0
            },
 {
                estonian: "rääkima",
                russian: "говорить",
                answers: {
                    toEstonian: ["kuulama", "rääkima", "küsima", "vastama"],
                    toRussian: ["слушать", "говорить", "спрашивать", "отвечать"]
                },
                correct: 1
            },
            {
                estonian: "kirjutama",
                russian: "писать",
                answers: {
                    toEstonian: ["lugema", "kirjutama", "õppima", "joonistama"],
                    toRussian: ["читать", "писать", "учиться", "рисовать"]
                },
                correct: 1
            },
            {
                estonian: "helistama",
                russian: "звонить",
                answers: {
                    toEstonian: ["rääkima", "helistama", "kirjutama", "saatma"],
                    toRussian: ["говорить", "звонить", "писать", "отправлять"]
                },
                correct: 1
            },
            {
                estonian: "kuulama",
                russian: "слушать",
                answers: {
                    toEstonian: ["vaatama", "kuulama", "rääkima", "küsima"],
                    toRussian: ["смотреть", "слушать", "говорить", "спрашивать"]
                },
                correct: 1
            },
            {
                estonian: "küsima",
                russian: "спрашивать",
                answers: {
                    toEstonian: ["vastama", "küsima", "rääkima", "ütlema"],
                    toRussian: ["отвечать", "спрашивать", "говорить", "сказать"]
                },
                correct: 1
            },
            {
                estonian: "vastama",
                russian: "отвечать",
                answers: {
                    toEstonian: ["küsima", "vastama", "rääkima", "kuulama"],
                    toRussian: ["спрашивать", "отвечать", "говорить", "слушать"]
                },
                correct: 1
            },
            {
                estonian: "ütlema",
                russian: "сказать",
                answers: {
                    toEstonian: ["rääkima", "küsima", "ütlema", "vastama"],
                    toRussian: ["говорить", "спрашивать", "сказать", "отвечать"]
                },
                correct: 2
            },
 {
                estonian: "kõndima",
                russian: "ходить пешком",
                answers: {
                    toEstonian: ["jooksma", "kõndima", "ujuma", "sõitma"],
                    toRussian: ["бегать", "ходить пешком", "плавать", "ездить"]
                },
                correct: 1
            },
            {
                estonian: "jooksma",
                russian: "бегать",
                answers: {
                    toEstonian: ["kõndima", "jooksma", "hüppama", "seisma"],
                    toRussian: ["ходить", "бегать", "прыгать", "стоять"]
                },
                correct: 1
            },
            {
                estonian: "ujuma",
                russian: "плавать",
                answers: {
                    toEstonian: ["jooksma", "kõndima", "ujuma", "lendama"],
                    toRussian: ["бегать", "ходить", "плавать", "летать"]
                },
                correct: 2
            },
            {
                estonian: "sõitma",
                russian: "ездить",
                answers: {
                    toEstonian: ["kõndima", "jooksma", "sõitma", "lendama"],
                    toRussian: ["ходить", "бегать", "ездить", "летать"]
                },
                correct: 2
            },
            {
                estonian: "lendama",
                russian: "летать",
                answers: {
                    toEstonian: ["ujuma", "sõitma", "lendama", "kõndima"],
                    toRussian: ["плавать", "ездить", "летать", "ходить"]
                },
                correct: 2
            },
            {
                estonian: "hüppama",
                russian: "прыгать",
                answers: {
                    toEstonian: ["jooksma", "kõndima", "hüppama", "seisma"],
                    toRussian: ["бегать", "ходить", "прыгать", "стоять"]
                },
                correct: 2
            },
            {
                estonian: "seisma",
                russian: "стоять",
                answers: {
                    toEstonian: ["istuma", "seisma", "lamama", "kõndima"],
                    toRussian: ["сидеть", "стоять", "лежать", "ходить"]
                },
                correct: 1
            },
            {
                estonian: "minema",
                russian: "идти",
                answers: {
                    toEstonian: ["tulema", "minema", "olema", "tegema"],
                    toRussian: ["приходить", "идти", "быть", "делать"]
                },
                correct: 1
            },
            {
                estonian: "tulema",
                russian: "приходить",
                answers: {
                    toEstonian: ["minema", "tulema", "olema", "tegema"],
                    toRussian: ["идти", "приходить", "быть", "делать"]
                },
                correct: 1
            },
            {
                estonian: "tegema",
                russian: "делать",
                answers: {
                    toEstonian: ["olema", "minema", "tulema", "tegema"],
                    toRussian: ["быть", "идти", "приходить", "делать"]
                },
                correct: 3
            },
            {
                estonian: "õppima",
                russian: "учиться",
                answers: {
                    toEstonian: ["töötama", "õppima", "lugema", "kirjutama"],
                    toRussian: ["работать", "учиться", "читать", "писать"]
                },
                correct: 1
            },
            {
                estonian: "töötama",
                russian: "работать",
                answers: {
                    toEstonian: ["õppima", "töötama", "puhkama", "magama"],
                    toRussian: ["учиться", "работать", "отдыхать", "спать"]
                },
                correct: 1
            },
            {
                estonian: "sööma",
                russian: "есть (кушать)",
                answers: {
                    toEstonian: ["jooma", "sööma", "magama", "elama"],
                    toRussian: ["пить", "есть", "спать", "жить"]
                },
                correct: 1
            },
            {
                estonian: "jooma",
                russian: "пить",
                answers: {
                    toEstonian: ["sööma", "jooma", "magama", "elama"],
                    toRussian: ["есть", "пить", "спать", "жить"]
                },
                correct: 1
            },
            {
                estonian: "magama",
                russian: "спать",
                answers: {
                    toEstonian: ["elama", "sööma", "magama", "jooma"],
                    toRussian: ["жить", "есть", "спать", "пить"]
                },
                correct: 2
            },
            {
                estonian: "elama",
                russian: "жить",
                answers: {
                    toEstonian: ["magama", "jooma", "sööma", "elama"],
                    toRussian: ["спать", "пить", "есть", "жить"]
                },
                correct: 3
            },
 // Глаголы повседневных действий
            {
                estonian: "pesema",
                russian: "мыть",
                answers: {
                    toEstonian: ["pesema", "puhastama", "kuivatama", "triikima"],
                    toRussian: ["мыть", "чистить", "сушить", "гладить"]
                },
                correct: 0
            },
            {
                estonian: "riietuma",
                russian: "одеваться",
                answers: {
                    toEstonian: ["pesema", "riietuma", "magama", "ärkama"],
                    toRussian: ["мыться", "одеваться", "спать", "просыпаться"]
                },
                correct: 1
            },
            {
                estonian: "ärkama",
                russian: "просыпаться",
                answers: {
                    toEstonian: ["magama", "ärkama", "riietuma", "sööma"],
                    toRussian: ["спать", "просыпаться", "одеваться", "есть"]
                },
                correct: 1
            },
            {
                estonian: "puhkama",
                russian: "отдыхать",
                answers: {
                    toEstonian: ["töötama", "õppima", "puhkama", "magama"],
                    toRussian: ["работать", "учиться", "отдыхать", "спать"]
                },
                correct: 2
            },
            {
                estonian: "koristama",
                russian: "убирать",
                answers: {
                    toEstonian: ["pesema", "koristama", "puhastama", "triikima"],
                    toRussian: ["мыть", "убирать", "чистить", "гладить"]
                },
                correct: 1
            },

            // Модальные глаголы
            {
                estonian: "võima",
                russian: "мочь",
                answers: {
                    toEstonian: ["tahtma", "võima", "pidama", "saama"],
                    toRussian: ["хотеть", "мочь", "должен", "получать"]
                },
                correct: 1
            },
            {
                estonian: "pidama",
                russian: "должен",
                answers: {
                    toEstonian: ["võima", "pidama", "tahtma", "saama"],
                    toRussian: ["мочь", "должен", "хотеть", "получаться"]
                },
                correct: 1
            },
            {
                estonian: "tohtima",
                russian: "разрешается",
                answers: {
                    toEstonian: ["võima", "pidama", "tohtima", "saama"],
                    toRussian: ["мочь", "должен", "разрешается", "получаться"]
                },
                correct: 2
            },
            {
                estonian: "suutma",
                russian: "быть в состоянии",
                answers: {
                    toEstonian: ["võima", "pidama", "suutma", "oskama"],
                    toRussian: ["мочь", "должен", "быть в состоянии", "уметь"]
                },
                correct: 2
            },
            {
                estonian: "oskama",
                russian: "уметь",
                answers: {
                    toEstonian: ["võima", "pidama", "suutma", "oskama"],
                    toRussian: ["мочь", "должен", "быть в состоянии", "уметь"]
                },
                correct: 3
            },
            {
                estonian: "tahtma",
                russian: "хотеть",
                answers: {
                    toEstonian: ["saama", "tahtma", "võima", "pidama"],
                    toRussian: ["получать", "хотеть", "мочь", "должен"]
                },
                correct: 1
            }
        ]
    },
body_parts: {
        name: "Части тела",
        questions: [
            {
                estonian: "pea",
                russian: "голова",
                answers: {
                    toEstonian: ["käsi", "pea", "jalg", "selg"],
                    toRussian: ["рука", "голова", "нога", "спина"]
                },
                correct: 1
            },
            {
                estonian: "käsi",
                russian: "рука",
                answers: {
                    toEstonian: ["jalg", "käsi", "pea", "kõht"],
                    toRussian: ["нога", "рука", "голова", "живот"]
                },
                correct: 1
            },
            {
                estonian: "jalg",
                russian: "нога",
                answers: {
                    toEstonian: ["käsi", "pea", "jalg", "selg"],
                    toRussian: ["рука", "голова", "нога", "спина"]
                },
                correct: 2
            },
            {
                estonian: "selg",
                russian: "спина",
                answers: {
                    toEstonian: ["kõht", "rind", "selg", "õlg"],
                    toRussian: ["живот", "грудь", "спина", "плечо"]
                },
                correct: 2
            },
            {
                estonian: "kõht",
                russian: "живот",
                answers: {
                    toEstonian: ["rind", "kõht", "selg", "kael"],
                    toRussian: ["грудь", "живот", "спина", "шея"]
                },
                correct: 1
            },
            {
                estonian: "nägu",
                russian: "лицо",
                answers: {
                    toEstonian: ["pea", "nägu", "kael", "õlg"],
                    toRussian: ["голова", "лицо", "шея", "плечо"]
                },
                correct: 1
            },
            {
                estonian: "silm",
                russian: "глаз",
                answers: {
                    toEstonian: ["nina", "silm", "suu", "kõrv"],
                    toRussian: ["нос", "глаз", "рот", "ухо"]
                },
                correct: 1
            },
            {
                estonian: "nina",
                russian: "нос",
                answers: {
                    toEstonian: ["silm", "nina", "suu", "kõrv"],
                    toRussian: ["глаз", "нос", "рот", "ухо"]
                },
                correct: 1
            },
            {
                estonian: "suu",
                russian: "рот",
                answers: {
                    toEstonian: ["nina", "kõrv", "suu", "keel"],
                    toRussian: ["нос", "ухо", "рот", "язык"]
                },
                correct: 2
            },
            {
                estonian: "kõrv",
                russian: "ухо",
                answers: {
                    toEstonian: ["silm", "nina", "suu", "kõrv"],
                    toRussian: ["глаз", "нос", "рот", "ухо"]
                },
                correct: 3
            },
            {
                estonian: "kael",
                russian: "шея",
                answers: {
                    toEstonian: ["õlg", "kael", "rind", "selg"],
                    toRussian: ["плечо", "шея", "грудь", "спина"]
                },
                correct: 1
            },
            {
                estonian: "õlg",
                russian: "плечо",
                answers: {
                    toEstonian: ["käsi", "õlg", "küünarnukk", "ranne"],
                    toRussian: ["рука", "плечо", "локоть", "запястье"]
                },
                correct: 1
            },
            {
                estonian: "küünarnukk",
                russian: "локоть",
                answers: {
                    toEstonian: ["õlg", "küünarnukk", "ranne", "sõrm"],
                    toRussian: ["плечо", "локоть", "запястье", "палец"]
                },
                correct: 1
            },
            {
                estonian: "ranne",
                russian: "запястье",
                answers: {
                    toEstonian: ["küünarnukk", "ranne", "sõrm", "käsi"],
                    toRussian: ["локоть", "запястье", "палец", "рука"]
                },
                correct: 1
            },
            {
                estonian: "sõrm",
                russian: "палец",
                answers: {
                    toEstonian: ["ranne", "sõrm", "küüs", "käsi"],
                    toRussian: ["запястье", "палец", "ноготь", "рука"]
                },
                correct: 1
            },
{
                estonian: "küüs",
                russian: "ноготь",
                answers: {
                    toEstonian: ["sõrm", "küüs", "varvas", "kand"],
                    toRussian: ["палец", "ноготь", "палец ноги", "пятка"]
                },
                correct: 1
            },
            {
                estonian: "varvas",
                russian: "палец ноги",
                answers: {
                    toEstonian: ["kand", "varvas", "küüs", "põlv"],
                    toRussian: ["пятка", "палец ноги", "ноготь", "колено"]
                },
                correct: 1
            },
            {
                estonian: "põlv",
                russian: "колено",
                answers: {
                    toEstonian: ["reis", "põlv", "säär", "kand"],
                    toRussian: ["бедро", "колено", "голень", "пятка"]
                },
                correct: 1
            },
            {
                estonian: "reis",
                russian: "бедро",
                answers: {
                    toEstonian: ["põlv", "reis", "säär", "puus"],
                    toRussian: ["колено", "бедро", "голень", "бедро"]
                },
                correct: 1
            },
            {
                estonian: "säär",
                russian: "голень",
                answers: {
                    toEstonian: ["reis", "põlv", "säär", "kand"],
                    toRussian: ["бедро", "колено", "голень", "пятка"]
                },
                correct: 2
            },
            {
                estonian: "kand",
                russian: "пятка",
                answers: {
                    toEstonian: ["varvas", "säär", "kand", "põlv"],
                    toRussian: ["палец ноги", "голень", "пятка", "колено"]
                },
                correct: 2
            },
            {
                estonian: "rind",
                russian: "грудь",
                answers: {
                    toEstonian: ["kõht", "rind", "selg", "õlg"],
                    toRussian: ["живот", "грудь", "спина", "плечо"]
                },
                correct: 1
            },
            {
                estonian: "puus",
                russian: "бедро (тазобедренный сустав)",
                answers: {
                    toEstonian: ["reis", "puus", "põlv", "selg"],
                    toRussian: ["бедро", "тазобедренный сустав", "колено", "спина"]
                },
                correct: 1
            },
            {
                estonian: "keel",
                russian: "язык",
                answers: {
                    toEstonian: ["suu", "keel", "hammas", "huul"],
                    toRussian: ["рот", "язык", "зуб", "губа"]
                },
                correct: 1
            },
            {
                estonian: "hammas",
                russian: "зуб",
                answers: {
                    toEstonian: ["keel", "suu", "hammas", "huul"],
                    toRussian: ["язык", "рот", "зуб", "губа"]
                },
                correct: 2
            },
            {
                estonian: "huul",
                russian: "губа",
                answers: {
                    toEstonian: ["suu", "keel", "hammas", "huul"],
                    toRussian: ["рот", "язык", "зуб", "губа"]
                },
                correct: 3
            },
            {
                estonian: "kulm",
                russian: "бровь",
                answers: {
                    toEstonian: ["ripsmed", "kulm", "laug", "juuksed"],
                    toRussian: ["ресницы", "бровь", "веко", "волосы"]
                },
                correct: 1
            },
            {
                estonian: "ripsmed",
                russian: "ресницы",
                answers: {
                    toEstonian: ["kulm", "ripsmed", "laug", "juuksed"],
                    toRussian: ["бровь", "ресницы", "веко", "волосы"]
                },
                correct: 1
            },
            {
                estonian: "juuksed",
                russian: "волосы",
                answers: {
                    toEstonian: ["kulm", "ripsmed", "laug", "juuksed"],
                    toRussian: ["бровь", "ресницы", "веко", "волосы"]
                },
                correct: 3
            },
{
                estonian: "laug",
                russian: "веко",
                answers: {
                    toEstonian: ["kulm", "ripsmed", "laug", "silm"],
                    toRussian: ["бровь", "ресницы", "веко", "глаз"]
                },
                correct: 2
            },
            {
                estonian: "otsmik",
                russian: "лоб",
                answers: {
                    toEstonian: ["põsk", "otsmik", "lõug", "nina"],
                    toRussian: ["щека", "лоб", "подбородок", "нос"]
                },
                correct: 1
            },
            {
                estonian: "põsk",
                russian: "щека",
                answers: {
                    toEstonian: ["otsmik", "põsk", "lõug", "kõrv"],
                    toRussian: ["лоб", "щека", "подбородок", "ухо"]
                },
                correct: 1
            },
            {
                estonian: "lõug",
                russian: "подбородок",
                answers: {
                    toEstonian: ["põsk", "otsmik", "lõug", "kael"],
                    toRussian: ["щека", "лоб", "подбородок", "шея"]
                },
                correct: 2
            },
            {
                estonian: "ranne",
                russian: "запястье",
                answers: {
                    toEstonian: ["küünarnukk", "ranne", "õlg", "käsi"],
                    toRussian: ["локоть", "запястье", "плечо", "рука"]
                },
                correct: 1
            },
            {
                estonian: "peopesa",
                russian: "ладонь",
                answers: {
                    toEstonian: ["ranne", "peopesa", "sõrm", "küüs"],
                    toRussian: ["запястье", "ладонь", "палец", "ноготь"]
                },
                correct: 1
            },
            {
                estonian: "küünar",
                russian: "предплечье",
                answers: {
                    toEstonian: ["õlg", "küünar", "ranne", "käsivars"],
                    toRussian: ["плечо", "предплечье", "запястье", "рука"]
                },
                correct: 1
            },
            {
                estonian: "kõri",
                russian: "горло",
                answers: {
                    toEstonian: ["kael", "kõri", "rind", "lõug"],
                    toRussian: ["шея", "горло", "грудь", "подбородок"]
                },
                correct: 1
            },
            {
                estonian: "kurk",
                russian: "горло (внутри)",
                answers: {
                    toEstonian: ["kõri", "kurk", "keel", "suu"],
                    toRussian: ["горло", "горло (внутри)", "язык", "рот"]
                },
                correct: 1
            },
            {
                estonian: "pahkluu",
                russian: "лодыжка",
                answers: {
                    toEstonian: ["kand", "pahkluu", "varvas", "säär"],
                    toRussian: ["пятка", "лодыжка", "палец ноги", "голень"]
                },
                correct: 1
            },
            {
                estonian: "küünarvars",
                russian: "предплечье",
                answers: {
                    toEstonian: ["õlavars", "küünarvars", "ranne", "käsi"],
                    toRussian: ["плечо", "предплечье", "запястье", "рука"]
                },
                correct: 1
            },
            {
                estonian: "õlavars",
                russian: "плечо (часть руки)",
                answers: {
                    toEstonian: ["küünarvars", "õlavars", "käsi", "õlg"],
                    toRussian: ["предплечье", "плечо", "рука", "плечо (сустав)"]
                },
                correct: 1
            },
            {
                estonian: "pöid",
                russian: "стопа",
                answers: {
                    toEstonian: ["kand", "pöid", "varvas", "pahkluu"],
                    toRussian: ["пятка", "стопа", "палец ноги", "лодыжка"]
                },
                correct: 1
            }
        ]
    },
 health: {
        name: "Здоровье",
        questions: [
            {
                estonian: "haige",
                russian: "больной",
                answers: {
                    toEstonian: ["terve", "haige", "väsinud", "nõrk"],
                    toRussian: ["здоровый", "больной", "уставший", "слабый"]
                },
                correct: 1
            },
            {
                estonian: "terve",
                russian: "здоровый",
                answers: {
                    toEstonian: ["haige", "terve", "tugev", "nõrk"],
                    toRussian: ["больной", "здоровый", "сильный", "слабый"]
                },
                correct: 1
            },
            {
                estonian: "palavik",
                russian: "температура",
                answers: {
                    toEstonian: ["nohu", "palavik", "köha", "valu"],
                    toRussian: ["насморк", "температура", "кашель", "боль"]
                },
                correct: 1
            },
            {
                estonian: "nohu",
                russian: "насморк",
                answers: {
                    toEstonian: ["köha", "nohu", "palavik", "gripp"],
                    toRussian: ["кашель", "насморк", "температура", "грипп"]
                },
                correct: 1
            },
            {
                estonian: "köha",
                russian: "кашель",
                answers: {
                    toEstonian: ["nohu", "palavik", "köha", "gripp"],
                    toRussian: ["насморк", "температура", "кашель", "грипп"]
                },
                correct: 2
            },
            {
                estonian: "valu",
                russian: "боль",
                answers: {
                    toEstonian: ["haige", "valu", "palavik", "nõrkus"],
                    toRussian: ["больной", "боль", "температура", "слабость"]
                },
                correct: 1
            },
            {
                estonian: "peavalu",
                russian: "головная боль",
                answers: {
                    toEstonian: ["kõhuvalu", "peavalu", "hambavalu", "kurgu valu"],
                    toRussian: ["боль в животе", "головная боль", "зубная боль", "боль в горле"]
                },
                correct: 1
            },
            {
                estonian: "kõhuvalu",
                russian: "боль в животе",
                answers: {
                    toEstonian: ["peavalu", "kõhuvalu", "seljavalu", "hambavalu"],
                    toRussian: ["головная боль", "боль в животе", "боль в спине", "зубная боль"]
                },
                correct: 1
            },
            {
                estonian: "hambavalu",
                russian: "зубная боль",
                answers: {
                    toEstonian: ["peavalu", "kõhuvalu", "hambavalu", "kurgu valu"],
                    toRussian: ["головная боль", "боль в животе", "зубная боль", "боль в горле"]
                },
                correct: 2
            },
            {
                estonian: "kurgu valu",
                russian: "боль в горле",
                answers: {
                    toEstonian: ["nohu", "köha", "palavik", "kurgu valu"],
                    toRussian: ["насморк", "кашель", "температура", "боль в горле"]
                },
                correct: 3
            },
            {
                estonian: "gripp",
                russian: "грипп",
                answers: {
                    toEstonian: ["nohu", "köha", "gripp", "palavik"],
                    toRussian: ["насморк", "кашель", "грипп", "температура"]
                },
                correct: 2
            },
            {
                estonian: "allergia",
                russian: "аллергия",
                answers: {
                    toEstonian: ["nohu", "gripp", "allergia", "köha"],
                    toRussian: ["насморк", "грипп", "аллергия", "кашель"]
                },
                correct: 2
            },
            {
                estonian: "ravim",
                russian: "лекарство",
                answers: {
                    toEstonian: ["tablett", "ravim", "retsept", "süst"],
                    toRussian: ["таблетка", "лекарство", "рецепт", "укол"]
                },
                correct: 1
            },
            {
                estonian: "tablett",
                russian: "таблетка",
                answers: {
                    toEstonian: ["ravim", "tablett", "süst", "retsept"],
                    toRussian: ["лекарство", "таблетка", "укол", "рецепт"]
                },
                correct: 1
            },
            {
                estonian: "retsept",
                russian: "рецепт",
                answers: {
                    toEstonian: ["ravim", "tablett", "retsept", "süst"],
                    toRussian: ["лекарство", "таблетка", "рецепт", "укол"]
                },
                correct: 2
            }
        ]
    },

    numbers: {
        name: "Числа",
        questions: [
            // Существующие
            {
                estonian: "üks",
                russian: "один",
                answers: {
                    toEstonian: ["kaks", "kolm", "üks", "neli"],
                    toRussian: ["два", "три", "один", "четыре"]
                },
                correct: 2
            },
            // Новые
            {
                estonian: "viis",
                russian: "пять",
                answers: {
                    toEstonian: ["neli", "viis", "kuus", "seitse"],
                    toRussian: ["четыре", "пять", "шесть", "семь"]
                },
                correct: 1
            },
            {
                estonian: "kuus",
                russian: "шесть",
                answers: {
                    toEstonian: ["viis", "kuus", "seitse", "kaheksa"],
                    toRussian: ["пять", "шесть", "семь", "восемь"]
                },
                correct: 1
            },
            {
                estonian: "seitse",
                russian: "семь",
                answers: {
                    toEstonian: ["kuus", "seitse", "kaheksa", "üheksa"],
                    toRussian: ["шесть", "семь", "восемь", "девять"]
                },
                correct: 1
            },
            {
                estonian: "kaheksa",
                russian: "восемь",
                answers: {
                    toEstonian: ["seitse", "kaheksa", "üheksa", "kümme"],
                    toRussian: ["семь", "восемь", "девять", "десять"]
                },
                correct: 1
            },
            {
                estonian: "üheksa",
                russian: "девять",
                answers: {
                    toEstonian: ["kaheksa", "üheksa", "kümme", "üksteist"],
                    toRussian: ["восемь", "девять", "десять", "одиннадцать"]
                },
                correct: 1
            },
            {
                estonian: "kümme",
                russian: "десять",
                answers: {
                    toEstonian: ["üheksa", "kümme", "üksteist", "kaksteist"],
                    toRussian: ["девять", "десять", "одиннадцать", "двенадцать"]
                },
                correct: 1
            }
        ]
    },   
 time: {
        name: "Время",
        questions: [
            {
                estonian: "hommik",
                russian: "утро",
                answers: {
                    toEstonian: ["hommik", "päev", "õhtu", "öö"],
                    toRussian: ["утро", "день", "вечер", "ночь"]
                },
                correct: 0
            },
            {
                estonian: "päev",
                russian: "день",
                answers: {
                    toEstonian: ["hommik", "päev", "õhtu", "öö"],
                    toRussian: ["утро", "день", "вечер", "ночь"]
                },
                correct: 1
            },
            {
                estonian: "õhtu",
                russian: "вечер",
                answers: {
                    toEstonian: ["hommik", "päev", "õhtu", "öö"],
                    toRussian: ["утро", "день", "вечер", "ночь"]
                },
                correct: 2
            },
            {
                estonian: "öö",
                russian: "ночь",
                answers: {
                    toEstonian: ["hommik", "päev", "õhtu", "öö"],
                    toRussian: ["утро", "день", "вечер", "ночь"]
                },
                correct: 3
            },
            {
                estonian: "täna",
                russian: "сегодня",
                answers: {
                    toEstonian: ["täna", "homme", "eile", "ülehomme"],
                    toRussian: ["сегодня", "завтра", "вчера", "послезавтра"]
                },
                correct: 0
            }
        ]
    },
 weather: {
        name: "Погода",
        questions: [
            {
                estonian: "päike",
                russian: "солнце",
                answers: {
                    toEstonian: ["vihm", "päike", "tuul", "pilv"],
                    toRussian: ["дождь", "солнце", "ветер", "облако"]
                },
                correct: 1
            },
{
        estonian: "äike",
        russian: "гроза",
        answers: {
            toEstonian: ["vihm", "äike", "tuul", "pilv"],
            toRussian: ["дождь", "гроза", "ветер", "облако"]
        },
        correct: 1
    },
    {
        estonian: "udu",
        russian: "туман",
        answers: {
            toEstonian: ["pilv", "udu", "vihm", "lumi"],
            toRussian: ["облако", "туман", "дождь", "снег"]
        },
        correct: 1
    },
            {
                estonian: "vihm",
                russian: "дождь",
                answers: {
                    toEstonian: ["päike", "lumi", "vihm", "tuul"],
                    toRussian: ["солнце", "снег", "дождь", "ветер"]
                },
                correct: 2
            },
            {
                estonian: "lumi",
                russian: "снег",
                answers: {
                    toEstonian: ["vihm", "lumi", "tuul", "pilv"],
                    toRussian: ["дождь", "снег", "ветер", "облако"]
                },
                correct: 1
            },
            {
                estonian: "tuul",
                russian: "ветер",
                answers: {
                    toEstonian: ["päike", "vihm", "tuul", "äike"],
                    toRussian: ["солнце", "дождь", "ветер", "гроза"]
                },
                correct: 2
            },
            {
                estonian: "pilv",
                russian: "облако",
                answers: {
                    toEstonian: ["päike", "vihm", "tuul", "pilv"],
                    toRussian: ["солнце", "дождь", "ветер", "облако"]
                },
                correct: 3
            },
            {
                estonian: "soe",
                russian: "тепло",
                answers: {
                    toEstonian: ["külm", "soe", "kuum", "jahe"],
                    toRussian: ["холодно", "тепло", "жарко", "прохладно"]
                },
                correct: 1
            },
            {
                estonian: "külm",
                russian: "холодно",
                answers: {
                    toEstonian: ["soe", "kuum", "külm", "jahe"],
                    toRussian: ["тепло", "жарко", "холодно", "прохладно"]
                },
                correct: 2
            }
        ]
    },
animals: {
    name: "Животные",
    questions: [
        {
            estonian: "koer",
            russian: "собака",
            answers: {
                toEstonian: ["kass", "koer", "hobune", "lind"],
                toRussian: ["кошка", "собака", "лошадь", "птица"]
            },
            correct: 1
        },
        {
            estonian: "kass",
            russian: "кошка",
            answers: {
                toEstonian: ["lind", "hobune", "kass", "koer"],
                toRussian: ["птица", "лошадь", "кошка", "собака"]
            },
            correct: 2
        },
        {
            estonian: "hobune",
            russian: "лошадь",
            answers: {
                toEstonian: ["hobune", "lehm", "kass", "koer"],
                toRussian: ["лошадь", "корова", "кошка", "собака"]
            },
            correct: 0
        },
        {
            estonian: "lind",
            russian: "птица",
            answers: {
                toEstonian: ["kala", "karu", "hobune", "lind"],
                toRussian: ["рыба", "медведь", "лошадь", "птица"]
            },
            correct: 3
        },
        {
            estonian: "kala",
            russian: "рыба",
            answers: {
                toEstonian: ["pard", "hunt", "kala", "siga"],
                toRussian: ["утка", "волк", "рыба", "свинья"]
            },
            correct: 2
        },
        {
            estonian: "hunt",
            russian: "волк",
            answers: {
                toEstonian: ["rebane", "hunt", "karu", "jänes"],
                toRussian: ["лиса", "волк", "медведь", "заяц"]
            },
            correct: 1
        },
        {
            estonian: "karu",
            russian: "медведь",
            answers: {
                toEstonian: ["jänes", "karu", "rebane", "siil"],
                toRussian: ["заяц", "медведь", "лиса", "ёж"]
            },
            correct: 1
        },
        {
            estonian: "rebane",
            russian: "лиса",
            answers: {
                toEstonian: ["siil", "rebane", "hunt", "karu"],
                toRussian: ["ёж", "лиса", "волк", "медведь"]
            },
            correct: 1
        },
        {
            estonian: "jänes",
            russian: "заяц",
            answers: {
                toEstonian: ["rebane", "jänes", "põder", "siil"],
                toRussian: ["лиса", "заяц", "лось", "ёж"]
            },
            correct: 1
        },
        {
            estonian: "siil",
            russian: "ёж",
            answers: {
                toEstonian: ["põder", "jänes", "siil", "rebane"],
                toRussian: ["лось", "заяц", "ёж", "лиса"]
            },
            correct: 2
        },
        {
            estonian: "lehm",
            russian: "корова",
            answers: {
                toEstonian: ["lehm", "hobune", "kass", "koer"],
                toRussian: ["корова", "лошадь", "кошка", "собака"]
            },
            correct: 0
        },
        {
            estonian: "pard",
            russian: "утка",
            answers: {
                toEstonian: ["kala", "lind", "jänes", "pard"],
                toRussian: ["рыба", "птица", "заяц", "утка"]
            },
            correct: 3
        },
        {
            estonian: "siga",
            russian: "свинья",
            answers: {
                toEstonian: ["lehm", "hunt", "karu", "siga"],
                toRussian: ["корова", "волк", "медведь", "свинья"]
            },
            correct: 3
        },
        {
            estonian: "põder",
            russian: "лось",
            answers: {
                toEstonian: ["rebane", "karu", "põder", "jänes"],
                toRussian: ["лиса", "медведь", "лось", "заяц"]
            },
            correct: 2
        },
        {
            estonian: "lammas",
            russian: "овца",
            answers: {
                toEstonian: ["koer", "kits", "lammas", "lehm"],
                toRussian: ["собака", "коза", "овца", "корова"]
            },
            correct: 2
        }
    ]
},

pharmacy: {
    name: "Аптека",
    questions: [
        {
            estonian: "ravim",
            russian: "лекарство",
            answers: {
                toEstonian: ["tablett", "ravim", "retsept", "süst"],
                toRussian: ["таблетка", "лекарство", "рецепт", "укол"]
            },
            correct: 1
        },
        {
            estonian: "tablett",
            russian: "таблетка",
            answers: {
                toEstonian: ["tablett", "süst", "ravim", "retsept"],
                toRussian: ["таблетка", "укол", "лекарство", "рецепт"]
            },
            correct: 0
        },
        {
            estonian: "retsept",
            russian: "рецепт",
            answers: {
                toEstonian: ["ravim", "retsept", "süst", "tablett"],
                toRussian: ["лекарство", "рецепт", "укол", "таблетка"]
            },
            correct: 1
        },
        {
            estonian: "süst",
            russian: "укол",
            answers: {
                toEstonian: ["ravim", "tablett", "retsept", "süst"],
                toRussian: ["лекарство", "таблетка", "рецепт", "укол"]
            },
            correct: 3
        },
        {
            estonian: "salv",
            russian: "мазь",
            answers: {
                toEstonian: ["salv", "tilgad", "kreem", "ravim"],
                toRussian: ["мазь", "капли", "крем", "лекарство"]
            },
            correct: 0
        },
        {
            estonian: "tilgad",
            russian: "капли",
            answers: {
                toEstonian: ["tilgad", "kreem", "salv", "retsept"],
                toRussian: ["капли", "крем", "мазь", "рецепт"]
            },
            correct: 0
        },
        {
            estonian: "kreem",
            russian: "крем",
            answers: {
                toEstonian: ["tilgad", "salv", "ravim", "kreem"],
                toRussian: ["капли", "мазь", "лекарство", "крем"]
            },
            correct: 3
        },
        {
            estonian: "siirup",
            russian: "сироп",
            answers: {
                toEstonian: ["tablett", "siirup", "ravim", "süst"],
                toRussian: ["таблетка", "сироп", "лекарство", "укол"]
            },
            correct: 1
        },
        {
            estonian: "vitamiinid",
            russian: "витамины",
            answers: {
                toEstonian: ["ravim", "tablett", "kreem", "vitamiinid"],
                toRussian: ["лекарство", "таблетка", "крем", "витамины"]
            },
            correct: 3
        },
        {
            estonian: "haavaside",
            russian: "бинт",
            answers: {
                toEstonian: ["plaastrid", "haavaside", "ravim", "kreem"],
                toRussian: ["пластыри", "бинт", "лекарство", "крем"]
            },
            correct: 1
        },
        {
            estonian: "plaastrid",
            russian: "пластыри",
            answers: {
                toEstonian: ["plaastrid", "haavaside", "süst", "kreem"],
                toRussian: ["пластыри", "бинт", "укол", "крем"]
            },
            correct: 0
        },
        {
            estonian: "kurguvalu ravim",
            russian: "лекарство от боли в горле",
            answers: {
                toEstonian: ["ravim", "kurguvalu ravim", "tablett", "süst"],
                toRussian: ["лекарство", "лекарство от боли в горле", "таблетка", "укол"]
            },
            correct: 1
        },
        {
            estonian: "allergia ravim",
            russian: "лекарство от аллергии",
            answers: {
                toEstonian: ["tablett", "ravim", "allergia ravim", "siirup"],
                toRussian: ["таблетка", "лекарство", "лекарство от аллергии", "сироп"]
            },
            correct: 2
        },
        {
            estonian: "valuvaigisti",
            russian: "обезболивающее",
            answers: {
                toEstonian: ["valuvaigisti", "kreem", "tablett", "ravim"],
                toRussian: ["обезболивающее", "крем", "таблетка", "лекарство"]
            },
            correct: 0
        },
        {
            estonian: "palavikualandaja",
            russian: "жаропонижающее",
            answers: {
                toEstonian: ["tablett", "ravim", "palavikualandaja", "valuvaigisti"],
                toRussian: ["таблетка", "лекарство", "жаропонижающее", "обезболивающее"]
            },
            correct: 2
        },
        {
            estonian: "silmatilgad",
            russian: "глазные капли",
            answers: {
                toEstonian: ["tablett", "tilgad", "silmatilgad", "kreem"],
                toRussian: ["таблетка", "капли", "глазные капли", "крем"]
            },
            correct: 2
        },
        {
            estonian: "ravimikapp",
            russian: "аптечка",
            answers: {
                toEstonian: ["kreem", "plaastrid", "süst", "ravimikapp"],
                toRussian: ["крем", "пластыри", "укол", "аптечка"]
            },
            correct: 3
        },
        {
            estonian: "külmapakk",
            russian: "холодный компресс",
            answers: {
                toEstonian: ["külmapakk", "plaastrid", "tablett", "haavaside"],
                toRussian: ["холодный компресс", "пластыри", "таблетка", "бинт"]
            },
            correct: 0
        },
        {
            estonian: "termomeeter",
            russian: "градусник",
            answers: {
                toEstonian: ["tablett", "haavaside", "termomeeter", "tilgad"],
                toRussian: ["таблетка", "бинт", "градусник", "капли"]
            },
            correct: 2
        },
        {
            estonian: "desinfitseerimisvahend",
            russian: "дезинфицирующее средство",
            answers: {
                toEstonian: ["plaastrid", "tablett", "kreem", "desinfitseerimisvahend"],
                toRussian: ["пластыри", "таблетка", "крем", "дезинфицирующее средство"]
            },
            correct: 3
        },
        {
            estonian: "külmakreem",
            russian: "охлаждающий крем",
            answers: {
                toEstonian: ["külmakreem", "tablett", "plaastrid", "ravim"],
                toRussian: ["охлаждающий крем", "таблетка", "пластыри", "лекарство"]
            },
            correct: 0
        },
        {
            estonian: "veevaba seep",
            russian: "сухое мыло",
            answers: {
                toEstonian: ["veevaba seep", "kreem", "tablett", "tilgad"],
                toRussian: ["сухое мыло", "крем", "таблетка", "капли"]
            },
            correct: 0
        },
                {
            estonian: "kuumakreem",
            russian: "разогревающий крем",
            answers: {
                toEstonian: ["külmakreem", "kuumakreem", "süst", "haavaside"],
                toRussian: ["охлаждающий крем", "разогревающий крем", "укол", "бинт"]
            },
            correct: 1
        },
        {
            estonian: "vererõhuaparaat",
            russian: "тонометр",
            answers: {
                toEstonian: ["termomeeter", "kreem", "vererõhuaparaat", "ravimikapp"],
                toRussian: ["градусник", "крем", "тонометр", "аптечка"]
            },
            correct: 2
        },
        {
            estonian: "hambapasta",
            russian: "зубная паста",
            answers: {
                toEstonian: ["plaastrid", "hambapasta", "tilgad", "ravim"],
                toRussian: ["пластыри", "зубная паста", "капли", "лекарство"]
            },
            correct: 1
        },
        {
            estonian: "hambahari",
            russian: "зубная щетка",
            answers: {
                toEstonian: ["plaastrid", "hambahari", "süst", "tablett"],
                toRussian: ["пластыри", "зубная щетка", "укол", "таблетка"]
            },
            correct: 1
        },
        {
            estonian: "köharohi",
            russian: "лекарство от кашля",
            answers: {
                toEstonian: ["köharohi", "ravim", "siirup", "tablett"],
                toRussian: ["лекарство от кашля", "лекарство", "сироп", "таблетка"]
            },
            correct: 0
        },
        {
            estonian: "ninapump",
            russian: "носососка",
            answers: {
                toEstonian: ["ninapump", "termomeeter", "kreem", "tilgad"],
                toRussian: ["носососка", "градусник", "крем", "капли"]
            },
            correct: 0
        },
        {
            estonian: "haavapuhastusvahend",
            russian: "средство для обработки ран",
            answers: {
                toEstonian: ["plaastrid", "külmakreem", "haavapuhastusvahend", "süst"],
                toRussian: ["пластыри", "охлаждающий крем", "средство для обработки ран", "укол"]
            },
            correct: 2
        },
        {
            estonian: "nahaõli",
            russian: "масло для кожи",
            answers: {
                toEstonian: ["nahaõli", "kreem", "tablett", "siirup"],
                toRussian: ["масло для кожи", "крем", "таблетка", "сироп"]
            },
            correct: 0
        },
        {
            estonian: "näomask",
            russian: "маска для лица",
            answers: {
                toEstonian: ["nahaõli", "näomask", "termomeeter", "plaastrid"],
                toRussian: ["масло для кожи", "маска для лица", "градусник", "пластыри"]
            },
            correct: 1
        },
        {
            estonian: "päikesekaitsekreem",
            russian: "солнцезащитный крем",
            answers: {
                toEstonian: ["päikesekaitsekreem", "nahaõli", "külmakreem", "süst"],
                toRussian: ["солнцезащитный крем", "масло для кожи", "охлаждающий крем", "укол"]
            },
            correct: 0
        },
        {
            estonian: "näopesugeel",
            russian: "гель для умывания",
            answers: {
                toEstonian: ["näopesugeel", "nahaõli", "näomask", "siirup"],
                toRussian: ["гель для умывания", "масло для кожи", "маска для лица", "сироп"]
            },
            correct: 0
        },
        {
            estonian: "rahustav tee",
            russian: "успокаивающий чай",
            answers: {
                toEstonian: ["rahustav tee", "ravim", "tilgad", "kreem"],
                toRussian: ["успокаивающий чай", "лекарство", "капли", "крем"]
            },
            correct: 0
        },
        {
            estonian: "unisustee",
            russian: "чай для сна",
            answers: {
                toEstonian: ["rahustav tee", "tablett", "ravim", "unisustee"],
                toRussian: ["успокаивающий чай", "таблетка", "лекарство", "чай для сна"]
            },
            correct: 3
        },
        {
            estonian: "köhapastillid",
            russian: "пастилки от кашля",
            answers: {
                toEstonian: ["köharohi", "köhapastillid", "siirup", "tilgad"],
                toRussian: ["лекарство от кашля", "пастилки от кашля", "сироп", "капли"]
            },
            correct: 1
        },
        {
            estonian: "haavaplaaster",
            russian: "ранозаживляющий пластырь",
            answers: {
                toEstonian: ["haavaplaaster", "plaastrid", "külmapakk", "nahaõli"],
                toRussian: ["ранозаживляющий пластырь", "пластыри", "холодный компресс", "масло для кожи"]
            },
            correct: 0
        },
        {
            estonian: "külmasprei",
            russian: "охлаждающий спрей",
            answers: {
                toEstonian: ["külmasprei", "külmakreem", "nahaõli", "süst"],
                toRussian: ["охлаждающий спрей", "охлаждающий крем", "масло для кожи", "укол"]
            },
            correct: 0
        },
        {
            estonian: "kuumakott",
            russian: "грелка",
            answers: {
                toEstonian: ["külmasprei", "külmakott", "kuumakott", "kreem"],
                toRussian: ["охлаждающий спрей", "холодный пакет", "грелка", "крем"]
            },
            correct: 2
        },
        {
            estonian: "külmakott",
            russian: "холодный пакет",
            answers: {
                toEstonian: ["külmakott", "kuumakott", "külmasprei", "nahaõli"],
                toRussian: ["холодный пакет", "грелка", "охлаждающий спрей", "масло для кожи"]
            },
            correct: 0
        }
    ]
},




professions: {
        name: "Профессии",
        questions: [
            {
                estonian: "õpetaja",
                russian: "учитель",
                answers: {
                    toEstonian: ["arst", "õpetaja", "müüja", "kokk"],
                    toRussian: ["врач", "учитель", "продавец", "повар"]
                },
                correct: 1
            },
            {
                estonian: "arst",
                russian: "врач",
                answers: {
                    toEstonian: ["õpetaja", "arst", "müüja", "juuksur"],
                    toRussian: ["учитель", "врач", "продавец", "парикмахер"]
                },
                correct: 1
            },
            {
                estonian: "müüja",
                russian: "продавец",
                answers: {
                    toEstonian: ["kokk", "juuksur", "müüja", "autojuht"],
                    toRussian: ["повар", "парикмахер", "продавец", "водитель"]
                },
                correct: 2
            },
            {
                estonian: "kokk",
                russian: "повар",
                answers: {
                    toEstonian: ["müüja", "juuksur", "kokk", "õpetaja"],
                    toRussian: ["продавец", "парикмахер", "повар", "учитель"]
                },
                correct: 2
            },
            {
                estonian: "juuksur",
                russian: "парикмахер",
                answers: {
                    toEstonian: ["arst", "müüja", "kokk", "juuksur"],
                    toRussian: ["врач", "продавец", "повар", "парикмахер"]
                },
                correct: 3
            },
            {
                estonian: "autojuht",
                russian: "водитель",
                answers: {
                    toEstonian: ["müüja", "kokk", "autojuht", "ehitaja"],
                    toRussian: ["продавец", "повар", "водитель", "строитель"]
                },
                correct: 2
            }
        ]
    },
clothes: {
        name: "Одежда",
        questions: [
            {
                estonian: "särk",
                russian: "рубашка",
                answers: {
                    toEstonian: ["püksid", "särk", "kleit", "seelik"],
                    toRussian: ["брюки", "рубашка", "платье", "юбка"]
                },
                correct: 1
            },
            {
                estonian: "püksid",
                russian: "брюки",
                answers: {
                    toEstonian: ["särk", "püksid", "kleit", "seelik"],
                    toRussian: ["рубашка", "брюки", "платье", "юбка"]
                },
                correct: 1
            },
            {
                estonian: "kleit",
                russian: "платье",
                answers: {
                    toEstonian: ["seelik", "püksid", "kleit", "mantel"],
                    toRussian: ["юбка", "брюки", "платье", "пальто"]
                },
                correct: 2
            },
            {
                estonian: "kingad",
                russian: "туфли",
                answers: {
                    toEstonian: ["saapad", "kingad", "sokid", "kindad"],
                    toRussian: ["сапоги", "туфли", "носки", "перчатки"]
                },
                correct: 1
            },
            {
                estonian: "saapad",
                russian: "сапоги",
                answers: {
                    toEstonian: ["kingad", "saapad", "sokid", "kindad"],
                    toRussian: ["туфли", "сапоги", "носки", "перчатки"]
                },
                correct: 1
            },
            {
                estonian: "müts",
                russian: "шапка",
                answers: {
                    toEstonian: ["sall", "müts", "kindad", "sokid"],
                    toRussian: ["шарф", "шапка", "перчатки", "носки"]
                },
                correct: 1
            },
            {
                estonian: "jope",
                russian: "куртка",
                answers: {
                    toEstonian: ["mantel", "jope", "kampsun", "vest"],
                    toRussian: ["пальто", "куртка", "свитер", "жилет"]
                },
                correct: 1
            }
        ]
    },

    transport: {
        name: "Транспорт",
        questions: [
            {
                estonian: "auto",
                russian: "машина",
                answers: {
                    toEstonian: ["auto", "buss", "rong", "lennuk"],
                    toRussian: ["машина", "автобус", "поезд", "самолёт"]
                },
                correct: 0
            },
            {
                estonian: "buss",
                russian: "автобус",
                answers: {
                    toEstonian: ["auto", "buss", "rong", "tramm"],
                    toRussian: ["машина", "автобус", "поезд", "трамвай"]
                },
                correct: 1
            },
            {
                estonian: "rong",
                russian: "поезд",
                answers: {
                    toEstonian: ["buss", "tramm", "rong", "lennuk"],
                    toRussian: ["автобус", "трамвай", "поезд", "самолёт"]
                },
                correct: 2
            },
            {
                estonian: "lennuk",
                russian: "самолёт",
                answers: {
                    toEstonian: ["laev", "lennuk", "rong", "tramm"],
                    toRussian: ["корабль", "самолёт", "поезд", "трамвай"]
                },
                correct: 1
            },
            {
                estonian: "jalgratas",
                russian: "велосипед",
                answers: {
                    toEstonian: ["mootorratas", "jalgratas", "auto", "buss"],
                    toRussian: ["мотоцикл", "велосипед", "машина", "автобус"]
                },
                correct: 1
            }
        ]
    },
homework: {
    name: "Домашка",
    questions: [
        {
            estonian: "Tere, Leelo! Aptshih! Vabandust!",
            russian: "Привет, Лийло! Апчхи! Извини!",
            answers: {
                toEstonian: ["Tere, Mihkel!", "Tere, Leelo! Aptshih! Vabandust!", "Tere, Leelo! Vabandust!", "Tere, Mihkel! Kuidas läheb?"],
                toRussian: ["Привет, Михкель!", "Привет, Лийло! Апчхи! Извини!", "Привет, Лийло! Извини!", "Привет, Михкель! Как дела?"]
            },
            correct: 1
        },
        {
            estonian: "Kas saaksid pärast tööd apteeki minna?",
            russian: "Можешь после работы сходить в аптеку?",
            answers: {
                toEstonian: ["Kas saaksid pärast tööd midagi tuua?", "Kas saaksid pärast tööd apteeki minna?", "Kas saaksid pärast tööd apelsinimahla tuua?", "Kas saaksid pärast tööd köhasiirupit tuua?"],
                toRussian: ["Можешь что-то принести?", "Можешь после работы сходить в аптеку?", "Можешь после работы принести апельсиновый сок?", "Можешь после работы купить сироп от кашля?"]
            },
            correct: 1
        },
        {
            estonian: "Mis kell sa jõuad?",
            russian: "Во сколько ты придёшь?",
            answers: {
                toEstonian: ["Mis kell sa jõuad?", "Mis kell sa tuled?", "Mis kell sa apteeki jõuad?", "Mis kell sa töö lõpetad?"],
                toRussian: ["Во сколько ты придёшь?", "Когда ты придёшь?", "Во сколько ты будешь у аптеки?", "Когда ты закончишь работу?"]
            },
            correct: 0
        },
        {
            estonian: "Ma kirjutan üles: üks Coldrex, imemistabletid ja üks köhasiirup.",
            russian: "Я записываю: один Coldrex, леденцы и сироп от кашля.",
            answers: {
                toEstonian: ["üks köhasiirup ja imemistabletid", "üks Coldrex ja üks köhasiirup", "üks Coldrex, imemistabletid ja üks köhasiirup", "üks apelsinimahl ja vaarikamoos"],
                toRussian: ["Сироп от кашля и леденцы.", "Coldrex и сироп от кашля.", "Coldrex, леденцы и сироп от кашля.", "Апельсиновый сок и варенье из малины."]
            },
            correct: 2
        },
        {
            estonian: "Oota üks hetk – ma kirjutan üles.",
            russian: "Подожди минутку, я запишу.",
            answers: {
                toEstonian: ["Oota üks hetk – ma kirjutan üles.", "Oota üks hetk – ma tuletan meelde.", "Oota üks hetk – ma toon sulle köhasiirupi.", "Oota üks hetk – ma tulen apteegist."],
                toRussian: ["Подожди минутку, я запишу.", "Подожди минутку, я вспомню.", "Подожди минутку, я принесу сироп от кашля.", "Подожди минутку, я схожу в аптеку."]
            },
            correct: 0
        },
{
    estonian: "Kas sa mulle midagi poest tooksid?",
    russian: "Можешь принести мне что-нибудь из магазина?",
    answers: {
        toEstonian: ["Kas sa mulle midagi apteegist tooksid?", "Kas sa mulle midagi poest tooksid?", "Kas sa mulle midagi töölt tooksid?", "Kas sa mulle midagi laualt tooksid?"],
        toRussian: ["Можешь принести мне что-нибудь из аптеки?", "Можешь принести мне что-нибудь из магазина?", "Можешь принести мне что-нибудь с работы?", "Можешь принести мне что-нибудь со стола?"]
    },
    correct: 1
},
            {
                estonian: "Mis on 'ravim' vene keeles?",
                russian: "Как будет 'лекарство' на эстонском?",
                answers: {
                    toEstonian: ["ravim", "šampoon", "tähtis", "kätte saama"],
                    toRussian: ["лекарство", "вкус", "важный", "дешевый"]
                },
                correct: 0
            },
            {
                estonian: "Kuidas öelda 'важный' eesti keeles?",
                russian: "Как перевести 'важный' на эстонский?",
                answers: {
                    toEstonian: ["tähtis", "odav", "vahe", "rohi"],
                    toRussian: ["важный", "разница", "дешевый", "трава"]
                },
                correct: 0
            },
            {
                estonian: "Mis tähendab 'kätte saama'?",
                russian: "Как перевести 'получить в руки'?",
                answers: {
                    toEstonian: ["esitama", "kätte saama", "palu", "söö"],
                    toRussian: [
                        "получить в руки",
                        "есть",
                        "просить",
                        "показывать"
                    ]
                },
                correct: 1
            },
{
    estonian: "Mul on vaja apelsinimahla ja vaarikamoosi.",
    russian: "Мне нужно апельсиновый сок и малиновое варенье.",
    answers: {
        toEstonian: ["Mul on vaja vaarikamoosi ja mett.", "Mul on vaja apelsinimahla ja vaarikamoosi.", "Mul on vaja apelsinimahla ja sidrunit.", "Mul on vaja vaarikamoosi ja sidrunit."],
        toRussian: ["Мне нужно малиновое варенье и мёд.", "Мне нужно апельсиновый сок и малиновое варенье.", "Мне нужно апельсиновый сок и лимон.", "Мне нужно малиновое варенье и лимон."]
    },
    correct: 1
},
{
    estonian: "Kas sa raha said?",
    russian: "Ты взял деньги?",
    answers: {
        toEstonian: ["Kas sa raha tõid?", "Kas sa raha said?", "Kas sa raha andsid?", "Kas sa raha jätsid?"],
        toRussian: ["Ты принёс деньги?", "Ты взял деньги?", "Ты отдал деньги?", "Ты оставил деньги?"]
    },
    correct: 1
},
{
    estonian: "Ma jõuan enne kolme.",
    russian: "Я успею до трёх.",
    answers: {
        toEstonian: ["Ma jõuan enne kolme.", "Ma jõuan pärast kolme.", "Ma jõuan kell kolm.", "Ma jõuan enne kahte."],
        toRussian: ["Я успею до трёх.", "Я успею после трёх.", "Я приду в три.", "Я успею до двух."]
    },
    correct: 0
},
{
    estonian: "Tore! Aptshih!",
    russian: "Здорово! Апчхи!",
    answers: {
        toEstonian: ["Tore! Aptshih!", "Väga hea! Aptshih!", "Hästi! Aptshih!", "Suurepärane! Aptshih!"],
        toRussian: ["Здорово! Апчхи!", "Очень хорошо! Апчхи!", "Хорошо! Апчхи!", "Прекрасно! Апчхи!"]
    },
    correct: 0
}

    ]
},
    city: {
        name: "Места в городе",
        questions: [
            {
                estonian: "pood",
                russian: "магазин",
                answers: {
                    toEstonian: ["pood", "kool", "haigla", "restoran"],
                    toRussian: ["магазин", "школа", "больница", "ресторан"]
                },
                correct: 0
            },
{
        estonian: "pangaautomaat",
        russian: "банкомат",
        answers: {
            toEstonian: ["pank", "pangaautomaat", "postkontor", "apteek"],
            toRussian: ["банк", "банкомат", "почта", "аптека"]
        },
        correct: 1
    },
    {
        estonian: "bussipeatus",
        russian: "автобусная остановка",
        answers: {
            toEstonian: ["rongijaam", "bussipeatus", "lennujaam", "sadam"],
            toRussian: ["вокзал", "автобусная остановка", "аэропорт", "порт"]
        },
        correct: 1
    },
            {
                estonian: "kool",
                russian: "школа",
                answers: {
                    toEstonian: ["pood", "kool", "haigla", "raamatukogu"],
                    toRussian: ["магазин", "школа", "больница", "библиотека"]
                },
                correct: 1
            },
            {
                estonian: "haigla",
                russian: "больница",
                answers: {
                    toEstonian: ["kool", "apteek", "haigla", "restoran"],
                    toRussian: ["школа", "аптека", "больница", "ресторан"]
                },
                correct: 2
            },
            {
                estonian: "restoran",
                russian: "ресторан",
                answers: {
                    toEstonian: ["kohvik", "pood", "restoran", "kino"],
                    toRussian: ["кафе", "магазин", "ресторан", "кино"]
                },
                correct: 2
            },
            {
                estonian: "raamatukogu",
                russian: "библиотека",
                answers: {
                    toEstonian: ["kool", "muuseum", "raamatukogu", "teater"],
                    toRussian: ["школа", "музей", "библиотека", "театр"]
                },
                correct: 2
            },
            {
                estonian: "park",
                russian: "парк",
                answers: {
                    toEstonian: ["tänav", "park", "aed", "mets"],
                    toRussian: ["улица", "парк", "сад", "лес"]
                },
                correct: 1
            }
        ]
    },

    hobbies: {
        name: "Хобби и развлечения",
        questions: [
            {
                estonian: "sport",
                russian: "спорт",
                answers: {
                    toEstonian: ["sport", "muusika", "kunst", "tants"],
                    toRussian: ["спорт", "музыка", "искусство", "танец"]
                },
                correct: 0
            },
            {
                estonian: "ujumine",
                russian: "плавание",
                answers: {
                    toEstonian: ["jooksmine", "ujumine", "suusatamine", "jalgrattasõit"],
                    toRussian: ["бег", "плавание", "катание на лыжах", "езда на велосипеде"]
                },
                correct: 1
            },
            {
                estonian: "lugemine",
                russian: "чтение",
                answers: {
                    toEstonian: ["kirjutamine", "lugemine", "joonistamine", "laulmine"],
                    toRussian: ["письмо", "чтение", "рисование", "пение"]
                },
                correct: 1
            },
            {
                estonian: "tantsimine",
                russian: "танцы",
                answers: {
                    toEstonian: ["laulmine", "tantsimine", "joonistamine", "mängimine"],
                    toRussian: ["пение", "танцы", "рисование", "игра"]
                },
                correct: 1
            },
            {
                estonian: "mängimine",
                russian: "игра",
                answers: {
                    toEstonian: ["õppimine", "lugemine", "mängimine", "magamine"],
                    toRussian: ["учёба", "чтение", "игра", "сон"]
                },
                correct: 2
            }
        ]
    },

    food_extended: {
        name: "Еда и напитки (расширенный)",
        questions: [
            {
                estonian: "supp",
                russian: "суп",
                answers: {
                    toEstonian: ["salat", "supp", "praad", "magustoit"],
                    toRussian: ["салат", "суп", "жаркое", "десерт"]
                },
                correct: 1
            },
{
            estonian: "õun",
            russian: "яблоко",
            answers: {
                toEstonian: ["õun", "pirn", "apelsin", "viinamari"],
                toRussian: ["яблоко", "груша", "апельсин", "виноград"]
            },
            correct: 0
        },
        {
            estonian: "leib",
            russian: "хлеб",
            answers: {
                toEstonian: ["piim", "või", "leib", "juust"],
                toRussian: ["молоко", "масло", "хлеб", "сыр"]
            },
            correct: 2
        },
        {
            estonian: "piim",
            russian: "молоко",
            answers: {
                toEstonian: ["piim", "vesi", "tee", "kohv"],
                toRussian: ["молоко", "вода", "чай", "кофе"]
            },
            correct: 0
        },
        {
            estonian: "suhkur",
            russian: "сахар",
            answers: {
                toEstonian: ["suhkur", "sool", "jahu", "õli"],
                toRussian: ["сахар", "соль", "мука", "масло"]
            },
            correct: 0
        },
        {
            estonian: "sool",
            russian: "соль",
            answers: {
                toEstonian: ["suhkur", "sool", "õli", "jahu"],
                toRussian: ["сахар", "соль", "масло", "мука"]
            },
            correct: 1
        },
            {
                estonian: "kartul",
                russian: "картофель",
                answers: {
                    toEstonian: ["porgand", "kartul", "kapsas", "sibul"],
                    toRussian: ["морковь", "картофель", "капуста", "лук"]
                },
                correct: 1
            },
            {
                estonian: "liha",
                russian: "мясо",
                answers: {
                    toEstonian: ["kala", "liha", "juust", "muna"],
                    toRussian: ["рыба", "мясо", "сыр", "яйцо"]
                },
                correct: 1
            },
            {
                estonian: "õun",
                russian: "яблоко",
                answers: {
                    toEstonian: ["pirn", "õun", "banaan", "apelsin"],
                    toRussian: ["груша", "яблоко", "банан", "апельсин"]
                },
                correct: 1
            },
            {
                estonian: "sai",
                russian: "белый хлеб",
                answers: {
                    toEstonian: ["leib", "sai", "piim", "või"],
                    toRussian: ["чёрный хлеб", "белый хлеб", "молоко", "масло"]
                },
                correct: 1
            },
            {
                estonian: "mahl",
                russian: "сок",
                answers: {
                    toEstonian: ["vesi", "piim", "mahl", "tee"],
                    toRussian: ["вода", "молоко", "сок", "чай"]
                },
                correct: 2
            }
        ]
    },
    emotions: {
        name: "Эмоции и чувства",
        questions: [
            {
                estonian: "rõõm",
                russian: "радость",
                answers: {
                    toEstonian: ["rõõm", "kurbus", "viha", "hirm"],
                    toRussian: ["радость", "грусть", "злость", "страх"]
                },
                correct: 0
            },
{
        estonian: "üllatus",
        russian: "удивление",
        answers: {
            toEstonian: ["rõõm", "üllatus", "hirm", "viha"],
            toRussian: ["радость", "удивление", "страх", "злость"]
        },
        correct: 1
    },
    {
        estonian: "igavus",
        russian: "скука",
        answers: {
            toEstonian: ["väsimus", "igavus", "stress", "mure"],
            toRussian: ["усталость", "скука", "стресс", "беспокойство"]
        },
        correct: 1
    },
            {
                estonian: "kurbus",
                russian: "грусть",
                answers: {
                    toEstonian: ["rõõm", "kurbus", "viha", "hirm"],
                    toRussian: ["радость", "грусть", "злость", "страх"]
                },
                correct: 1
            },
            {
                estonian: "viha",
                russian: "злость",
                answers: {
                    toEstonian: ["armastus", "hirm", "viha", "õnn"],
                    toRussian: ["любовь", "страх", "злость", "счастье"]
                },
                correct: 2
            },
            {
                estonian: "hirm",
                russian: "страх",
                answers: {
                    toEstonian: ["rõõm", "kurbus", "viha", "hirm"],
                    toRussian: ["радость", "грусть", "злость", "страх"]
                },
                correct: 3
            },
            {
                estonian: "armastus",
                russian: "любовь",
                answers: {
                    toEstonian: ["armastus", "õnn", "rõõm", "kurbus"],
                    toRussian: ["любовь", "счастье", "радость", "грусть"]
                },
                correct: 0
            },
            {
                estonian: "väsimus",
                russian: "усталость",
                answers: {
                    toEstonian: ["väsimus", "igavus", "ärevus", "stress"],
                    toRussian: ["усталость", "скука", "тревога", "стресс"]
                },
                correct: 0
            },
            {
                estonian: "õnn",
                russian: "счастье",
                answers: {
                    toEstonian: ["rõõm", "armastus", "õnn", "rahulolu"],
                    toRussian: ["радость", "любовь", "счастье", "удовлетворение"]
                },
                correct: 2
            }
        ]
    },

    colors_extended: {
        name: "Цвета (расширенный список)",
        questions: [
            {
                estonian: "punane",
                russian: "красный",
                answers: {
                    toEstonian: ["sinine", "kollane", "punane", "roheline"],
                    toRussian: ["синий", "жёлтый", "красный", "зелёный"]
                },
                correct: 2
            },
{
        estonian: "oranž",
        russian: "оранжевый",
        answers: {
            toEstonian: ["kollane", "oranž", "punane", "roosa"],
            toRussian: ["жёлтый", "оранжевый", "красный", "розовый"]
        },
        correct: 1
    },
    {
        estonian: "beež",
        russian: "бежевый",
        answers: {
            toEstonian: ["hall", "pruun", "beež", "valge"],
            toRussian: ["серый", "коричневый", "бежевый", "белый"]
        },
        correct: 2
    },
            {
                estonian: "sinine",
                russian: "синий",
                answers: {
                    toEstonian: ["punane", "sinine", "kollane", "roheline"],
                    toRussian: ["красный", "синий", "жёлтый", "зелёный"]
                },
                correct: 1
            },
            {
                estonian: "kollane",
                russian: "жёлтый",
                answers: {
                    toEstonian: ["punane", "sinine", "kollane", "roheline"],
                    toRussian: ["красный", "синий", "жёлтый", "зелёный"]
                },
                correct: 2
            },
            {
                estonian: "roheline",
                russian: "зелёный",
                answers: {
                    toEstonian: ["sinine", "kollane", "punane", "roheline"],
                    toRussian: ["синий", "жёлтый", "красный", "зелёный"]
                },
                correct: 3
            },
            {
                estonian: "must",
                russian: "чёрный",
                answers: {
                    toEstonian: ["valge", "must", "hall", "pruun"],
                    toRussian: ["белый", "чёрный", "серый", "коричневый"]
                },
                correct: 1
            },
            {
                estonian: "valge",
                russian: "белый",
                answers: {
                    toEstonian: ["must", "hall", "valge", "pruun"],
                    toRussian: ["чёрный", "серый", "белый", "коричневый"]
                },
                correct: 2
            },
            {
                estonian: "hall",
                russian: "серый",
                answers: {
                    toEstonian: ["must", "valge", "hall", "pruun"],
                    toRussian: ["чёрный", "белый", "серый", "коричневый"]
                },
                correct: 2
            },
            {
                estonian: "pruun",
                russian: "коричневый",
                answers: {
                    toEstonian: ["must", "valge", "hall", "pruun"],
                    toRussian: ["чёрный", "белый", "серый", "коричневый"]
                },
                correct: 3
            },
            {
                estonian: "roosa",
                russian: "розовый",

                answers: {
                    toEstonian: ["lilla", "roosa", "oranž", "beež"],
                    toRussian: ["фиолетовый", "розовый", "оранжевый", "бежевый"]
                },
                correct: 1
            },
            {
                estonian: "lilla",
                russian: "фиолетовый",
                answers: {
                    toEstonian: ["roosa", "oranž", "lilla", "beež"],
                    toRussian: ["розовый", "оранжевый", "фиолетовый", "бежевый"]
                },
                correct: 2
            }
        ]
    },

    school_subjects: {
        name: "Школьные предметы",
        questions: [
            {
                estonian: "matemaatika",
                russian: "математика",
                answers: {
                    toEstonian: ["matemaatika", "füüsika", "keemia", "bioloogia"],
                    toRussian: ["математика", "физика", "химия", "биология"]
                },
                correct: 0
            },
            {
                estonian: "ajalugu",
                russian: "история",
                answers: {
                    toEstonian: ["geograafia", "ajalugu", "kirjandus", "kunst"],
                    toRussian: ["география", "история", "литература", "искусство"]
                },
                correct: 1
            },
            {
                estonian: "eesti keel",
                russian: "эстонский язык",
                answers: {
                    toEstonian: ["inglise keel", "eesti keel", "vene keel", "saksa keel"],
                    toRussian: ["английский язык", "эстонский язык", "русский язык", "немецкий язык"]
                },
                correct: 1
            },
            {
                estonian: "kehaline kasvatus",
                russian: "физкультура",
                answers: {
                    toEstonian: ["kunst", "muusika", "kehaline kasvatus", "tööõpetus"],
                    toRussian: ["искусство", "музыка", "физкультура", "труд"]
                },
                correct: 2
            },
            {
                estonian: "muusika",
                russian: "музыка",
                answers: {
                    toEstonian: ["kunst", "muusika", "kirjandus", "ajalugu"],
                    toRussian: ["искусство", "музыка", "литература", "история"]
                },
                correct: 1
            },
            {
                estonian: "geograafia",
                russian: "география",
                answers: {
                    toEstonian: ["bioloogia", "keemia", "geograafia", "füüsika"],
                    toRussian: ["биология", "химия", "география", "физика"]
                },
                correct: 2
            }
        ]
    },
    furniture: {
        name: "Мебель и предметы интерьера",
        questions: [
{
                estonian: "laud",
                russian: "стол",
                answers: {
                    toEstonian: ["tool", "laud", "kapp", "voodi"],
                    toRussian: ["стул", "стол", "шкаф", "кровать"]
                },
                correct: 1
            },
            {
                estonian: "tool",
                russian: "стул",
                answers: {
                    toEstonian: ["laud", "tool", "diivan", "kapp"],
                    toRussian: ["стол", "стул", "диван", "шкаф"]
                },
                correct: 1
            },
            {
                estonian: "voodi",
                russian: "кровать",
                answers: {
                    toEstonian: ["diivan", "tool", "voodi", "kapp"],
                    toRussian: ["диван", "стул", "кровать", "шкаф"]
                },
                correct: 2
            },
            {
                estonian: "diivan",
                russian: "диван",
                answers: {
                    toEstonian: ["tool", "voodi", "diivan", "tugitool"],
                    toRussian: ["стул", "кровать", "диван", "кресло"]
                },
                correct: 2
            },
            {
                estonian: "kapp",
                russian: "шкаф",
                answers: {
                    toEstonian: ["riiul", "kapp", "laud", "tool"],
                    toRussian: ["полка", "шкаф", "стол", "стул"]
                },
                correct: 1
            },
            {
                estonian: "riiul",
                russian: "полка",
                answers: {
                    toEstonian: ["kapp", "riiul", "laud", "peegel"],
                    toRussian: ["шкаф", "полка", "стол", "зеркало"]
                },
                correct: 1
            },
            {
                estonian: "peegel",
                russian: "зеркало",
                answers: {
                    toEstonian: ["lamp", "peegel", "pilt", "vaip"],
                    toRussian: ["лампа", "зеркало", "картина", "ковёр"]
                },
                correct: 1
            },
            {
                estonian: "lamp",
                russian: "лампа",
                answers: {
                    toEstonian: ["peegel", "lamp", "kardin", "kell"],
                    toRussian: ["зеркало", "лампа", "штора", "часы"]
                },
                correct: 1
            },
            {
                estonian: "kardin",
                russian: "штора",
                answers: {
                    toEstonian: ["vaip", "kardin", "pilt", "lamp"],
                    toRussian: ["ковёр", "штора", "картина", "лампа"]
                },
                correct: 1
            },
            {
                estonian: "vaip",
                russian: "ковёр",
                answers: {
                    toEstonian: ["kardin", "pilt", "vaip", "peegel"],
                    toRussian: ["штора", "картина", "ковёр", "зеркало"]
                },
                correct: 2
            },
            {
                estonian: "pilt",
                russian: "картина",
                answers: {
                    toEstonian: ["peegel", "vaip", "pilt", "kardin"],
                    toRussian: ["зеркало", "ковёр", "картина", "штора"]
                },
                correct: 2
            },
            {
                estonian: "tugitool",
                russian: "кресло",
                answers: {
                    toEstonian: ["tool", "diivan", "tugitool", "voodi"],
                    toRussian: ["стул", "диван", "кресло", "кровать"]
                },
                correct: 2
            },
            {
                estonian: "madrats",
                russian: "матрас",
                answers: {
                    toEstonian: ["padi", "madrats", "tekk", "lina"],
                    toRussian: ["подушка", "матрас", "одеяло", "простыня"]
                },
                correct: 1
            },
            {
                estonian: "padi",
                russian: "подушка",
                answers: {
                    toEstonian: ["tekk", "padi", "lina", "madrats"],
                    toRussian: ["одеяло", "подушка", "простыня", "матрас"]
                },
                correct: 1
            },
{
                estonian: "köögikapp",
                russian: "кухонный шкаф",
                answers: {
                    toEstonian: ["riiul", "köögikapp", "kapp", "laud"],
                    toRussian: ["полка", "кухонный шкаф", "шкаф", "стол"]
                },
                correct: 1
            },
            {
                estonian: "nõudekapp",
                russian: "шкаф для посуды",
                answers: {
                    toEstonian: ["köögikapp", "nõudekapp", "riiul", "kapp"],
                    toRussian: ["кухонный шкаф", "шкаф для посуды", "полка", "шкаф"]
                },
                correct: 1
            },
            {
                estonian: "külmkapp",
                russian: "холодильник",
                answers: {
                    toEstonian: ["pliit", "külmkapp", "ahi", "nõudepesumasin"],
                    toRussian: ["плита", "холодильник", "духовка", "посудомоечная машина"]
                },
                correct: 1
            },
            {
                estonian: "köögiriiul",
                russian: "кухонная полка",
                answers: {
                    toEstonian: ["köögikapp", "köögiriiul", "nõudekapp", "riiul"],
                    toRussian: ["кухонный шкаф", "кухонная полка", "шкаф для посуды", "полка"]
                },
                correct: 1
            },
            {
                estonian: "söögilaud",
                russian: "обеденный стол",
                answers: {
                    toEstonian: ["köögikapp", "söögilaud", "kirjutuslaud", "laud"],
                    toRussian: ["кухонный шкаф", "обеденный стол", "письменный стол", "стол"]
                },
                correct: 1
            },
            {
                estonian: "kirjutuslaud",
                russian: "письменный стол",
                answers: {
                    toEstonian: ["söögilaud", "kirjutuslaud", "arvutilaud", "laud"],
                    toRussian: ["обеденный стол", "письменный стол", "компьютерный стол", "стол"]
                },
                correct: 1
            },
            {
                estonian: "arvutilaud",
                russian: "компьютерный стол",
                answers: {
                    toEstonian: ["kirjutuslaud", "arvutilaud", "söögilaud", "laud"],
                    toRussian: ["письменный стол", "компьютерный стол", "обеденный стол", "стол"]
                },
                correct: 1
            },
            {
                estonian: "kontoritool",
                russian: "офисный стул",
                answers: {
                    toEstonian: ["tool", "kontoritool", "tugitool", "töötool"],
                    toRussian: ["стул", "офисный стул", "кресло", "рабочий стул"]
                },
                correct: 1
            },
            {
                estonian: "raamaturiiul",
                russian: "книжная полка",
                answers: {
                    toEstonian: ["riiul", "raamaturiiul", "kapp", "köögiriiul"],
                    toRussian: ["полка", "книжная полка", "шкаф", "кухонная полка"]
                },
                correct: 1
            },
            {
                estonian: "sahtlikapp",
                russian: "комод",
                answers: {
                    toEstonian: ["kapp", "sahtlikapp", "riiul", "köögikapp"],
                    toRussian: ["шкаф", "комод", "полка", "кухонный шкаф"]
                },
                correct: 1
            },
            {
                estonian: "töölaud",
                russian: "рабочий стол",
                answers: {
                    toEstonian: ["kirjutuslaud", "töölaud", "arvutilaud", "söögilaud"],
                    toRussian: ["письменный стол", "рабочий стол", "компьютерный стол", "обеденный стол"]
                },
                correct: 1
            },
            {
                estonian: "dokumentide kapp",
                russian: "шкаф для документов",
                answers: {
                    toEstonian: ["raamaturiiul", "dokumentide kapp", "sahtlikapp", "kapp"],
                    toRussian: ["книжная полка", "шкаф для документов", "комод", "шкаф"]
                },
                correct: 1
            },
            {
                estonian: "tekk",
                russian: "одеяло",
                answers: {
                    toEstonian: ["padi", "lina", "tekk", "madrats"],
                    toRussian: ["подушка", "простыня", "одеяло", "матрас"]
                },
                correct: 2
            },
            {
                estonian: "laud",
                russian: "стол",
                answers: {
                    toEstonian: ["tool", "laud", "voodi", "kapp"],
                    toRussian: ["стул", "стол", "кровать", "шкаф"]
                },
                correct: 1
            },
            {
                estonian: "tool",
                russian: "стул",
                answers: {
                    toEstonian: ["laud", "tool", "diivan", "riiul"],
                    toRussian: ["стол", "стул", "диван", "полка"]
                },
                correct: 1
            },
            {
                estonian: "voodi",
                russian: "кровать",
                answers: {
                    toEstonian: ["diivan", "kapp", "voodi", "tool"],
                    toRussian: ["диван", "шкаф", "кровать", "стул"]
                },
                correct: 2
            },
            {
                estonian: "kapp",
                russian: "шкаф",
                answers: {
                    toEstonian: ["riiul", "peegel", "kapp", "laud"],
                    toRussian: ["полка", "зеркало", "шкаф", "стол"]
                },
                correct: 2
            },
            {
                estonian: "diivan",
                russian: "диван",
                answers: {
                    toEstonian: ["voodi", "tool", "diivan", "laud"],
                    toRussian: ["кровать", "стул", "диван", "стол"]
                },
                correct: 2
            },
            {
                estonian: "riiul",
                russian: "полка",
                answers: {
                    toEstonian: ["kapp", "riiul", "laud", "peegel"],
                    toRussian: ["шкаф", "полка", "стол", "зеркало"]
                },
                correct: 1
            },
            {
                estonian: "peegel",
                russian: "зеркало",
                answers: {
                    toEstonian: ["lamp", "vaip", "peegel", "kardin"],
                    toRussian: ["лампа", "ковёр", "зеркало", "штора"]
                },
                correct: 2
            },
            {
                estonian: "vaip",
                russian: "ковёр",
                answers: {
                    toEstonian: ["kardin", "vaip", "padi", "tekk"],
                    toRussian: ["штора", "ковёр", "подушка", "одеяло"]
                },
                correct: 1
            },
            {
                estonian: "kardin",
                russian: "штора",
                answers: {
                    toEstonian: ["vaip", "lamp", "kardin", "peegel"],
                    toRussian: ["ковёр", "лампа", "штора", "зеркало"]
                },
                correct: 2
            }
        ]
    },

    body_extended: {
        name: "Части тела (расширенный список)",
        questions: [
            {
                estonian: "pea",
                russian: "голова",
                answers: {
                    toEstonian: ["pea", "käsi", "jalg", "kael"],
                    toRussian: ["голова", "рука", "нога", "шея"]
                },
                correct: 0
            },
            {
                estonian: "nägu",
                russian: "лицо",
                answers: {
                    toEstonian: ["pea", "nägu", "kõrv", "nina"],
                    toRussian: ["голова", "лицо", "ухо", "нос"]
                },
                correct: 1
            },
            {
                estonian: "silm",
                russian: "глаз",
                answers: {
                    toEstonian: ["nina", "suu", "silm", "kõrv"],
                    toRussian: ["нос", "рот", "глаз", "ухо"]
                },
                correct: 2
            },
            {
                estonian: "nina",
                russian: "нос",
                answers: {
                    toEstonian: ["silm", "kõrv", "nina", "suu"],
                    toRussian: ["глаз", "ухо", "нос", "рот"]
                },
                correct: 2
            },
            {
                estonian: "suu",
                russian: "рот",
                answers: {
                    toEstonian: ["nina", "kõrv", "silm", "suu"],
                    toRussian: ["нос", "ухо", "глаз", "рот"]
                },
                correct: 3
            },
            {
                estonian: "kael",
                russian: "шея",
                answers: {
                    toEstonian: ["pea", "kael", "õlg", "selg"],
                    toRussian: ["голова", "шея", "плечо", "спина"]
                },
                correct: 1
            },
            {
                estonian: "käsi",
                russian: "рука",
                answers: {
                    toEstonian: ["jalg", "käsi", "sõrm", "küünarnukk"],
                    toRussian: ["нога", "рука", "палец", "локоть"]
                },
                correct: 1
            },
            {
                estonian: "jalg",
                russian: "нога",
                answers: {
                    toEstonian: ["käsi", "põlv", "jalg", "varvas"],
                    toRussian: ["рука", "колено", "нога", "палец ноги"]
                },
                correct: 2
            },
            {
                estonian: "selg",
                russian: "спина",
                answers: {
                    toEstonian: ["kõht", "rind", "selg", "õlg"],
                    toRussian: ["живот", "грудь", "спина", "плечо"]
                },
                correct: 2
            },
            {
                estonian: "süda",
                russian: "сердце",
                answers: {
                    toEstonian: ["kops", "süda", "maks", "neer"],
                    toRussian: ["лёгкое", "сердце", "печень", "почка"]
                },
                correct: 1
            }
        ]
    },

    nature: {
        name: "Природа и ландшафт",
        questions: [
            {
                estonian: "meri",
                russian: "море",
                answers: {
                    toEstonian: ["järv", "meri", "jõgi", "ookean"],
                    toRussian: ["озеро", "море", "река", "океан"]
                },
                correct: 1
            },
            {
                estonian: "mets",
                russian: "лес",
                answers: {
                    toEstonian: ["park", "aed", "mets", "põld"],
                    toRussian: ["парк", "сад", "лес", "поле"]
                },
                correct: 2
            },
            {
                estonian: "mägi",
                russian: "гора",
                answers: {
                    toEstonian: ["org", "mägi", "küngas", "nõlv"],
                    toRussian: ["долина", "гора", "холм", "склон"]
                },
                correct: 1
            },
            {
                estonian: "järv",
                russian: "озеро",
                answers: {
                    toEstonian: ["jõgi", "meri", "järv", "oja"],
                    toRussian: ["река", "море", "озеро", "ручей"]
                },
                correct: 2
            },
            {
                estonian: "rand",
                russian: "пляж",
                answers: {
                    toEstonian: ["meri", "rand", "sadam", "laht"],
                    toRussian: ["море", "пляж", "порт", "залив"]
                },
                correct: 1
            },
            {
                estonian: "saar",
                russian: "остров",
                answers: {
                    toEstonian: ["poolsaar", "saar", "rand", "laht"],
                    toRussian: ["полуостров", "остров", "пляж", "залив"]
                },
                correct: 1
            },
            {
                estonian: "jõgi",
                russian: "река",
                answers: {
                    toEstonian: ["oja", "järv", "jõgi", "meri"],
                    toRussian: ["ручей", "озеро", "река", "море"]
                },
                correct: 2
            },
            {
                estonian: "põld",
                russian: "поле",
                answers: {
                    toEstonian: ["aed", "mets", "põld", "niit"],
                    toRussian: ["сад", "лес", "поле", "луг"]
                },
                correct: 2
            },
            {
                estonian: "lill",
                russian: "цветок",
                answers: {
                    toEstonian: ["puu", "põõsas", "lill", "rohi"],
                    toRussian: ["дерево", "куст", "цветок", "трава"]
                },
                correct: 2
            },
            {
                estonian: "puu",
                russian: "дерево",
                answers: {
                    toEstonian: ["põõsas", "puu", "lill", "rohi"],
                    toRussian: ["куст", "дерево", "цветок", "трава"]
                },
                correct: 1
            }
        ]
    },
    food_products: {
        name: "Еда и продукты",
        questions: [
            {
                estonian: "sai",
                russian: "белый хлеб",
                answers: {
                    toEstonian: ["leib", "sai", "sepik", "kuklid"],
                    toRussian: ["чёрный хлеб", "белый хлеб", "серый хлеб", "булочки"]
                },
                correct: 1
            },
{
        estonian: "maasikad",
        russian: "клубника",
        answers: {
            toEstonian: ["vaarikad", "maasikad", "mustikad", "kirsid"],
            toRussian: ["малина", "клубника", "черника", "вишня"]
        },
        correct: 1
    },
    {
        estonian: "kohv",
        russian: "кофе",
        answers: {
            toEstonian: ["tee", "kohv", "mahl", "vesi"],
            toRussian: ["чай", "кофе", "сок", "вода"]
        },
        correct: 1
    },
    {
        estonian: "suhkur",
        russian: "сахар",
        answers: {
            toEstonian: ["sool", "suhkur", "pipar", "mesi"],
            toRussian: ["соль", "сахар", "перец", "мёд"]
        },
        correct: 1
    },
            {
                estonian: "juust",
                russian: "сыр",
                answers: {
                    toEstonian: ["või", "juust", "sink", "vorst"],
                    toRussian: ["масло", "сыр", "ветчина", "колбаса"]
                },
                correct: 1
            },
            {
                estonian: "või",
                russian: "масло",
                answers: {
                    toEstonian: ["juust", "või", "hapukoor", "jogurt"],
                    toRussian: ["сыр", "масло", "сметана", "йогурт"]
                },
                correct: 1
            },
            {
                estonian: "muna",
                russian: "яйцо",
                answers: {
                    toEstonian: ["sink", "muna", "vorst", "liha"],
                    toRussian: ["ветчина", "яйцо", "колбаса", "мясо"]
                },
                correct: 1
            },
            {
                estonian: "kartul",
                russian: "картофель",
                answers: {
                    toEstonian: ["porgand", "kartul", "kapsas", "sibul"],
                    toRussian: ["морковь", "картофель", "капуста", "лук"]
                },
                correct: 1
            },
            {
                estonian: "porgand",
                russian: "морковь",
                answers: {
                    toEstonian: ["kartul", "porgand", "kapsas", "sibul"],
                    toRussian: ["картофель", "морковь", "капуста", "лук"]
                },
                correct: 1
            },
            {
                estonian: "tomat",
                russian: "помидор",
                answers: {
                    toEstonian: ["kurk", "tomat", "paprika", "porgand"],
                    toRussian: ["огурец", "помидор", "перец", "морковь"]
                },
                correct: 1
            },
            {
                estonian: "kurk",
                russian: "огурец",
                answers: {
                    toEstonian: ["tomat", "kurk", "sibul", "kapsas"],
                    toRussian: ["помидор", "огурец", "лук", "капуста"]
                },
                correct: 1
            },
            {
                estonian: "õun",
                russian: "яблоко",
                answers: {
                    toEstonian: ["pirn", "õun", "banaan", "apelsin"],
                    toRussian: ["груша", "яблоко", "банан", "апельсин"]
                },
                correct: 1
            },
            {
                estonian: "banaan",
                russian: "банан",
                answers: {
                    toEstonian: ["õun", "pirn", "banaan", "apelsin"],
                    toRussian: ["яблоко", "груша", "банан", "апельсин"]
                },
                correct: 2
            }
        ]
    },

    time_dates: {
        name: "Время и даты",
        questions: [
            {
                estonian: "täna",
                russian: "сегодня",
                answers: {
                    toEstonian: ["täna", "homme", "eile", "ülehomme"],
                    toRussian: ["сегодня", "завтра", "вчера", "послезавтра"]
                },
                correct: 0
            },
{
        estonian: "veebruar",
        russian: "февраль",
        answers: {
            toEstonian: ["jaanuar", "veebruar", "märts", "aprill"],
            toRussian: ["январь", "февраль", "март", "апрель"]
        },
        correct: 1
    },
    {
        estonian: "märts",
        russian: "март",
        answers: {
            toEstonian: ["veebruar", "märts", "aprill", "mai"],
            toRussian: ["февраль", "март", "апрель", "май"]
        },
        correct: 1
    },
            {
                estonian: "homme",
                russian: "завтра",
                answers: {
                    toEstonian: ["täna", "homme", "eile", "ülehomme"],
                    toRussian: ["сегодня", "завтра", "вчера", "послезавтра"]
                },
                correct: 1
            },
            {
                estonian: "eile",
                russian: "вчера",
                answers: {
                    toEstonian: ["homme", "täna", "eile", "üleeile"],
                    toRussian: ["завтра", "сегодня", "вчера", "позавчера"]
                },
                correct: 2
            },
            {
                estonian: "nädal",
                russian: "неделя",
                answers: {
                    toEstonian: ["päev", "nädal", "kuu", "aasta"],
                    toRussian: ["день", "неделя", "месяц", "год"]
                },
                correct: 1
            },
            {
                estonian: "kuu",
                russian: "месяц",
                answers: {
                    toEstonian: ["nädal", "kuu", "aasta", "päev"],
                    toRussian: ["неделя", "месяц", "год", "день"]
                },
                correct: 1
            },
            {
                estonian: "jaanuar",
                russian: "январь",
                answers: {
                    toEstonian: ["jaanuar", "veebruar", "märts", "aprill"],
                    toRussian: ["январь", "февраль", "март", "апрель"]
                },
                correct: 0
            },
            {
                estonian: "kevad",
                russian: "весна",
                answers: {
                    toEstonian: ["talv", "kevad", "suvi", "sügis"],
                    toRussian: ["зима", "весна", "лето", "осень"]
                },
                correct: 1
            },
            {
                estonian: "hommik",
                russian: "утро",
                answers: {
                    toEstonian: ["hommik", "päev", "õhtu", "öö"],
                    toRussian: ["утро", "день", "вечер", "ночь"]
                },
                correct: 0
            },
            {
                estonian: "tund",
                russian: "час",
                answers: {
                    toEstonian: ["minut", "tund", "sekund", "päev"],
                    toRussian: ["минута", "час", "секунда", "день"]
                },
                correct: 1
            },
            {
                estonian: "nädalalõpp",
                russian: "выходные",
                answers: {
                    toEstonian: ["tööpäev", "nädalalõpp", "puhkus", "püha"],
                    toRussian: ["рабочий день", "выходные", "отпуск", "праздник"]
                },
                correct: 1
            }
        ]
    },

    family_relations: {
        name: "Семья и родственники",
        questions: [
            {
                estonian: "ema",
                russian: "мама",
                answers: {
                    toEstonian: ["isa", "ema", "õde", "vend"],
                    toRussian: ["папа", "мама", "сестра", "брат"]
                },
                correct: 1
            },
            {
                estonian: "isa",
                russian: "папа",
                answers: {
                    toEstonian: ["ema", "isa", "vanaema", "vanaisa"],
                    toRussian: ["мама", "папа", "бабушка", "дедушка"]
                },
                correct: 1
            },
            {
                estonian: "vanaema",
                russian: "бабушка",
                answers: {
                    toEstonian: ["ema", "tädi", "vanaema", "õde"],
                    toRussian: ["мама", "тётя", "бабушка", "сестра"]
                },
                correct: 2
            },
            {
                estonian: "vanaisa",
                russian: "дедушка",
                answers: {
                    toEstonian: ["isa", "onu", "vanaisa", "vend"],
                    toRussian: ["папа", "дядя", "дедушка", "брат"]
                },
                correct: 2
            },
            {
                estonian: "tädi",
                russian: "тётя",
                answers: {
                    toEstonian: ["onu", "õde", "tädi", "vanaema"],
                    toRussian: ["дядя", "сестра", "тётя", "бабушка"]
                },
                correct: 2
            },
            {
                estonian: "onu",
                russian: "дядя",
                answers: {
                    toEstonian: ["tädi", "vend", "onu", "vanaisa"],
                    toRussian: ["тётя", "брат", "дядя", "дедушка"]
                },
                correct: 2
            },
            {
                estonian: "naine",
                russian: "жена",
                answers: {
                    toEstonian: ["mees", "naine", "tütar", "ema"],
                    toRussian: ["муж", "жена", "дочь", "мама"]
                },
                correct: 1
            },
            {
                estonian: "mees",
                russian: "муж",
                answers: {
                    toEstonian: ["naine", "mees", "poeg", "isa"],
                    toRussian: ["жена", "муж", "сын", "папа"]
                },
                correct: 1
            },
            {
                estonian: "laps",
                russian: "ребёнок",
                answers: {
                    toEstonian: ["poeg", "tütar", "laps", "õde"],
                    toRussian: ["сын", "дочь", "ребёнок", "сестра"]
                },
                correct: 2
            },
 {
                estonian: "õde",
                russian: "сестра",
                answers: {
                    toEstonian: ["vend", "ema", "õde", "isa"],
                    toRussian: ["брат", "мама", "сестра", "папа"]
                },
                correct: 2
            },
            {
                estonian: "vend",
                russian: "брат",
                answers: {
                    toEstonian: ["õde", "isa", "vend", "ema"],
                    toRussian: ["сестра", "папа", "брат", "мама"]
                },
                correct: 2
            },
            {
                estonian: "vanaema",
                russian: "бабушка",
                answers: {
                    toEstonian: ["vanaisa", "vanaema", "tädi", "onu"],
                    toRussian: ["дедушка", "бабушка", "тётя", "дядя"]
                },
                correct: 1
            },
            {
                estonian: "vanaisa",
                russian: "дедушка",
                answers: {
                    toEstonian: ["vanaema", "vanaisa", "onu", "tädi"],
                    toRussian: ["бабушка", "дедушка", "дядя", "тётя"]
                },
                correct: 1
            },
            {
                estonian: "tädi",
                russian: "тётя",
                answers: {
                    toEstonian: ["onu", "vanaema", "tädi", "õde"],
                    toRussian: ["дядя", "бабушка", "тётя", "сестра"]
                },
                correct: 2
            },
            {
                estonian: "onu",
                russian: "дядя",
                answers: {
                    toEstonian: ["tädi", "vanaisa", "onu", "vend"],
                    toRussian: ["тётя", "дедушка", "дядя", "брат"]
                },
                correct: 2
            },
            {
                estonian: "nõbu",
                russian: "двоюродный брат/сестра",
                answers: {
                    toEstonian: ["õde", "vend", "nõbu", "tädi"],
                    toRussian: ["сестра", "брат", "двоюродный брат/сестра", "тётя"]
                },
                correct: 2
            },
            {
                estonian: "abikaasa",
                russian: "супруг/супруга",
                answers: {
                    toEstonian: ["mees", "naine", "abikaasa", "laps"],
                    toRussian: ["муж", "жена", "супруг/супруга", "ребёнок"]
                },
                correct: 2
            },
            {
                estonian: "mees",
                russian: "муж",
                answers: {
                    toEstonian: ["naine", "mees", "poeg", "tütar"],
                    toRussian: ["жена", "муж", "сын", "дочь"]
                },
                correct: 1
            },
            {
                estonian: "naine",
                russian: "жена",
                answers: {
                    toEstonian: ["mees", "naine", "ema", "tütar"],
                    toRussian: ["муж", "жена", "мама", "дочь"]
                },
                correct: 1
            },
            {
                estonian: "laps",
                russian: "ребёнок",
                answers: {
                    toEstonian: ["poeg", "tütar", "laps", "beebi"],
                    toRussian: ["сын", "дочь", "ребёнок", "малыш"]
                },
                correct: 2
            },
            {
                estonian: "poeg",
                russian: "сын",
                answers: {
                    toEstonian: ["tütar", "poeg", "vend", "õde"],
                    toRussian: ["дочь", "сын", "брат", "сестра"]
                },
                correct: 1
            },
            {
                estonian: "tütar",
                russian: "дочь",
                answers: {
                    toEstonian: ["poeg", "tütar", "õde", "vend"],
                    toRussian: ["сын", "дочь", "сестра", "брат"]
                },
                correct: 1
            },
            {
                estonian: "sugulane",
                russian: "родственник",
                answers: {
                    toEstonian: ["pere", "sugulane", "sõber", "naaber"],
                    toRussian: ["семья", "родственник", "друг", "сосед"]
                },
                correct: 1
            },
            {
                estonian: "pere",
                russian: "семья",
                answers: {
                    toEstonian: ["sugulane", "pere", "vanemad", "lapsed"],
                    toRussian: ["родственник", "семья", "родители", "дети"]
                },
                correct: 1
            },
            {
                estonian: "vanemad",
                russian: "родители",
                answers: {
                    toEstonian: ["lapsed", "vanemad", "vanavanemad", "pere"],
                    toRussian: ["дети", "родители", "бабушка и дедушка", "семья"]
                },
                correct: 1
            },
            {
                estonian: "sugulane",
                russian: "родственник",
                answers: {
                    toEstonian: ["pere", "sugulane", "sõber", "naaber"],
                    toRussian: ["семья", "родственник", "друг", "сосед"]
                },
                correct: 1
            }
        ]
    },
 kitchen_items: {
        name: "Кухонные принадлежности",
        questions: [
            {
                estonian: "kahvel",
                russian: "вилка",
                answers: {
                    toEstonian: ["lusikas", "kahvel", "nuga", "taldrik"],
                    toRussian: ["ложка", "вилка", "нож", "тарелка"]
                },
                correct: 1
            },
            {
                estonian: "lusikas",
                russian: "ложка",
                answers: {
                    toEstonian: ["kahvel", "lusikas", "nuga", "tass"],
                    toRussian: ["вилка", "ложка", "нож", "чашка"]
                },
                correct: 1
            },
            {
                estonian: "nuga",
                russian: "нож",
                answers: {
                    toEstonian: ["kahvel", "lusikas", "nuga", "klaas"],
                    toRussian: ["вилка", "ложка", "нож", "стакан"]
                },
                correct: 2
            },
            {
                estonian: "taldrik",
                russian: "тарелка",
                answers: {
                    toEstonian: ["tass", "kauss", "taldrik", "klaas"],
                    toRussian: ["чашка", "миска", "тарелка", "стакан"]
                },
                correct: 2
            },
            {
                estonian: "kauss",
                russian: "миска",
                answers: {
                    toEstonian: ["taldrik", "kauss", "tass", "kann"],
                    toRussian: ["тарелка", "миска", "чашка", "кувшин"]
                },
                correct: 1
            },
            {
                estonian: "tass",
                russian: "чашка",
                answers: {
                    toEstonian: ["klaas", "tass", "kann", "kauss"],
                    toRussian: ["стакан", "чашка", "кувшин", "миска"]
                },
                correct: 1
            },
            {
                estonian: "klaas",
                russian: "стакан",
                answers: {
                    toEstonian: ["tass", "kann", "klaas", "pudel"],
                    toRussian: ["чашка", "кувшин", "стакан", "бутылка"]
                },
                correct: 2
            },
            {
                estonian: "kann",
                russian: "кувшин",
                answers: {
                    toEstonian: ["pudel", "kann", "klaas", "tass"],
                    toRussian: ["бутылка", "кувшин", "стакан", "чашка"]
                },
                correct: 1
            },
            {
                estonian: "pott",
                russian: "кастрюля",
                answers: {
                    toEstonian: ["pann", "pott", "kaas", "kulp"],
                    toRussian: ["сковорода", "кастрюля", "крышка", "половник"]
                },
                correct: 1
            },
            {
                estonian: "pann",
                russian: "сковорода",
                answers: {
                    toEstonian: ["pott", "pann", "kaas", "spaatel"],
                    toRussian: ["кастрюля", "сковорода", "крышка", "лопатка"]
                },
                correct: 1
            },
            {
                estonian: "kaas",
                russian: "крышка",
                answers: {
                    toEstonian: ["pott", "pann", "kaas", "kulp"],
                    toRussian: ["кастрюля", "сковорода", "крышка", "половник"]
                },
                correct: 2
            },
            {
                estonian: "kulp",
                russian: "половник",
                answers: {
                    toEstonian: ["kahvel", "lusikas", "kulp", "spaatel"],
                    toRussian: ["вилка", "ложка", "половник", "лопатка"]
                },
                correct: 2
            },
            {
                estonian: "spaatel",
                russian: "лопатка",
                answers: {
                    toEstonian: ["kulp", "kahvel", "spaatel", "nuga"],
                    toRussian: ["половник", "вилка", "лопатка", "нож"]
                },
                correct: 2
            },
            {
                estonian: "köögirätt",
                russian: "кухонное полотенце",
                answers: {
                    toEstonian: ["põll", "köögirätt", "käterätik", "lapp"],
                    toRussian: ["фартук", "кухонное полотенце", "полотенце", "тряпка"]
                },
                correct: 1
            },
            {
                estonian: "põll",
                russian: "фартук",
                answers: {
                    toEstonian: ["köögirätt", "põll", "kindad", "lapp"],
                    toRussian: ["кухонное полотенце", "фартук", "перчатки", "тряпка"]
                },
                correct: 1
            },
 {
                estonian: "salvrätik",
                russian: "салфетка",
                answers: {
                    toEstonian: ["laudlina", "salvrätik", "lauamatt", "linik"],
                    toRussian: ["скатерть", "салфетка", "подставка", "салфетница"]
                },
                correct: 1
            },
            {
                estonian: "laudlina",
                russian: "скатерть",
                answers: {
                    toEstonian: ["salvrätik", "laudlina", "lauamatt", "linik"],
                    toRussian: ["салфетка", "скатерть", "подставка", "дорожка"]
                },
                correct: 1
            },
            {
                estonian: "soolatoos",
                russian: "солонка",
                answers: {
                    toEstonian: ["piprатoos", "soolatoos", "maitseainetoos", "suhkrutoos"],
                    toRussian: ["перечница", "солонка", "специи", "сахарница"]
                },
                correct: 1
            },
            {
                estonian: "pipratoos",
                russian: "перечница",
                answers: {
                    toEstonian: ["soolatoos", "pipratoos", "maitseainetoos", "suhkrutoos"],
                    toRussian: ["солонка", "перечница", "специи", "сахарница"]
                },
                correct: 1
            },
            {
                estonian: "suhkrutoos",
                russian: "сахарница",
                answers: {
                    toEstonian: ["soolatoos", "pipratoos", "suhkrutoos", "maitseainetoos"],
                    toRussian: ["солонка", "перечница", "сахарница", "специи"]
                },
                correct: 2
            },
            {
                estonian: "küünlajalg",
                russian: "подсвечник",
                answers: {
                    toEstonian: ["vaas", "küünlajalg", "alustass", "pudeliavaja"],
                    toRussian: ["ваза", "подсвечник", "блюдце", "открывалка"]
                },
                correct: 1
            },
            {
                estonian: "vaas",
                russian: "ваза",
                answers: {
                    toEstonian: ["küünlajalg", "vaas", "kauss", "kann"],
                    toRussian: ["подсвечник", "ваза", "миска", "кувшин"]
                },
                correct: 1
            },
            {
                estonian: "pudeliavaja",
                russian: "открывалка",
                answers: {
                    toEstonian: ["korgitser", "pudeliavaja", "nuga", "kahvel"],
                    toRussian: ["штопор", "открывалка", "нож", "вилка"]
                },
                correct: 1
            },
            {
                estonian: "korgitser",
                russian: "штопор",
                answers: {
                    toEstonian: ["pudeliavaja", "korgitser", "nuga", "lusikas"],
                    toRussian: ["открывалка", "штопор", "нож", "ложка"]
                },
                correct: 1
            },
            {
                estonian: "serveerimisalus",
                russian: "поднос",
                answers: {
                    toEstonian: ["taldrik", "serveerimisalus", "lauamatt", "kauss"],
                    toRussian: ["тарелка", "поднос", "подставка", "миска"]
                },
                correct: 1
            },
            {
                estonian: "lauamatt",
                russian: "подставка под горячее",
                answers: {
                    toEstonian: ["laudlina", "lauamatt", "salvrätik", "alustass"],
                    toRussian: ["скатерть", "подставка под горячее", "салфетка", "блюдце"]
                },
                correct: 1
            },
            {
                estonian: "alustass",
                russian: "блюдце",
                answers: {
                    toEstonian: ["tass", "alustass", "taldrik", "kauss"],
                    toRussian: ["чашка", "блюдце", "тарелка", "миска"]
                },
                correct: 1
            },
            {
                estonian: "salvrätikhoidja",
                russian: "салфетница",
                answers: {
                    toEstonian: ["soolatoos", "salvrätikhoidja", "pipratoos", "lauamatt"],
                    toRussian: ["солонка", "салфетница", "перечница", "подставка"]
                },
                correct: 1
            },
            {
                estonian: "pajakindad",
                russian: "прихватки",
                answers: {
                    toEstonian: ["põll", "pajakindad", "köögirätt", "lapp"],
                    toRussian: ["фартук", "прихватки", "кухонное полотенце", "тряпка"]
                },
                correct: 1
            }
        ]
    },
zeroCase: {
    name: "Нулевой падеж (KUHU?)",
    questions: [
        {
            estonian: "Kuhu sa lähed? Ma lähen ... (kool).",
            russian: "Куда ты идешь? Я иду ... (школа).",
            answers: {
                toEstonian: ["kooli", "koolis", "koolist", "kool"],
                toRussian: ["в школу", "в школе", "из школы", "школа"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu sa sõidad? Ma sõidan ... (linn).",
            russian: "Куда ты едешь? Я еду ... (город).",
            answers: {
                toEstonian: ["linna", "linnas", "linnast", "linn"],
                toRussian: ["в город", "в городе", "из города", "город"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu ta läks? Ta läks ... (pood).",
            russian: "Куда он/она ушел(а)? Он/она ушел(а) ... (магазин).",
            answers: {
                toEstonian: ["poodi", "poes", "poest", "pood"],
                toRussian: ["в магазин", "в магазине", "из магазина", "магазин"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu sa panid? Ma panin ... (laud).",
            russian: "Куда ты положил? Я положил ... (стол).",
            answers: {
                toEstonian: ["lauale", "lauas", "laualt", "laud"],
                toRussian: ["на стол", "на столе", "со стола", "стол"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu ta sõidab? Ta sõidab ... (rand).",
            russian: "Куда он/она едет? Он/она едет ... (пляж).",
            answers: {
                toEstonian: ["randa", "rannas", "rannast", "rand"],
                toRussian: ["на пляж", "на пляже", "с пляжа", "пляж"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu sa jooksed? Ma jooksen ... (park).",
            russian: "Куда ты бежишь? Я бегу ... (парк).",
            answers: {
                toEstonian: ["parki", "pargis", "pargist", "park"],
                toRussian: ["в парк", "в парке", "из парка", "парк"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu sa lähed? Ma lähen ... (mets).",
            russian: "Куда ты идешь? Я иду ... (лес).",
            answers: {
                toEstonian: ["metsa", "metsas", "metsast", "mets"],
                toRussian: ["в лес", "в лесу", "из леса", "лес"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu ta pani? Ta pani ... (riiul).",
            russian: "Куда он/она положил(а)? Он/она положил(а) ... (полка).",
            answers: {
                toEstonian: ["riiulile", "riiulis", "riiulilt", "riiul"],
                toRussian: ["на полку", "на полке", "с полки", "полка"]
            },
            correct: 0
        },
{
            estonian: "Kuhu sa lähed? Ma lähen ... (turg).",
            russian: "Куда ты идешь? Я иду ... (рынок).",
            answers: {
                toEstonian: ["turule", "turul", "turult", "turg"],
                toRussian: ["на рынок", "на рынке", "с рынка", "рынок"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu ta sõitis? Ta sõitis ... (mets).",
            russian: "Куда он/она поехал(а)? Он/она поехал(а) ... (лес).",
            answers: {
                toEstonian: ["metsa", "metsas", "metsast", "mets"],
                toRussian: ["в лес", "в лесу", "из леса", "лес"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu sa panid? Ma panin ... (tool).",
            russian: "Куда ты положил? Я положил ... (стул).",
            answers: {
                toEstonian: ["tooli", "toolil", "toolilt", "tool"],
                toRussian: ["на стул", "на стуле", "со стула", "стул"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu sa viskasid? Ma viskasin ... (prügikast).",
            russian: "Куда ты выбросил? Я выбросил ... (мусорное ведро).",
            answers: {
                toEstonian: ["prügikasti", "prügikastis", "prügikastist", "prügikast"],
                toRussian: ["в мусорное ведро", "в мусорном ведре", "из мусорного ведра", "мусорное ведро"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu nad jäid? Nad jäid ... (hotell).",
            russian: "Где они остановились? Они остановились ... (отель).",
            answers: {
                toEstonian: ["hotelli", "hotellis", "hotellist", "hotell"],
                toRussian: ["в отель", "в отеле", "из отеля", "отель"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu sa kõndisid? Ma kõndisin ... (jaam).",
            russian: "Куда ты шел? Я шел ... (вокзал).",
            answers: {
                toEstonian: ["jaama", "jaamas", "jaamast", "jaam"],
                toRussian: ["на вокзал", "на вокзале", "с вокзала", "вокзал"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu sa istusid? Ma istusin ... (pink).",
            russian: "Куда ты сел? Я сел ... (скамейка).",
            answers: {
                toEstonian: ["pingile", "pingil", "pingilt", "pink"],
                toRussian: ["на скамейку", "на скамейке", "со скамейки", "скамейка"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu te sõidate? Me sõidame ... (küla).",
            russian: "Куда вы едете? Мы едем ... (деревня).",
            answers: {
                toEstonian: ["külasse", "külas", "külalt", "küla"],
                toRussian: ["в деревню", "в деревне", "из деревни", "деревня"]
            },
            correct: 0
        },
 {
            estonian: "Kuhu sa viid? Ma viin ... (raamatukogu).",
            russian: "Куда ты несешь? Я несу ... (библиотека).",
            answers: {
                toEstonian: ["raamatukokku", "raamatukogus", "raamatukogust", "raamatukogu"],
                toRussian: ["в библиотеку", "в библиотеке", "из библиотеки", "библиотека"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu te lähete? Me läheme ... (staadion).",
            russian: "Куда вы идете? Мы идем ... (стадион).",
            answers: {
                toEstonian: ["staadionile", "staadionil", "staadionilt", "staadion"],
                toRussian: ["на стадион", "на стадионе", "со стадиона", "стадион"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu sa panid? Ma panin ... (koolikott).",
            russian: "Куда ты положил? Я положил ... (школьный рюкзак).",
            answers: {
                toEstonian: ["koolikotti", "koolikotis", "koolikotist", "koolikott"],
                toRussian: ["в школьный рюкзак", "в школьном рюкзаке", "из школьного рюкзака", "школьный рюкзак"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu ta istus? Ta istus ... (buss).",
            russian: "Куда он/она сел(а)? Он/она сел(а) ... (автобус).",
            answers: {
                toEstonian: ["bussi", "bussis", "bussist", "buss"],
                toRussian: ["в автобус", "в автобусе", "из автобуса", "автобус"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu sa tõstsid? Ma tõstsin ... (riiul).",
            russian: "Куда ты поставил? Я поставил ... (полка).",
            answers: {
                toEstonian: ["riiulile", "riiulis", "riiulilt", "riiul"],
                toRussian: ["на полку", "на полке", "с полки", "полка"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu ta kadus? Ta kadus ... (mets).",
            russian: "Куда он/она пропал(а)? Он/она пропал(а) ... (лес).",
            answers: {
                toEstonian: ["metsa", "metsas", "metsast", "mets"],
                toRussian: ["в лес", "в лесу", "из леса", "лес"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu sa jooksed? Ma jooksen ... (treening).",
            russian: "Куда ты бежишь? Я бегу ... (тренировка).",
            answers: {
                toEstonian: ["treeningule", "treeningul", "treeningult", "treening"],
                toRussian: ["на тренировку", "на тренировке", "с тренировки", "тренировка"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu sa kolid? Ma kolin ... (uus korter).",
            russian: "Куда ты переезжаешь? Я переезжаю ... (новая квартира).",
            answers: {
                toEstonian: ["uude korterisse", "uues korteris", "uuest korterist", "uus korter"],
                toRussian: ["в новую квартиру", "в новой квартире", "из новой квартиры", "новая квартира"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu te lähete? Me läheme ... (kontsert).",
            russian: "Куда вы идете? Мы идем ... (концерт).",
            answers: {
                toEstonian: ["kontserdile", "kontserdil", "kontserdilt", "kontsert"],
                toRussian: ["на концерт", "на концерте", "с концерта", "концерт"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu ta kõndis? Ta kõndis ... (rand).",
            russian: "Куда он/она шел(а)? Он/она шел(а) ... (пляж).",
            answers: {
                toEstonian: ["randa", "rannas", "rannast", "rand"],
                toRussian: ["на пляж", "на пляже", "с пляжа", "пляж"]
            },
            correct: 0
        },

        {
            estonian: "Kuhu sa tõstsid? Ma tõstsin ... (kapp).",
            russian: "Куда ты поставил? Я поставил ... (шкаф).",
            answers: {
                toEstonian: ["kappi", "kapis", "kapist", "kapp"],
                toRussian: ["в шкаф", "в шкафу", "из шкафа", "шкаф"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu ta läks? Ta läks ... (järv).",
            russian: "Куда он/она пошел(а)? Он/она пошел(а) ... (озеро).",
            answers: {
                toEstonian: ["järve", "järves", "järvest", "järv"],
                toRussian: ["к озеру", "в озере", "от озера", "озеро"]
            },
            correct: 0
        },

        {
            estonian: "Kuhu sa astusid? Ma astusin ... (auto).",
            russian: "Куда ты зашел? Я зашел ... (машина).",
            answers: {
                toEstonian: ["autosse", "autos", "autost", "auto"],
                toRussian: ["в машину", "в машине", "из машины", "машина"]
            },
            correct: 0
        },
        {
            estonian: "Kuhu sa kukkusid? Ma kukkusin ... (trepp).",
            russian: "Куда ты упал? Я упал ... (лестница).",
            answers: {
                toEstonian: ["trepile", "trepis", "trepist", "trepp"],
                toRussian: ["на лестницу", "на лестнице", "с лестницы", "лестница"]
            },
            correct: 0
        }

    ]
},

    personal_items: {
        name: "Личные вещи и аксессуары",
        questions: [
            {
                estonian: "telefon",
                russian: "телефон",
                answers: {
                    toEstonian: ["telefon", "arvuti", "kell", "kaamera"],
                    toRussian: ["телефон", "компьютер", "часы", "камера"]
                },
                correct: 0
            },
{
            estonian: "kott",
            russian: "сумка",
            answers: {
                toEstonian: ["kott", "prillid", "rahakott", "telefon"],
                toRussian: ["сумка", "очки", "кошелек", "телефон"]
            },
            correct: 0
        },
        {
            estonian: "prillid",
            russian: "очки",
            answers: {
                toEstonian: ["prillid", "kell", "telefon", "kõrvaklapid"],
                toRussian: ["очки", "часы", "телефон", "наушники"]
            },
            correct: 0
        },
        {
            estonian: "telefon",
            russian: "телефон",
            answers: {
                toEstonian: ["telefon", "kott", "kõrvaklapid", "rahakott"],
                toRussian: ["телефон", "сумка", "наушники", "кошелек"]
            },
            correct: 0
        },
        {
            estonian: "kõrvaklapid",
            russian: "наушники",
            answers: {
                toEstonian: ["telefon", "kõrvaklapid", "kell", "prillid"],
                toRussian: ["телефон", "наушники", "часы", "очки"]
            },
            correct: 1
        },
        {
            estonian: "rahakott",
            russian: "кошелек",
            answers: {
                toEstonian: ["telefon", "kott", "rahakott", "kõrvaklapid"],
                toRussian: ["телефон", "сумка", "кошелек", "наушники"]
            },
            correct: 2
        },
        {
            estonian: "kell",
            russian: "часы",
            answers: {
                toEstonian: ["telefon", "prillid", "kell", "rahakott"],
                toRussian: ["телефон", "очки", "часы", "кошелек"]
            },
            correct: 2
        },
        {
            estonian: "vihmavari",
            russian: "зонт",
            answers: {
                toEstonian: ["vihmavari", "kott", "prillid", "telefon"],
                toRussian: ["зонт", "сумка", "очки", "телефон"]
            },
            correct: 0
        },
        {
            estonian: "võti",
            russian: "ключ",
            answers: {
                toEstonian: ["võti", "telefon", "kõrvaklapid", "kott"],
                toRussian: ["ключ", "телефон", "наушники", "сумка"]
            },
            correct: 0
        },

            {
                estonian: "rahakott",
                russian: "кошелёк",
                answers: {
                    toEstonian: ["kott", "rahakott", "võtmed", "pass"],
                    toRussian: ["сумка", "кошелёк", "ключи", "паспорт"]
                },
                correct: 1
            },
            {
                estonian: "võtmed",
                russian: "ключи",
                answers: {
                    toEstonian: ["rahakott", "telefon", "võtmed", "prillid"],
                    toRussian: ["кошелёк", "телефон", "ключи", "очки"]
                },
                correct: 2
            },
            {
                estonian: "kott",
                russian: "сумка",
                answers: {
                    toEstonian: ["kott", "seljakott", "rahakott", "kohver"],
                    toRussian: ["сумка", "рюкзак", "кошелёк", "чемодан"]
                },
                correct: 0
            },
            {
                estonian: "prillid",
                russian: "очки",
                answers: {
                    toEstonian: ["kell", "prillid", "võtmed", "telefon"],
                    toRussian: ["часы", "очки", "ключи", "телефон"]
                },
                correct: 1
            },
            {
                estonian: "kell",
                russian: "часы",
                answers: {
                    toEstonian: ["telefon", "kell", "kaamera", "arvuti"],
                    toRussian: ["телефон", "часы", "камера", "компьютер"]
                },
                correct: 1
            },
            {
                estonian: "vihmavari",
                russian: "зонт",
                answers: {
                    toEstonian: ["müts", "sall", "vihmavari", "kindad"],
                    toRussian: ["шапка", "шарф", "зонт", "перчатки"]
                },
                correct: 2
            },
            {
                estonian: "pass",
                russian: "паспорт",
                answers: {
                    toEstonian: ["raha", "pass", "pilet", "kaart"],
                    toRussian: ["деньги", "паспорт", "билет", "карта"]
                },
                correct: 1
            }
        ]
    },

    health: {
        name: "Здоровье и самочувствие",
        questions: [
            {
                estonian: "haige",
                russian: "больной",
                answers: {
                    toEstonian: ["terve", "haige", "väsinud", "tugev"],
                    toRussian: ["здоровый", "больной", "уставший", "сильный"]
                },
                correct: 1
            },
            {
                estonian: "peavalu",
                russian: "головная боль",
                answers: {
                    toEstonian: ["peavalu", "kõhuvalu", "nohu", "köha"],
                    toRussian: ["головная боль", "боль в животе", "насморк", "кашель"]
                },
                correct: 0
            },
            {
                estonian: "palavik",
                russian: "температура",
                answers: {
                    toEstonian: ["nohu", "köha", "palavik", "valu"],
                    toRussian: ["насморк", "кашель", "температура", "боль"]
                },
                correct: 2
            },
            {
                estonian: "ravim",
                russian: "лекарство",
                answers: {
                    toEstonian: ["arst", "ravim", "haigla", "apteek"],
                    toRussian: ["врач", "лекарство", "больница", "аптека"]
                },
                correct: 1
            },
            {
                estonian: "terve",
                russian: "здоровый",
                answers: {
                    toEstonian: ["haige", "nõrk", "terve", "väsinud"],
                    toRussian: ["больной", "слабый", "здоровый", "уставший"]
                },
                correct: 2
            },
            {
                estonian: "väsinud",
                russian: "уставший",
                answers: {
                    toEstonian: ["terve", "haige", "väsinud", "tugev"],
                    toRussian: ["здоровый", "больной", "уставший", "сильный"]
                },
                correct: 2
            },
            {
                estonian: "hambavalu",
                russian: "зубная боль",
                answers: {
                    toEstonian: ["peavalu", "kõhuvalu", "hambavalu", "kurk valutab"],
                    toRussian: ["головная боль", "боль в животе", "зубная боль", "горло болит"]
                },
                correct: 2
            },
            {
                estonian: "kiirabi",
                russian: "скорая помощь",
                answers: {
                    toEstonian: ["arst", "haigla", "kiirabi", "apteek"],
                    toRussian: ["врач", "больница", "скорая помощь", "аптека"]
                },
                correct: 2
            }
        ]
    },

    shopping: {
        name: "Покупки и магазины",
        questions: [
            {
                estonian: "pood",
                russian: "магазин",
                answers: {
                    toEstonian: ["pood", "turg", "kauplus", "kaubamaja"],
                    toRussian: ["магазин", "рынок", "супермаркет", "торговый центр"]
                },
                correct: 0
            },
            {
                estonian: "raha",
                russian: "деньги",
                answers: {
                    toEstonian: ["hind", "raha", "kaart", "münt"],
                    toRussian: ["цена", "деньги", "карта", "монета"]
                },
                correct: 1
            },
            {
                estonian: "hind",
                russian: "цена",
                answers: {
                    toEstonian: ["raha", "hind", "allahindlus", "maksma"],
                    toRussian: ["деньги", "цена", "скидка", "платить"]
                },
                correct: 1
            },
            {
                estonian: "ostukorv",
                russian: "корзина",
                answers: {
                    toEstonian: ["kott", "ostukorv", "rahakott", "karp"],
                    toRussian: ["сумка", "корзина", "кошелёк", "коробка"]
                },
                correct: 1
            },
            {
                estonian: "müüja",
                russian: "продавец",
                answers: {
                    toEstonian: ["ostja", "müüja", "klient", "kassapidaja"],
                    toRussian: ["покупатель", "продавец", "клиент", "кассир"]
                },
                correct: 1
            },
            {
                estonian: "kviitung",
                russian: "чек",
                answers: {
                    toEstonian: ["raha", "kaart", "kviitung", "hind"],
                    toRussian: ["деньги", "карта", "чек", "цена"]
                },
                correct: 2
            },
            {
                estonian: "allahindlus",
                russian: "скидка",
                answers: {
                    toEstonian: ["hind", "kaup", "allahindlus", "pood"],
                    toRussian: ["цена", "товар", "скидка", "магазин"]
                },
                correct: 2
            },
            {
                estonian: "järjekord",
                russian: "очередь",
                answers: {
                    toEstonian: ["kassa", "järjekord", "pood", "müüja"],
                    toRussian: ["касса", "очередь", "магазин", "продавец"]
                },
                correct: 1
            },
            {
                estonian: "kaart",
                russian: "карта",
                answers: {
                    toEstonian: ["raha", "kaart", "münt", "kviitung"],
                    toRussian: ["деньги", "карта", "монета", "чек"]
                },
                correct: 1
            },
            {
                estonian: "avatud",
                russian: "открыто",
                answers: {
                    toEstonian: ["suletud", "avatud", "kinni", "lahti"],
                    toRussian: ["закрыто", "открыто", "закрыто", "открыто"]
                },
                correct: 1
            }
        ]
    },

    "apartment": {
        "name": "Квартира",
        "questions": [
            {
                "estonian": "tool",
                "russian": "стул",
                "answers": {
                    "toEstonian": ["tool", "laud", "voodi", "lamp"],
                    "toRussian": ["стул", "стол", "кровать", "лампа"]
                },
                "correct": 0
            },
            {
                "estonian": "aken",
                "russian": "окно",
                "answers": {
                    "toEstonian": ["uks", "aken", "sein", "põrand"],
                    "toRussian": ["дверь", "окно", "стена", "пол"]
                },
                "correct": 1
            },
            {
                "estonian": "kapp",
                "russian": "шкаф",
                "answers": {
                    "toEstonian": ["kapp", "peegel", "vaip", "riiul"],
                    "toRussian": ["шкаф", "зеркало", "ковер", "полка"]
                },
                "correct": 0
            },
            {
                "estonian": "voodi",
                "russian": "кровать",
                "answers": {
                    "toEstonian": ["tool", "laud", "voodi", "lamp"],
                    "toRussian": ["стул", "стол", "кровать", "лампа"]
                },
                "correct": 2
            },
            {
                "estonian": "laud",
                "russian": "стол",
                "answers": {
                    "toEstonian": ["tool", "laud", "voodi", "lamp"],
                    "toRussian": ["стул", "стол", "кровать", "лампа"]
                },
                "correct": 1
            },
            {
                "estonian": "lamp",
                "russian": "лампа",
                "answers": {
                    "toEstonian": ["tool", "laud", "voodi", "lamp"],
                    "toRussian": ["стул", "стол", "кровать", "лампа"]
                },
                "correct": 3
            },
            {
                "estonian": "uks",
                "russian": "дверь",
                "answers": {
                    "toEstonian": ["uks", "aken", "sein", "põrand"],
                    "toRussian": ["дверь", "окно", "стена", "пол"]
                },
                "correct": 0
            },
            {
                "estonian": "sein",
                "russian": "стена",
                "answers": {
                    "toEstonian": ["uks", "aken", "sein", "põrand"],
                    "toRussian": ["дверь", "окно", "стена", "пол"]
                },
                "correct": 2
            },
            {
                "estonian": "põrand",
                "russian": "пол",
                "answers": {
                    "toEstonian": ["uks", "aken", "sein", "põrand"],
                    "toRussian": ["дверь", "окно", "стена", "пол"]
                },
                "correct": 3
            },
            {
                "estonian": "peegel",
                "russian": "зеркало",
                "answers": {
                    "toEstonian": ["kapp", "peegel", "vaip", "riiul"],
                    "toRussian": ["шкаф", "зеркало", "ковер", "полка"]
                },
                "correct": 1
            },
            {
                "estonian": "vaip",
                "russian": "ковер",
                "answers": {
                    "toEstonian": ["kapp", "peegel", "vaip", "riiul"],
                    "toRussian": ["шкаф", "зеркало", "ковер", "полка"]
                },
                "correct": 2
            },
            {
                "estonian": "riiul",
                "russian": "полка",
                "answers": {
                    "toEstonian": ["kapp", "peegel", "vaip", "riiul"],
                    "toRussian": ["шкаф", "зеркало", "ковер", "полка"]
                },
                "correct": 3
            },
            {
                "estonian": "tugitool",
                "russian": "кресло",
                "answers": {
                    "toEstonian": ["tugitool", "diivan", "voodi", "lamp"],
                    "toRussian": ["кресло", "диван", "кровать", "лампа"]
                },
                "correct": 0
            },
            {
                "estonian": "diivan",
                "russian": "диван",
                "answers": {
                    "toEstonian": ["tugitool", "diivan", "voodi", "lamp"],
                    "toRussian": ["кресло", "диван", "кровать", "лампа"]
                },
                "correct": 1
            },
            {
                "estonian": "kardin",
                "russian": "занавеска",
                "answers": {
                    "toEstonian": ["kardin", "vaip", "peegel", "riiul"],
                    "toRussian": ["занавеска", "ковер", "зеркало", "полка"]
                },
                "correct": 0
            },
            {
                "estonian": "padi",
                "russian": "подушка",
                "answers": {
                    "toEstonian": ["padi", "voodi", "tool", "laud"],
                    "toRussian": ["подушка", "кровать", "стул", "стол"]
                },
                "correct": 0
            },
            {
                "estonian": "vaas",
                "russian": "ваза",
                "answers": {
                    "toEstonian": ["vaas", "peegel", "vaip", "riiul"],
                    "toRussian": ["ваза", "зеркало", "ковер", "полка"]
                },
                "correct": 0
            },
            {
                "estonian": "kamin",
                "russian": "камин",
                "answers": {
                    "toEstonian": ["kamin", "ahi", "pliit", "lamp"],
                    "toRussian": ["камин", "печь", "плита", "лампа"]
                },
                "correct": 0
            },
            {
                "estonian": "ahi",
                "russian": "печь",
                "answers": {
                    "toEstonian": ["kamin", "ahi", "pliit", "lamp"],
                    "toRussian": ["камин", "печь", "плита", "лампа"]
                },
                "correct": 1
            },
            {
                "estonian": "pliit",
                "russian": "плита",
                "answers": {
                    "toEstonian": ["kamin", "ahi", "pliit", "lamp"],
                    "toRussian": ["камин", "печь", "плита", "лампа"]
                },
                "correct": 2
            },
            {
                "estonian": "külmkapp",
                "russian": "холодильник",
                "answers": {
                    "toEstonian": ["külmkapp", "ahi", "pliit", "lamp"],
                    "toRussian": ["холодильник", "печь", "плита", "лампа"]
                },
                "correct": 0
            },
            {
                "estonian": "nõudepesumasin",
                "russian": "посудомоечная машина",
                "answers": {
                    "toEstonian": ["nõudepesumasin", "pesumasin", "kuivati", "tolmuimeja"],
                    "toRussian": ["посудомоечная машина", "стиральная машина", "сушилка", "пылесос"]
                },
                "correct": 0
            }
           ]
       },
 
city: {
    name: "Город",
    questions: [
        {
            estonian: "Где люди живут?",
            russian: "Где живут люди?",
            answers: {
                toEstonian: ["mets", "meri", "linn", "mägi"],
                toRussian: ["лес", "море", "город", "гора"]
            },
            correct: 2
        },
        {
            estonian: "По чему мы ходим в городе?",
            russian: "По чему мы ходим в городе?",
            answers: {
                toEstonian: ["tee", "jõgi", "meri", "õhk"],
                toRussian: ["дорога", "река", "море", "воздух"]
            },
            correct: 0
        },
        {
            estonian: "Где дети играют?",
            russian: "Где дети играют?",
            answers: {
                toEstonian: ["kool", "park", "pood", "kodu"],
                toRussian: ["школа", "парк", "магазин", "дом"]
            },
            correct: 1
        },
        {
            estonian: "Где мы покупаем продукты?",
            russian: "Где мы покупаем продукты?",
            answers: {
                toEstonian: ["pood", "kodu", "kool", "haigla"],
                toRussian: ["магазин", "дом", "школа", "больница"]
            },
            correct: 0
        },
        // ... и так далее

        {
            estonian: "Что находится в центре города?",
            russian: "Что находится в центре города?",
            answers: {
                toEstonian: ["mets", "põld", "linnuse müür", "jõgi"],
                toRussian: ["лес", "поле", "крепостная стена", "река"]
            },
            correct: 2
        },
        {
            estonian: "Где мы учимся?",
            russian: "Где мы учимся?",
            answers: {
                toEstonian: ["kool", "kodu", "park", "pood"],
                toRussian: ["школа", "дом", "парк", "магазин"]
            },
            correct: 0
        },
        {
            estonian: "Что стоит на улице?",
            russian: "Что стоит на улице?",
            answers: {
                toEstonian: ["laud", "tool", "voodi", "maja"],
                toRussian: ["стол", "стул", "кровать", "дом"]
            },
            correct: 3
        },
        // ... и так далее

        // Транспорт
        {
            estonian: "Чем мы ездим по городу?",
            russian: "Чем мы ездим по городу?",
            answers: {
                toEstonian: ["auto", "laev", "rong", "lennuk"],
                toRussian: ["машина", "корабль", "поезд", "самолет"]
            },
            correct: 0
        },
        // Здания
        {
            estonian: "Где мы работаем?",
            russian: "Где мы работаем?",
            answers: {
                toEstonian: ["kontor", "kodu", "park", "pood"],
                toRussian: ["офис", "дом", "парк", "магазин"]
            },
            correct: 0
        },
        // Природа в городе
        {
            estonian: "Что растет в городском парке?",
            russian: "Что растет в городском парке?",
            answers: {
                toEstonian: ["puu", "kivi", "maja", "auto"],
                toRussian: ["дерево", "камень", "дом", "машина"]
            },
            correct: 0
        },
        {
            estonian: "Где люди живут?",
            russian: "Где живут люди?",
            answers: {
                toEstonian: ["mets", "meri", "linn", "mägi"],
                toRussian: ["лес", "море", "город", "гора"]
            },
            correct: 2
        },
        {
            estonian: "По чему мы ходим в городе?",
            russian: "По чему мы ходим в городе?",
            answers: {
                toEstonian: ["tee", "jõgi", "meri", "õhk"],
                toRussian: ["дорога", "река", "море", "воздух"]
            },
            correct: 0
        },
        {
            estonian: "Где дети играют?",
            russian: "Где дети играют?",
            answers: {
                toEstonian: ["kool", "park", "pood", "kodu"],
                toRussian: ["школа", "парк", "магазин", "дом"]
            },
            correct: 1
        },
        {
            estonian: "Где мы покупаем продукты?",
            russian: "Где мы покупаем продукты?",
            answers: {
                toEstonian: ["pood", "kodu", "kool", "haigla"],
                toRussian: ["магазин", "дом", "школа", "больница"]
            },
            correct: 0
        },
      
         {
            estonian: "Что стоит на улице?",
            russian: "Что стоит на улице?",
            answers: {
                toEstonian: ["laud", "tool", "voodi", "maja"],
                toRussian: ["стол", "стул", "кровать", "дом"]
            },
            correct: 3
        },
        // ... и так далее

        // Транспорт
        {
            estonian: "Чем мы ездим по городу?",
            russian: "Чем мы ездим по городу?",
            answers: {
                toEstonian: ["auto", "laev", "rong", "lennuk"],
                toRussian: ["машина", "корабль", "поезд", "самолет"]
            },
            correct: 0
        },
        // Здания
        {
            estonian: "Где мы работаем?",
            russian: "Где мы работаем?",
            answers: {
                toEstonian: ["kontor", "kodu", "park", "pood"],
                toRussian: ["офис", "дом", "парк", "магазин"]
            },
            correct: 0
        },
        // Природа в городе
        {
            estonian: "Что растет в городском парке?",
            russian: "Что растет в городском парке?",
            answers: {
                toEstonian: ["puu", "kivi", "maja", "auto"],
                toRussian: ["дерево", "камень", "дом", "машина"]
            },
            correct: 0
        },
        {
            estonian: "Где мы покупаем одежду?",
            russian: "Где мы покупаем одежду?",
            answers: {
                toEstonian: ["pood", "kodu", "kool", "haigla"],
                toRussian: ["магазин", "дом", "школа", "больница"]
            },
            correct: 0
        },
        {
            estonian: "Что есть почти на каждой улице?",
            russian: "Что есть почти на каждой улице?",
            answers: {
                toEstonian: ["mets", "jõgi", "maja", "laev"],
                toRussian: ["лес", "река", "дом", "корабль"]
            },
            correct: 2
        },
        {
            estonian: "Куда мы идем, чтобы посмотреть фильм?",
            russian: "Куда мы идем, чтобы посмотреть фильм?",
            answers: {
                toEstonian: ["kino", "pood", "kodu", "kool"],
                toRussian: ["кинотеатр", "магазин", "дом", "школа"]
            },
            correct: 0
        },
        {
            estonian: "Где мы можем почитать книгу?",
            russian: "Где мы можем почитать книгу?",
            answers: {
                toEstonian: ["raamatukogu", "pood", "park", "kino"],
                toRussian: ["библиотека", "магазин", "парк", "кинотеатр"]
            },
            correct: 0
        },
        {
            estonian: "Что есть на крыше многих домов?",
            russian: "Что есть на крыше многих домов?",
            answers: {
                toEstonian: ["aken", "uks", "katus", "trepp"],
                toRussian: ["окно", "дверь", "крыша", "лестница"]
            },
            correct: 2
        },
        {
            estonian: "Чем мы ездим в общественном транспорте?",
            russian: "Чем мы ездим в общественном транспорте?",
            answers: {
                toEstonian: ["autobuss", "jalgratas", "mootorratas", "laev"],
                toRussian: ["автобус", "велосипед", "мотоцикл", "корабль"]
            },
            correct: 0
        },
        {
            estonian: "Где мы можем купить хлеб?",
            russian: "Где мы можем купить хлеб?",
            answers: {
                toEstonian: ["pagariäri", "apteek", "raamatukogu", "kino"],
                toRussian: ["пекарня", "аптека", "библиотека", "кинотеатр"]
            },
            correct: 0
        },
        {
            estonian: "Куда мы идем, когда болеем?",
            russian: "Куда мы идем, когда болеем?",
            answers: {
                toEstonian: ["haigla", "kool", "park", "pood"],
                toRussian: ["больница", "школа", "парк", "магазин"]
            },
            correct: 0
        },
        {
            estonian: "Где мы можем посмотреть на картины?",
            russian: "Где мы можем посмотреть на картины?",
            answers: {
                toEstonian: ["muuseum", "kino", "pood", "raamatukogu"],
                toRussian: ["музей", "кинотеатр", "магазин", "библиотека"]
            },
            correct: 0
        },
        {
            estonian: "Где люди живут?",
            russian: "Где живут люди?",
            answers: {
                toEstonian: ["mets", "meri", "linn", "mägi"],
                toRussian: ["лес", "море", "город", "гора"]
            },
            correct: 2
        },
        {
            estonian: "По чему мы ходим в городе?",
            russian: "По чему мы ходим в городе?",
            answers: {
                toEstonian: ["tee", "jõgi", "meri", "õhk"],
                toRussian: ["дорога", "река", "море", "воздух"]
            },
            correct: 0
        },
        {
            estonian: "Где дети играют?",
            russian: "Где дети играют?",
            answers: {
                toEstonian: ["kool", "park", "pood", "kodu"],
                toRussian: ["школа", "парк", "магазин", "дом"]
            },
            correct: 1
        },
        {
            estonian: "Где мы покупаем продукты?",
            russian: "Где мы покупаем продукты?",
            answers: {
                toEstonian: ["pood", "kodu", "kool", "haigla"],
                toRussian: ["магазин", "дом", "школа", "больница"]
            },
            correct: 0
        },
        // ... и так далее

        {
            estonian: "Что находится в центре города?",
            russian: "Что находится в центре города?",
            answers: {
                toEstonian: ["mets", "põld", "linnuse müür", "jõgi"],
                toRussian: ["лес", "поле", "крепостная стена", "река"]
            },
            correct: 2
        },
        {
            estonian: "Где мы учимся?",
            russian: "Где мы учимся?",
            answers: {
                toEstonian: ["kool", "kodu", "park", "pood"],
                toRussian: ["школа", "дом", "парк", "магазин"]
            },
            correct: 0
        },
        {
            estonian: "Что стоит на улице?",
            russian: "Что стоит на улице?",
            answers: {
                toEstonian: ["laud", "tool", "voodi", "maja"],
                toRussian: ["стол", "стул", "кровать", "дом"]
            },
            correct: 3
        },
        // ... и так далее

        // Транспорт
        {
            estonian: "Чем мы ездим по городу?",
            russian: "Чем мы ездим по городу?",
            answers: {
                toEstonian: ["auto", "laev", "rong", "lennuk"],
                toRussian: ["машина", "корабль", "поезд", "самолет"]
            },
            correct: 0
        },
        // Здания
        {
            estonian: "Где мы работаем?",
            russian: "Где мы работаем?",
            answers: {
                toEstonian: ["kontor", "kodu", "park", "pood"],
                toRussian: ["офис", "дом", "парк", "магазин"]
            },
            correct: 0
        },
        // Природа в городе
        {
            estonian: "Что растет в городском парке?",
            russian: "Что растет в городском парке?",
            answers: {
                toEstonian: ["puu", "kivi", "maja", "auto"],
                toRussian: ["дерево", "камень", "дом", "машина"]
            },
            correct: 0
        },
        // ... и так далее
    ]
},
    weekdays: {
        name: "Дни недели",
        questions: [
            {
                estonian: "esmaspäev",
                russian: "понедельник",
                answers: {
                    toEstonian: ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev"],
                    toRussian: ["понедельник", "вторник", "среда", "четверг"]
                },
                correct: 0
            },
            {
                estonian: "teisipäev",
                russian: "вторник",
                answers: {
                    toEstonian: ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev"],
                    toRussian: ["понедельник", "вторник", "среда", "четверг"]
                },
                correct: 1
            },
            {
                estonian: "kolmapäev",
                russian: "среда",
                answers: {
                    toEstonian: ["teisipäev", "kolmapäev", "neljapäev", "reede"],
                    toRussian: ["вторник", "среда", "четверг", "пятница"]
                },
                correct: 1
            },
            {
                estonian: "neljapäev",
                russian: "четверг",
                answers: {
                    toEstonian: ["kolmapäev", "neljapäev", "reede", "laupäev"],
                    toRussian: ["среда", "четверг", "пятница", "суббота"]
                },
                correct: 1
            },
            {
                estonian: "reede",
                russian: "пятница",
                answers: {
                    toEstonian: ["neljapäev", "reede", "laupäev", "pühapäev"],
                    toRussian: ["четверг", "пятница", "суббота", "воскресенье"]
                },
                correct: 1
            }
        ]
    }
};