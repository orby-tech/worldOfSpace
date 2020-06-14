import React, { Component }  from 'react';
import  { connect } from 'react-redux'
import  earth from "./img/earth.png";
import  moon from "./img/moon.png";
import  asteroid from "./img/asteroid.png";


class PREEarthSistem extends Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    let i = 1;
    setInterval(function() {
      document.querySelector('.asteroidContainer__earth').style.transform = 'rotate(' + (-i/50) + 'rad)';
      document.querySelector('.asteroidContainer__moonContainer').style.transform = 'rotate(' + (-i/1500) + 'rad)';
      i++
    }, 1);
  }

  render() {
    return(   
      <div className="asteroidContainer">
          <img  
            className="asteroidContainer__earth"
            alt="earth IMG"
            src={earth}/>
          <div className="asteroidContainer__moonContainer">
            <img  
              className="asteroidContainer__moon"
              alt="moon IMG"
              src={moon}/>
          </div>
          <img  
            className="asteroidContainer__asteroid"
            alt="asteroid IMG"
            src={asteroid}/>
      </div>
    );
  }
}
const EarthSistem = connect()(PREEarthSistem);
export default EarthSistem;