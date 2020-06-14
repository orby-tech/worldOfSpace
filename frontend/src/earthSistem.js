import React, { Component }  from 'react';
import  { connect } from 'react-redux'
import  earth from "./img/earth.png";
class PREEarthSistem extends Component{


  render() {
    return(   
      <div>
          <img  
                alt="earth IMG"
                src={earth}/>
      </div>
    );
  }
}
const EarthSistem = connect()(PREEarthSistem);
export default EarthSistem;