import React, { Component ,Link }  from 'react';
import  { connect } from 'react-redux'
import curiosity from "./img/marsCuriosity/curiosity.png";
import map from "./img/marsCuriosity/map.webp";
class PRECuriosity extends Component{

    constructor(props){
      super(props);
        
      this.state = {
        mapOffset: [0, 0],
        loading: true,
        angel : 0
      }
  
    }
    move(delta){
        delta *= 3
        let angel = this.state.angel
        let index = this.state.mapOffset
        index[0] += delta * Math.cos(- angel/360 * 2 * Math.PI)   
        index[1] -= delta * Math.sin(- angel/360 * 2 * Math.PI) 

        if(index[0] < -300) {
          index[0] = -300
        }
        if(index[0] > 1600) {
          index[0] = 1600
        }
        if(index[1] > 1000) {
            index[1] = 1000
        }
        if(index[1] < -400) {
            index[1] = -400
        }
        this.setState({mapOffset: index})
    }
    rotate(delta){
        let angel = this.state.angel
        angel += delta
        
        this.setState({angel: angel})
        this.move(+1)
    }


    componentDidMount(){
      
      document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowLeft') {
            this.rotate(-1)
        }
        if (event.code === 'ArrowRight') {
            this.rotate(+1)
        }
        if (event.code === 'ArrowDown') {
            this.move(-1)       
        }
        if (event.code === 'ArrowUp') {
            this.move(1)       
        }
      });
    }

    render() {
      return(   
        <>
          <img className="curiosity__map"
            title=""
            alt="IMG"
            style={{ left: this.state.mapOffset[0], top:this.state.mapOffset[1] }}
            src={map}/>
            <img className="curiosity__track"
            title=""
            alt="IMG"
            style={{left: "50%", top:"50%", transform: "rotate("+ (25 +this.state.angel) +"deg)"}}
            src={curiosity}/>
        </>
      );
    }
  }
  const Curiosity = connect()(PRECuriosity);
  export default Curiosity;