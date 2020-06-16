import React, { Component  }  from 'react';
import  { connect } from 'react-redux'

import { Link } from 'react-router-dom';
import  sun from "./img/sun.png";
import  rocket from "./img/rocket.png";
import  earth from "./img/earth.png";
class PREStart extends Component{
    constructor(props){
      super(props);
      this.state = {
      }
  
    }

    componentDidMount(){
    }
    render() {
      return(   
        <div className="start">
            <ul id="logo" className="navbar-nav ml-auto"> 
                <li className="nav-item" id="navBar">
                  <Link 
                        className="nav-link"
                        to="/constructorOfStarSystem"> Конструктор звездной системы
                        <img
                            className="start__IMGItem"
                            alt="exit IMG"
                            src={rocket}></img>
                  </Link>
                </li>        
                <li className="nav-item" id="navBar">
                  <Link 
                        className="nav-link"
                        to="/earth"> Земная система
                        <img
                            className="start__IMGItem"
                            alt="exit IMG"
                            src={earth}></img>
                  </Link>
                </li>
  
                <li className="nav-item" id="navBar">
                  <Link 
                        className="nav-link"
                        to="/solarsystem"> Солнечная система
                        <img
                            className="start__IMGItem"
                            alt="exit IMG"
                            src={sun}></img>
                  </Link>
                </li>                           
              </ul>
        </div>
      );
    }
  }
  const Start = connect()(PREStart);
  export default Start;