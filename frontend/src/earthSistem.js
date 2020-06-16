import React, { Component }  from 'react';
import  { connect } from 'react-redux'
import  earth from "./img/earth.png";
import  moon from "./img/moon.png";
import  asteroidIMG from "./img/asteroid.png";

const G = 6.674484
const mEarth = 5.972 * Math.pow(10, 13)
const mMoon = 7.6 * Math.pow(10, 11 )
const scale = 385000 / 204
const correctionTime = 0.1
class PREEarthSistem extends Component{
  constructor(props){
    super(props);
    this.asteroidsMove = this.asteroidsMove.bind(this)
    this.coordinatsUpdate = this.coordinatsUpdate.bind(this)
    this.state = {
      asteroids: [],
      tick: 1
    }

  }
  accelerationOfAsteroid (coords, m) {
    let R = (coords[0] - coords[2]) ** 2 + (coords[1] - coords[3]) ** 2
    let acceleration =  G * m / R / (scale ** 3) * correctionTime 
    let xAcceleration = acceleration * (coords[0] - coords[2]) / R**0.5
    let yAcceleration = acceleration * (coords[1] - coords[3]) / R**0.5

    return [xAcceleration, yAcceleration]
  }
  newCoordinats(asteroid, i) {
    let xMoon = 406 - Math.cos(i/150) * 204
    let yMoon = 306 + Math.sin(i/150) * 204
    let xAsteroid = asteroid[0][0]
    let yAsteroid = asteroid[0][1]
    if (xAsteroid > -100 && yAsteroid > -100 && xAsteroid < 1500 && yAsteroid < 700){
      let accelerationMoon = this.accelerationOfAsteroid ([xMoon, yMoon, xAsteroid, yAsteroid], mMoon)
      let accelerationEarth = this.accelerationOfAsteroid ([416, 316, xAsteroid, yAsteroid], mEarth)
      let tempItem = asteroid.slice(0, 1)[0].slice()
      tempItem[2] += accelerationMoon[0] + accelerationEarth[0]
      tempItem[3] += accelerationMoon[1] + accelerationEarth[1]
      tempItem[0] += tempItem[2] * correctionTime
      tempItem[1] += tempItem[3] * correctionTime

      asteroid.unshift(tempItem)
    } else {
      asteroid = null
    }

    return asteroid
  }

  coordinatsUpdate(tick) {
    let arr = this.state.asteroids
    let temp = []
    if (arr[0]) {
      for (let i = 0; i < arr.length; i++){
        let asteroid = this.newCoordinats(arr[i], tick)
        if(asteroid) {
          temp.push(asteroid)
        }
      }
      this.setState({asteroids: temp})
    }
  }
  componentDidMount(){
    let i = 0;
    let self = this
    setInterval(function() {
      document.querySelector('.asteroidContainer__earth').style.transform = 'rotate(' + (-i/5) + 'rad)';
      document.querySelector('.asteroidContainer__moonContainer').style.transform = 'rotate(' + (-i/150) + 'rad)';
      self.coordinatsUpdate(i)
      i++
      if ( i/150 > 2*Math.PI){
        i -= 2*Math.PI*150
      }
    }, 33);
    document.addEventListener("click", this.asteroidsMove);
  }

  asteroidsMove (event) {
    let arr = this.state.asteroids
    arr.push([[event.x, event.y, 0, 0]])
    this.setState({asteroids: arr})
  }

  render() {
    return(   
      <div className="asteroidContainer">
          <img  
            className="asteroidContainer__earth"
            alt="earth IMG"
            src={earth}/>
          <div className="asteroidContainer__moonTrack"> </div>
          <div className="asteroidContainer__moonContainer">
            <img  
              className="asteroidContainer__moon"
              alt="moon IMG"
              src={moon}/>
          </div>
          
          {this.state.asteroids.map( asteroid => 
            <>
              <img  
                className="asteroidContainer__asteroid"
                style={{left: asteroid[0][0], top: asteroid[0][1]}}
                alt="asteroid IMG"
                src={asteroidIMG}/>
              {asteroid.slice(1).map( item =>
                <div className="asteroidContainer__track" style={{left: item[0] + 5, top: item[1] + 5}}></div>
              )}
            </>
          )}

      </div>
    );
  }
}
const EarthSistem = connect()(PREEarthSistem);
export default EarthSistem;