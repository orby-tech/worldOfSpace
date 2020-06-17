import React, { Component ,Link }  from 'react';
import  { connect } from 'react-redux'
import  sun from "./img/sun.png";
import  blackHole from "./img/blackHole.png";
import  AClassStar from "./img/AClassStar.png";
import  OClassStar from "./img/OClassStar.png";
import  Cvasar from "./img/cvasar.png";

const a =  3

function sortByMass(a, b){
  return -(a[2] - b[2])
  }
class PREConstructorStarSystem extends Component{

    constructor(props){
      super(props);
      
      this.newStar = this.newStar.bind(this)
      let listOfSpaceObjects = [
        {text: "Квазар", link: Cvasar, massID: 800 },
        {text: "Черная дыра", link: blackHole, massID: 36 },
        {text: "Звезда класса G", link: sun, massID: 3},
        {text: "Звезда класса A", link: AClassStar, massID: 9},
        {text: "Звезда класса O", link: OClassStar, massID: 12}
      ]

      this.center = []
      this.stars = [
        [220, 220, 3, 0, 0, sun], 
        [420, 420, 1, -0.1, 0, blackHole]
      ]
      this.timer = 0 
      this.state = {
        work: true,
        stars: [[120, 120, 1, 10, 10], [140, 140, 1, 1, 1]],
        tick: 1,
        listOfSpaceObjects: listOfSpaceObjects,
        selectedItem: {text: "Звезда класса G", link: sun, massID: 3}
      }
  
    }

  
    coordinatsUpdate() {      
        let arr = this.stars
        let distance = 0
        let power = 0
        let powerX = 0
        let powerY = 0
        let temp = []
        for (let i = 0; i< arr.length; i++) {
          for (let j = i+1; j< arr.length; j++) {            
            distance = ((arr[i][0] - arr[j][0]) ** 2 + (arr[i][1] - arr[j][1]) ** 2) ** 0.5            
            power = arr[i][2] * arr[j][2] / distance * 0.0005
     
            powerX = power / distance  * (arr[i][0] - arr[j][0])
            powerY = power / distance  * (arr[i][1] - arr[j][1])
            arr[i][3] -= powerX / arr[i][2]
            arr[i][4] -= powerY / arr[i][2]
            arr[j][3] += powerX / arr[j][2]
            arr[j][4] += powerY / arr[j][2]
            if (  distance < 0.5) {
              let mass = arr[i][2] + arr[j][2]
              let x = (arr[i][3] * arr[i][2] + arr[j][3] * arr[j][2]) / mass
              let y = (arr[i][4] * arr[i][2] + arr[j][4] * arr[j][2]) / mass
              let link = 1
              if (mass > 800) {
                link = Cvasar
              } else if (mass > 72) {
                link = blackHole
              } else if (mass > 12) {
                link = OClassStar
              } else if (mass > 9) {
                link = AClassStar
              }else if (mass > 3) {
                link = sun
              } else if (mass > 1) {
                link = 1
              }
              arr[i] = [ arr[i][0], arr[i][1], mass, x, y , link ]
              arr[j] = [null, null, 1, null, null]
            } 
          }
        }
        let tempArr = []
        for (let i = 0; i< arr.length; i++) {
          if (arr[i][0] && Math.abs(arr[i][0])< 1000 && Math.abs(arr[i][1])< 1000){
            arr[i][0] += arr[i][3]
            arr[i][1] += arr[i][4]


            tempArr.push(arr[i])
          }
        }
        tempArr.sort(sortByMass)
        this.stars = tempArr
        this.setState({stars: tempArr})
         
    }
    componentDidMount(){
      if(document.querySelector('.constructorOfStarSystem__star')) {
        this.timer = setInterval(() => {
          
      this.coordinatsUpdate() 
        }, 1);
        document.addEventListener("click", this.newStar);
      } else {
        clearInterval(this.timer)
      }
    }


    newStar(event) {
      clearInterval(this.timer)
        if( window.innerWidth - event.x > 300 ) {
          let arr = this.stars
          arr.push([
            event.x, 
            event.y, 
            this.state.selectedItem.massID, 
            (Math.random() - 0.5) / 10 , 
            (Math.random() - 0.5) / 10, 
            this.state.selectedItem.link])
          this.stars = arr
        }
 
        this.timer = setInterval(() => {
          this.coordinatsUpdate()
        }, 1);
        
    }
    changeObject (object) {
      this.setState({ selectedItem: object})

    }
    selectedItem (item) {
      if(item === this.state.selectedItem.massID) {
        return "constructorOfStarSystem__changerItemSelected"
      } else {
        return "constructorOfStarSystem__changerItem"
      }

    }
    styleOfObject(mass) {
      if (mass >= 800) {
        return 150
      } else if (mass >= 72) {
        return 40
      } else if (mass >= 12) {
        return 30
      } else if (mass >= 9) {
        return 20
      }else if (mass >= 3) {
        return 15
      } else if (mass >= 1) {
        return 10
      }
    }
    render() {
      return(   
        <div className="constructorOfStarSystem__container">
          <div  className="constructorOfStarSystem__map">
            {this.state.stars.map( star => 
              <>
                <img  
                  className="constructorOfStarSystem__star"
                  title="Звезда класса G"
                  style={{left: star[0], top: star[1], width: this.styleOfObject(star[2])   }}
                  alt="sun IMG"
                  src={star[5]}/>
              </>
            )}

          </div>
   
          <div className="constructorOfStarSystem__changer">

            {this.state.listOfSpaceObjects.map( object =>               
              <div className={this.selectedItem(object.massID)} onClick={() =>this.changeObject(object)}>
                <div className="constructorOfStarSystem__changerItemText">{ object.text }</div>
                <div>
                  <img  
                    style={{ width: 80 }}
                    alt="sun IMG"
                    src={object.link}/>
                </div>

              </div>            
              )}  
          </div>
                
      


        </div>
      );
    }
  }
  const ConstructorStarSystem = connect()(PREConstructorStarSystem);
  export default ConstructorStarSystem;