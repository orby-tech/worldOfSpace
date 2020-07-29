export default (type) => {
    let name = '';
    switch(type) {
        case "Квазар":
            /* It not alone ulas, be TON and more  
            * 1 hours
            * 2 degrees
            * it have wrong in generation, not all wariables
            * must be zerous in start of lines
            */
            name += "ULAS J"
            name += randomInteger( 1000, 2400 ) 
            name += randomSign()
            name += randomInteger( 1000 , 9000 )
            break;
        case "Черная дыра":
            name += "NGC "
            name += randomInteger( 1000 , 9000 )
            break;
        case "Звезда класса G":
            name = randomNameOfStar()
            break;
        case "Звезда класса A":
            name = randomNameOfStar()
            break;
        case "Звезда класса O":
            name = randomNameOfStar()
            break;
    }
    return name
  }

const randomNameOfStar = () => {
    /*
    * it mey be randonize by same systems of naming
    */
    let name = ""
    name += "BD "
    name += randomSign()
    name += randomInteger( 0 , 90 )
    name += " "
    name += randomInteger( 1 , 9000 )
    return name
}

const randomSign = () => {
    return randomInteger( -9000 , 9000 ) > 0 ? "+" : "-"
}

const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}