import React, { Component , Link }  from 'react';
import  { connect } from 'react-redux'

import img1 from './img/space_scale/1.jpg'
import img2 from './img/space_scale/2.jpg'

class PRESpaceScale extends Component{

    constructor(props){
      super(props);
      this.layers = [
          { img: img1, opacity: 1, scale: 100 }
      ]
      this.state = {
          scaleOfFirstIMG: 100, 
      }
  
    }
    componentDidMount(){
      document.body.scrollTo(0,0)
      document.body.style.overflow = "hidden"
      document.body.style.backgroundImage = null
      window.addEventListener('wheel', (e)  => this.onScroll(e));
    }
    onScroll (event) {
        console.log(Math.sign(event.deltaY))
        this.setState({scaleOfFirstIMG: this.state.scaleOfFirstIMG + Math.sign(event.deltaY)})
      }
    render() {
      return(   
        <div >
            {this.layers.map( item => 
                <>
                    <img  
                        style={{
                            position: "fixed",
                            top: 0,
                            height: this.state.scaleOfFirstIMG+"%",
                            transform: "translate(-50%, 0)",
                            left:"50%",
                        }}
                        src={img2} />
                </>                
            )}
        </div>
      );
    }
  }
  const SpaceScale = connect()(PRESpaceScale);
  export default SpaceScale;