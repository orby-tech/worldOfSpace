import React, { Component ,Link }  from 'react';
import  { connect } from 'react-redux'

class PREMoonPanoram extends Component{

    constructor(props){
      super(props);

      this.state = {
      }
  
    }

    componentDidMount(){

    }

    render() {
      return(   
        <div className="constructorOfStarSystem__container">
          
        </div>
      );
    }
  }
  const MoonPanoram = connect()(PREMoonPanoram);
  export default MoonPanoram;