import React, { Component ,Link }  from 'react';
import  { connect } from 'react-redux'
import curiosity from "./img/marsCuriosity/curiosity.png";
import map from "./img/marsCuriosity/map.webp";

let moveTouchTimer
class PRECuriosity extends Component{

    constructor(props){
      super(props);
        
      this.state = {
        mapOffset: [0, 0],
        loading: true,
        angel : 0,
        joystickPosition: [50, 50],
        speed: [ ]
      }
  
    }
    move(delta){
        delta *= 3
        let angel = this.state.angel
        let index = this.state.mapOffset
        index[0] += delta * Math.cos(- angel/360 * 2 * Math.PI)   
        index[1] -= delta * Math.sin(- angel/360 * 2 * Math.PI) 

        if(index[0] < -910) {
          index[0] = -910
        }
        if(index[0] > 1730) {
          index[0] = 1730
        }
        if(index[1] > 1050 ) {
            index[1] = 1050
        }
        if(index[1] < -400) {
            index[1] = -400
        }
        this.setState({mapOffset: index})
    }

    rotate(delta){
        let angel = this.state.angel
        angel += delta
        if (angel < 0) angel += 360
        if (angel > 360) angel -= 360
        this.setState({angel: angel})
        this.move(+1)
    }

    moveWithTouch(x, y) {
      y -= 50
      x -= 50
      let angel = Math.atan2(y , x) / 3.14 * 180 + 180
      let delta = angel - this.state.angel
      console.log(this.state.angel, angel, delta)
      if (delta > 180 && delta < 360) delta = delta - 360
      this.rotate(Math.sign(delta))
    }
    componentDidMount(){
      document.body.scrollTo(0, 0)
      document.querySelector('.App').scrollTo(0, 0)
      document.body.style.overflow = "hidden"
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
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        console.log(1)
        document.querySelector('.curiosity__joystickContainer').addEventListener("touchstart", event => {
          let containerPosition = document.querySelector('.curiosity__joystickContainer').getBoundingClientRect()
          this.setState({ joystickPosition: [
            -containerPosition.top + event.targetTouches[0].pageY,
            -containerPosition.left + event.targetTouches[0].pageX,
          ]})
        })
        document.querySelector('.curiosity__joystickContainer').addEventListener("touchmove", event => {
          let containerPosition = document.querySelector('.curiosity__joystickContainer').getBoundingClientRect()
          let y = -containerPosition.top + event.targetTouches[0].pageY
          let x = -containerPosition.left + event.targetTouches[0].pageX
          let R = ((y - 50) ** 2 + ( x - 50) ** 2) ** 0.5
          if ( y < 0) y = 0;
          if ( y > 100 ) y = 100;
          if ( x < 0) x = 0;
          if ( x > 100 ) x = 100;
          if ( R > 50 ) {
            x = ( x - 50 ) / R * 50 + 50
            y = ( y - 50 ) / R * 50 + 50
          }
          clearInterval(moveTouchTimer)
          moveTouchTimer = setInterval(() => {
            this.moveWithTouch(x, y)
          }, 10)
          
          this.setState({ joystickPosition: [
            y, x,
          ]})
        })
        document.querySelector('.curiosity__joystickContainer').addEventListener("touchend", event => {
          clearInterval(moveTouchTimer)
        })
      }
    }
    joystick() {
      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return ""
      } else {
        return (
          <div className="curiosity__joystickContainer">
            <div  className="curiosity__joystick"
                  style={{
                    top: this.state.joystickPosition[0],
                    left: this.state.joystickPosition[1],
                  }}>
            </div>
          </div>
        )
      }
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
          {this.joystick()}
        </>
      );
    }
  }
  const Curiosity = connect()(PRECuriosity);
  export default Curiosity;