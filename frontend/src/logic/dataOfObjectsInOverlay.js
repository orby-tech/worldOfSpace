export default (type) => {
    let info = []
    switch(type) {
        case "Квазар":
            info = infoOfObjects.cvasar
            break;
        case "Звезда класса G":

            break;
        case "Звезда класса A":

            break;
        case "Звезда класса O":

            break;
    }
    return info
}


const infoOfObjects = {
    cvasar: [
        "Это астрономические объекты, замечательные тем что черная дыра в центре галактики, не успевая 'поглатить' огромное колличество материи создатет диск акреции и мощные лучи, в основном радио-диапозона, но зачастую и видимые."
    ]
}