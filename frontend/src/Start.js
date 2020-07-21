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
      this.items = [
        {text: "Конструктор звездной системы", link:"/constructor_Of_Star_System", img: rocket },
        {text: "Как звучит космос", link:"/audio_of_space", img: music },
        {text: "Земная система", link:"/earth", img: earth },
        {text: "Солнечная система", link:"/solar_system", img: sun },
        {text: "Лунная панорама из Чанъе-3", link:"/moon_panoram", img: moon },
        {text: "Управление Curiosity", link:"/mars_rider", img: curiosity },
      ]
      this.state = {
      }
  
    }

    componentDidMount(){
      document.body.scrollTo(0,0)
      document.body.style.overflow = ""
    }
    render() {
      return(   
        <div className="start">
            <ul id="logo" className="navbar-nav ml-auto"> 
              {this.items.map(item => 
                <li className="nav-item" id="navBar" key={Object.values(item).join("")}>
                  <Link 
                        className="nav-link"
                        to={item.link}>
                          <div className="start_item"> {item.text}
                          <img
                            className="start__IMGItem"
                            alt="exit IMG"
                            src={item.img}></img>
                          </div>                        
                  </Link>
                </li>  
              )}                      
            </ul>
        </div>
      );
    }
  }
  const Start = connect()(PREStart);
  export default Start;