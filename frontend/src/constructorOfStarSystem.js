import React, { Component ,Link }  from 'react';
import  { connect } from 'react-redux'
import  sun from "./img/sun.png";
const a =  3
class PREConstructorStarSystem extends Component{

    constructor(props){
      super(props);
      
      this.newStar = this.newStar.bind(this)


      this.center = []
      this.stars = [[220, 220, 3, 0, 0], [420, 420, 1, -0.1, 0]]
      this.timer = 0 
      this.state = {
        work: true,
        stars: [[120, 120, 1, 10, 10], [140, 140, 1, 1, 1]],
        tick: 1,
        
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
              arr[i] = [ arr[i][0], arr[i][1], mass, x, y ]
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
        let arr = this.stars
        arr.push([event.x, event.y, 3, (Math.random() - 0.5) / 10 , (Math.random() - 0.5) / 10])
        this.stars = arr
        this.timer = setInterval(() => {
          this.coordinatsUpdate()
        }, 1);
        
    }
  
    render() {
      return(   
        <div className="asteroidContainer">
            
            {this.state.stars.map( star => 
              <>
                <img  
                  className="spaceObject constructorOfStarSystem__star"
                  title="Звезда класса G"
                  style={{left: star[0], top: star[1], width: Math.cos(star[2] / 200) * 10 }}
                  alt="sun IMG"
                  src={sun}/>
                <div className="constructorOfStarSystem__changer">
                  <div className="constructorOfStarSystem__changerItem">

                  </div>
                </div>
                
              </>
            )}


        </div>
      );
    }
  }
  const ConstructorStarSystem = connect()(PREConstructorStarSystem);
  export default ConstructorStarSystem;