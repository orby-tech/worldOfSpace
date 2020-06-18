import React, { Component  }  from 'react';
import  { connect } from 'react-redux'

import { Link } from 'react-router-dom';
import  sun from "./img/sun.png";
import  rocket from "./img/rocket.png";
import  earth from "./img/earth.png";
import  moon from "./img/moonPre.png";
import  music from "./img/music.png";
import curiosity from "./img/marsCuriosity/curiosity.png";
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
                        to="/constructor_Of_Star_System"> Конструктор звездной системы
                        <img
                            className="start__IMGItem"
                            alt="exit IMG"
                            src={rocket}></img>
                  </Link>
                </li>    
                <li className="nav-item" id="navBar">
                  <Link 
                        className="nav-link"
                        
                        to="/audio_of_space"> Как звучит космос
                        <img
                            style={{transform: "rotate(0deg)"}}
                            className="start__IMGItem"
                            alt="exit IMG"
                            src={music}></img>
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
                        to="/solar_system"> Солнечная система
                        <img
                            className="start__IMGItem"
                            alt="exit IMG"
                            src={sun}></img>
                  </Link>
                </li>     
                <li className="nav-item" id="navBar">
                  <Link 
                        className="nav-link"
                        to="/moon_panoram"> Лунная панорама из Чанъе-3
                        <img
                            className="start__IMGItem"
                            style={{transform: "rotate(0deg)"}}
                            alt="exit IMG"
                            src={moon}></img>
                  </Link>
                </li>  
                <li className="nav-item" id="navBar">
                  <Link 
                        className="nav-link"
                        to="/mars_rider"> Управление Curiosity
                        <img
                            className="start__IMGItem"
                            style={{transform: "rotate(0deg)", backgroundColor:"rgba(65, 56, 109, 0.3)"}}
                            alt="exit IMG"
                            src={curiosity}></img>
                  </Link>
                </li>                         
              </ul>
        </div>
      );
    }
  }
  const Start = connect()(PREStart);
  export default Start;