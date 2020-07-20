import React, { Component }  from 'react';
import  { connect } from 'react-redux'
import  earth from "./img/earth.png";
import  moon from "./img/moon.png";
import  asteroidIMG from "./img/asteroid.png";

const G = 6.674484
const mEarth = 5.972 * Math.pow(10, 13)
const mMoon = 7.6 * Math.pow(10, 11 ) *2
const scale = 385000 / 204
const correctionTime = 0.1

const listOfStaticElements = [
  { "center": earth },
  { "orbit": 1 },
]
class PREEarthSistem extends Component{
  constructor(props){
    super(props);
    this.state = {
      widthOfBlock: (window.innerHeight < window.innerWidth) 
          ? window.innerHeight * 0.9
          : window.innerWidth * 0.9,
      centerOfBlock: [ window.innerWidth / 2, window.innerHeight / 2 ],
    }

  }

  componentDidMount(){
  }

  render() {
    return(   
      <>
        {listOfStaticElements.map({
          
        })}
      </>
    );
  }
}
const EarthSistem = connect()(PREEarthSistem);
export default EarthSistem;