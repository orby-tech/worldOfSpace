import React, { Component }  from 'react';
import  { connect } from 'react-redux'

import  sun from "./img/sun.png";
import  earth from "./img/earth.png";
import  mercury from "./img/mercury.png";
import  venera from "./img/venera.png";
import  mars from "./img/mars.png";
import  jupiter from "./img/jupiter.png";
import  saturn from "./img/saturn.png";
import  uranus from "./img/uranus.png";
import  neptun from "./img/neptun.png";
import  moon from "./img/moon.png";
import  asteroidIMG from "./img/asteroid.png";

const G = 6.674484
const mEarth = 5.972 * Math.pow(10, 13)
const mMoon = 7.6 * Math.pow(10, 11 )
const scale = 385000 / 204
const correctionTime = 0.1
class PRESolarSystem extends Component{
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
    let intervalId = 0
    intervalId = setInterval(() => {
      if(document.querySelector('.solarSystem__sun')) {
        document.querySelector('.solarSystem__sun').style.transform = 'rotate(' + (-i/150) + 'rad)';
        document.querySelector('.solarSystem__mercuryContainer').style.transform = 'rotate(' + (-i/36) + 'rad)';
        document.querySelector('.solarSystem__veneraContainer').style.transform = 'rotate(' + (-i/92.5) + 'rad)';
        document.querySelector('.solarSystem__earthContainer').style.transform = 'rotate(' + (-i/150) + 'rad)';
        document.querySelector('.solarSystem__marsContainer').style.transform = 'rotate(' + (-i/282) + 'rad)';
        document.querySelector('.solarSystem__jupiterContainer').style.transform = 'rotate(' + (-i/1800) + 'rad)';
        document.querySelector('.solarSystem__saturnContainer').style.transform = 'rotate(' + (-i/4500 - 2.5) + 'rad)';
        document.querySelector('.solarSystem__uranusContainer').style.transform = 'rotate(' + (-i/12600 - 2.6) + 'rad)';
        document.querySelector('.solarSystem__neptunContainer').style.transform = 'rotate(' + (-i/24750 - 2.6) + 'rad)';
  
        document.querySelector('.solarSystem__mercury').style.transform = 'rotate(' + (-i/72) + 'rad)';
        document.querySelector('.solarSystem__venera').style.transform = 'rotate(' + (-i/19.25) + 'rad)';
        document.querySelector('.solarSystem__earth').style.transform = 'rotate(' + (-i/55) + 'rad)';
        document.querySelector('.solarSystem__mars').style.transform = 'rotate(' + (-i/56) + 'rad)';
        document.querySelector('.solarSystem__jupiter').style.transform = 'rotate(' + (i/1800 + 0.5) + 'rad)';
        document.querySelector('.solarSystem__saturn').style.transform = 'rotate(' + (-0.2 + i/4500) + 'rad)';
        this.coordinatsUpdate(i)
        i++
        if ( i/150/36/92.5 > 2*Math.PI){
          i -= 2*Math.PI*150*36*92.5
        }
      } else {
        clearInterval(intervalId)
      }

      
      
    }, 1);
    document.addEventListener("click", this.asteroidsMove);
  }

  asteroidsMove (event) {
    let arr = this.state.asteroids
    arr.push([[event.x, event.y, 0, 0]])
    this.setState({asteroids: arr})
  }

  render() {
    return(   
      <div className="solarSystem">
          <img  
            className="spaceObject solarSystem__sun"
            title="Солнышко"
            alt="earth IMG"
            src={sun}/>
          <div className="solarSystem__mercuryTrack"> </div>
          <div className="solarSystem__mercuryContainer">
            <img  
              className="spaceObject solarSystem__mercury"
              title="Меркурий"
              alt="mercury IMG"
              src={mercury}/>
          </div>


          <div className="solarSystem__veneraTrack"> </div>
          <div className="solarSystem__veneraContainer">
            <img  
              className="spaceObject solarSystem__venera"
              title="Венера"
              alt="venera IMG"
              src={venera}/>
          </div>
          
          <div className="solarSystem__earthTrack"> </div>
          <div className="solarSystem__earthContainer">
            <img  
              className="spaceObject solarSystem__earth"
              title="Земля"
              alt="venera IMG"
              src={earth}/>
          </div>

          <div className="solarSystem__marsTrack"> </div>
          <div className="solarSystem__marsContainer">
            <img  
              className="spaceObject solarSystem__mars"
              title="Марс"
              alt="venera IMG"
              src={mars}/>
          </div>
          <div className="solarSystem__jupiterTrack"> </div>
          <div className="solarSystem__jupiterContainer">
            <img  
              className="spaceObject solarSystem__jupiter"
              title="Юпитер"
              alt="jupiter IMG"
              src={jupiter}/>
          </div>
          <div className="solarSystem__saturnTrack"> </div>
          <div className="solarSystem__saturnContainer">
            <img  
              className="spaceObject solarSystem__saturn"
              title="Сатурн"
              alt="saturn IMG"
              src={saturn}/>
          </div>
          <div className="solarSystem__uranusTrack"> </div>
          <div className="solarSystem__uranusContainer">
            <img  
              className="spaceObject solarSystem__uranus"
              title="Уран"
              alt="uranus IMG"
              src={uranus}/>
          </div>
          <div className="solarSystem__neptunTrack"> </div>
          <div className="solarSystem__neptunContainer">
            <img  
              className="spaceObject solarSystem__neptun"
              title="Нептун"
              alt="neptun IMG"
              src={neptun}/>
          </div>

          {this.state.asteroids.map( asteroid => 
            <>
              <img  
                className="spaceObject solarSystem__asteroid"
                title="Астероид"
                style={{left: asteroid[0][0], top: asteroid[0][1]}}
                alt="asteroid IMG"
                src={asteroidIMG}/>
              {asteroid.slice(1).map( item =>
                <div className="solarSystem__track" style={{left: item[0] + 5, top: item[1] + 5}}></div>
              )}
            </>
          )}
          

      </div>
    );
  }
}
const SolarSystem = connect()(PRESolarSystem);
export default SolarSystem;