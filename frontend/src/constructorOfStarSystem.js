import React, { Component ,Link }  from 'react';
import  { connect } from 'react-redux'
import  sun from "./img/sun.png";
const a =  3
let center = []
let stars = [[120, 120, 1, 0, 0], [130, 130, 1, 0, 0], [140, 140, 1, 0, 0], [410, 410, 1, 0, 0], [420, 420, 1, 0, 0]]
class PREConstructorStarSystem extends Component{
    constructor(props){
      super(props);
      this.newStar = this.newStar.bind(this)
      this.coordinatsUpdate = this.coordinatsUpdate.bind(this)
      this.state = {
        work: true,
        stars: [[120, 120, 1, 0, 0], [420, 420, 1, 0, 0]],
        tick: 1,
        
      }
  
    }

    newCoordinats(asteroid, i) {

      return asteroid
    }
  
    coordinatsUpdate() {
        let arr = stars
        let centerX = center[0]
        let centerY = center[1]
        for (let i = 0; i< arr.length; i++) {
            arr[i][4] += a *  (1 / arr[i][3]) ** 1.5
            arr[i][0] = centerX + arr[i][3] * Math.cos(arr[i][4] )
            arr[i][1] = centerY + arr[i][3] * Math.sin(arr[i][4] )
        }
        stars = arr
        this.setState({stars: arr})
        setTimeout(() => {
          this.coordinatsUpdate()
        }, 1);    
    }
    componentDidMount(){

      this.countCenterOfMass()
      setTimeout(() => {
        this.coordinatsUpdate()
      }, 1);

      document.addEventListener("click", this.newStar);
    }
    centerMassMashine ( arr ) {
      let centerX = 0
      let centerY = 0
      let allMass = 0
      for (let i = 0; i< arr.length; i++) {
          centerX += arr[i][0] * arr[i][2]
          centerY += arr[i][1] * arr[i][2]
          allMass += arr[i][2]
      }

      centerX /= allMass
      centerY /= allMass


      center = [centerX, centerY]
    }
    coordinatsOfStars() {
      let arr = stars
      let centerX = center[0]
      let centerY = center[1]
      for (let i = 0; i< arr.length; i++) {
        arr[i][3] = ((arr[i][0] - centerX) ** 2 + (arr[i][1] - centerY) ** 2) ** 0.5 
        arr[i][4] = Math.abs(Math.atan ( (arr[i][1] - centerY)/(arr[i][0] - centerX)))
        if( arr[i][0] - centerX > 0 && arr[i][1] - centerY > 0 ){
            arr[i][4] += Math.PI / 2 * 3
        } 
        if( arr[i][0] - centerX < 0 && arr[i][1] - centerY < 0 ){
            arr[i][4] += Math.PI / 2
        }
        if( arr[i][0] - centerX < 0  && arr[i][1] - centerY > 0 ){
            arr[i][4] += Math.PI
        } 
        if( arr[i][0] - centerX > 0  &&  arr[i][1] - centerY < 0 ){
            arr[i][4] += 0
        }    
        arr[i][4] += Math.PI / 2     
      }
      stars = arr
    }
    countCenterOfMass(){
        this.centerMassMashine(stars)

        this.coordinatsOfStars()
    }

    newStar(event) {
        let arr = stars
        arr.push([event.x, event.y, 1, 0, 0])
        stars = arr
        this.countCenterOfMass()
        
    }
  
    render() {
      return(   
        <div className="asteroidContainer">
            
            {this.state.stars.map( star => 
              <>
                <img  
                  className="constructorOfStarSystem__star"
                  style={{left: star[0], top: star[1]}}
                  alt="sun IMG"
                  src={sun}/>
                
              </>
            )}


        </div>
      );
    }
  }
  const ConstructorStarSystem = connect()(PREConstructorStarSystem);
  export default ConstructorStarSystem;