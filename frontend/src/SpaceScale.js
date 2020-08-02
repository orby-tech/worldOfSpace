import React, { Component , Link }  from 'react';
import  { connect } from 'react-redux'

import img1 from './img/space_scale/1.jpg'
import img2 from './img/space_scale/2.jpg'
import img3 from './img/space_scale/3.jpg'
import img4 from './img/space_scale/4.jpg'
import img5 from './img/space_scale/5.jpg'
class PRESpaceScale extends Component{

    constructor(props){
      super(props);
      this.minimalLeng = window.innerHeight <  window.innerWidth ? window.innerHeight : window.innerWidth
      this.layers = [
        { img: img5, opacity: 1, scale: 100, index: 5 },
        { img: img4, opacity: 1, scale: 100, index: 4 },

        { img: img3, opacity: 1, scale: 100, index: 3 },

        { img: img2, opacity: 1, scale: 100, index: 2 },
        { img: img1, opacity: 1, scale: 100, index: 1 },
      ]
      this.countOfLayers = this.layers.length
      this.state = {
          scaleOfFirstIMG: 100, 
          layers: this.layers
      }
  
    }
    componentDidMount(){
      document.body.scrollTo(0,0)
      document.body.style.overflow = "hidden"
      document.body.style.backgroundImage = null
      window.addEventListener('wheel', (e)  => this.onScroll(e));
    }
    onScroll (event) {
        let delta =  Math.sign(event.deltaY) * 3
        let scale = this.state.scaleOfFirstIMG + delta
        let tempArr = this.state.layers.reverse()
        if ( scale < 100 ) {
            scale = 100
        }
        if ( scale > 100 * (this.countOfLayers+1) ) {
            scale = 100 * (this.countOfLayers+1)
        }
        let unvisibleLayers = Math.floor(scale / 100) - 1
        let tempScale  = scale % 100
        for (let i = 0; i < this.countOfLayers; i++ ) {
            if ( i < unvisibleLayers ) {
                tempArr[i].opacity = 0
            } else if ( i === unvisibleLayers && tempScale !== 0) {
                tempArr[i].scale +=  delta
                tempArr[i].opacity -= delta / 100
                if ( i < this.countOfLayers - 1 ) {
                    tempArr[i+1].scale += delta / 2 
                    tempArr[i+1].opacity -= delta / 1.5 / 100
                }
                if ( i < this.countOfLayers - 2 ) {
                    tempArr[i+1].scale += delta / 3 
                    tempArr[i+1].opacity -= delta / 1.25 / 100
                }
            } else if ( i > unvisibleLayers ) {
                tempArr[i].opacity = 1
            }
            
        }
        console.log(tempArr)
        console.log(tempScale)
        this.setState({
            scaleOfFirstIMG: scale,
            layers: tempArr.reverse()
        })
      }
    render() {
      return(   
        <div style={{

        }}>
            {this.state.layers.map( (item, index) => 
            <img  
                key={Object.values(item).join("")}
                style={{
                    position: "fixed",
                    top: 0,                    
                    width: item.scale+"%",
                    height: item.scale+"%",
                    transform: "translate(-50%, 0)",
                    left:"50%",
                    opacity: item.opacity,
                    zIndex : 100 / item.index
                }}
                src={item.img} />       
            )}
        </div>
      );
    }
  }
  const SpaceScale = connect()(PRESpaceScale);
  export default SpaceScale;