export default (type) => {
    let info = []
    switch(type) {
        case "Квазар":
            info = infoOfObjects.cvasar
            break;
        case "Черная дыра":
            info = infoOfObjects.blackHole
            break;
        case "Млечный путь":
            info = infoOfObjects.milkyWay
            break;


        case "Звезда класса G":
            info = infoOfObjects.starG
            break;
        case "Звезда класса A":
            info = infoOfObjects.starA
            break;
        case "Звезда класса O":
            info = infoOfObjects.starO
            break;


        case "Марс":
            info = infoOfObjects.mars
            break;
        case "Юпитер":
            info = infoOfObjects.jupiter
            break;
        case "Нептун":
            info = infoOfObjects.neptun
            break;
        
        case "Звезда класса O":
            info = infoOfObjects.starO
            break;
}
    return info
}


const infoOfObjects = {
    cvasar: [
        "Это астрономические объекты, замечательные тем что черная дыра в центре галактики.",
        "Не успевая 'поглатить' огромное колличество материи создатет диск акреции и мощные лучи, в основном радио-диапозона, но зачастую и видимые.",
        "Квазары производят в триллионы раз больше энергии чем наше Солнце.",
        "Материя в акреционном диске очень сильно раскаляется из-за трения, что и вызывает столь мощное излучение.",
        "Однако, стоит отметить, что не смотря на мощноее излучение, видимых слабо вооруженным глазом не так много, всего один.",
    ],
    blackHole: [
        "Чаще всего черные дыры образуются в конце жизни массивных звед.",
        "Огромные массы сжатые до размера спичечного коробка приводят к тому что даже свет не может покинуть горизонт событий.",
        "Предположительно, массы черных дыр не ограничены ни с меньшей стороны, ни с большей, что означает, что черные дыры могут быть и с булавку (но не долго), так и массой с целую галактику.",
        "Вы знаете, что черные дыры испаряются?)",
    ],
    starG: [
        "Относительно более младших собратьев совсем маленькие звезды",
        "Звезды О и А класса тоже современем тоже станут солнце подобными, когда переварят водород",
        "Все звезды развиваются по плюс-минус одному сценарию и большую часть времени находятся в состоянии 'Желтых'",
        "",
    ],
    starO: [
        "Обычно самые молодые и самые горячие звезды.",
        "Современем, когда в недрах кончается водород остывают и становятся более холодными и плотными.",
        "Жизненный цикл горячих звезд яркий, но уж очень короткий, потом они успокоиваются и меняют класс на G",
        "",
    ],
    starA: [
        "Звезды белого цвета.",
        "Белые они потому что скорее всего уже начинают остывать.",
        "Они по темепературе и размерам между О и G классами",
        "",
    ],
    mars: [
        "Четвертая планета солнечной системы.",
        "Говорят, что мужчины прилетели от туда, не верю, но я знаю что его ждет колонизация в будущем",
        "Он в полтора раза дальше Земли, поэтому там прохладнее чем у нас, но слабое магнитное поле приводит к тому, что солнечная радиация там жить особо не даст",
        "Интересно, что сам по себе не красный, а ближе к желто-коричневому, а красным он кажется из-за пыли в атмосфере.",
        "",
    ],
    jupiter: [
        "5 планета от Солнца",
        "Самая большая планета в солнечной системе, и он действительно очень большой, еще чуть-чуть и был бы звездой спутником",
        "Планеты подобные Юпитеру называют газовыми гигантами, и не зря, большая часть планеты состоит из водорода и гелия",
        "Некоторые асторономы до сих пор имеют мнение, то что у него есть твердое ядро у планеты",
        "Не смотря на эти сомнения, на данный момент признано, что у юпитера есть, как минимум жидкое ядро из водорода ",
    ],
    milkyWay: [
        "Млечный путь это наша галактика, и увидеть его на небе в городской среде достаточно сложно, а вот за городом, если приглядется, в небе будет широкая полоса с большой концентрацией звезд",
        "Диаметр млечного пути 100 000 световых лет! А мы находимся чуть ли не на переферии.",
        "А звезд в ней более 200 миллиардов",
        "Интересно, что большая часть видимых звезд находится в нашей галактике",
        "",
    ],
    neptun: [
        "Восьмая планета солнечной системы, брат близнец Урана.",
        "Он средний по размерам между Землей и Юпитером.",
        "Планеты подобные Нептуну называю Ледяными гигантами.",
        "Интересно, то что Нептун оказывает огромное влияние на пояс Койпера и вносит достаточно серьезный деструктив.",
        "",
    ],

}