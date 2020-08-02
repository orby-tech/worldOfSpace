import React, { Component  }  from 'react';
import  { connect } from 'react-redux'

import { Link } from 'react-router-dom';

import { listOfMenu } from './logic/variables'

class PREStart extends Component{
    constructor(props){
      super(props);
    }

    componentDidMount(){
      document.body.scrollTo(0,0)
      document.body.style.overflow = ""
    }
    render() {
      return(   
        <div className="start">
          <ul id="logo" className="navbar-nav ml-auto"> 
            {listOfMenu.map(item => 
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