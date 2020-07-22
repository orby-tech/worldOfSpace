import React, { Component ,Link }  from 'react';
import  { connect } from 'react-redux'
import  img1 from "./img/moonPanoram/1.gif";
import  img2 from "./img/moonPanoram/2.gif";
import  img3 from "./img/moonPanoram/3.gif";
import  img4 from "./img/moonPanoram/4.gif";
import  img5 from "./img/moonPanoram/5.gif";
import  img6 from "./img/moonPanoram/6.gif";
import  img7 from "./img/moonPanoram/7.gif";
import  img8 from "./img/moonPanoram/8.gif";
import  img9 from "./img/moonPanoram/9.gif";
import  img10 from "./img/moonPanoram/10.gif";
import  img11 from "./img/moonPanoram/11.gif";
import  img12 from "./img/moonPanoram/12.gif";
import  img13 from "./img/moonPanoram/13.gif";
import  img14 from "./img/moonPanoram/14.gif";
import  img15 from "./img/moonPanoram/15.gif";
import  img16 from "./img/moonPanoram/16.gif";
import  img17 from "./img/moonPanoram/17.gif";
import  img18 from "./img/moonPanoram/18.gif";
import  img19 from "./img/moonPanoram/19.gif";
import  img20 from "./img/moonPanoram/20.gif";
import  img21 from "./img/moonPanoram/21.gif";
import  img22 from "./img/moonPanoram/22.gif";
import  img23 from "./img/moonPanoram/23.gif";
import  img24 from "./img/moonPanoram/24.gif";
import  img25 from "./img/moonPanoram/25.gif";
import  img26 from "./img/moonPanoram/26.gif";
import noise from "./img/moonPanoram/noise.jpeg";
import pc from "./img/moonPanoram/pc.png";
class PREMoonPanoram extends Component{

    constructor(props){
      super(props);
      this.imgs = [
        img1, img2, img3, img4, img5, img6, 
        img7, img8, img9, img10, img11, img12,
        img13, img14, img15, img16,img17, img18,
        img19, img20, img21, img22, img23, 
        img24, img25, img26]
      this.state = {
        img: [0, 0],
        loading: true,
        widthOfBlock: (window.innerHeight < window.innerWidth) 
          ? window.innerHeight * 0.9
          : window.innerWidth * 0.9,
      }
  
    }


    componentDidMount(){
      document.body.scrollTo(0,0)
      document.body.style.overflow = "hidden"

      let self = this
      setInterval(() => {
        self.setState({loading:true})
        setTimeout(() => {
          self.setState({loading:false})
        }, 5)
      }, 1200)

      
      document.addEventListener('keydown', (event) => {
        
        if (event.code === 'ArrowLeft') {
          this.leftEvent()
        }
        if (event.code === 'ArrowRight') {
          this.rightEvent()
        }
      });
      this.setState({loading: false})
    }
    leftEvent() {
      this.setState({loading: true})
      let index = this.state.img
      index[0] -= 1
        if ( index[0] < 0 ) {
          index[0] += this.imgs.length

        }
        if ( index[0] >= this.imgs.length ) {
          index[0] -= this.imgs.length
        }
      setTimeout(() => {
        this.setState({img: index, loading:false})
      }, 50)
    }
    rightEvent() {
      this.setState({loading: true})
      let index = this.state.img
      index[0] += 1
      if ( index[0] < 0 ) {
        index[0] += this.imgs.length
      }
      if ( index[0] >= this.imgs.length ) {
        index[0] -= this.imgs.length
      }
      setTimeout(() => {
        this.setState({img: index, loading:false})
      }, 20)
    }
    imgChange(){
      if(this.state.loading) {
        return (
          <img className="moonPanoram__img"
                style={{
                  width: this.state.widthOfBlock * 0.9,
                  height: this.state.widthOfBlock* 0.5,
                  left: (window.innerWidth - this.state.widthOfBlock * 0.9) / 2,
                }}
                title=""
                alt="IMG"
                
                src={noise}/>
        )
      } else {
        return (<img className="moonPanoram__img"
                  style={{
                    width: this.state.widthOfBlock * 0.9,
                    height: this.state.widthOfBlock* 0.5,
                    left: (window.innerWidth - this.state.widthOfBlock * 0.9) / 2,
                  }}
                title=""
                alt="IMG"
                
                src={this.imgs[this.state.img[0]]}/>)
      }
    }
    buttonsEmulator() {
      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return ""
      } else {
        return (
          <div className="moonPanoram__buttonContainer">
            <div  className="moonPanoram__button" 
                  style={{transform: "rotate(180deg)"}}
                  onClick={()=>this.leftEvent()}></div>
            <div  className="moonPanoram__button"
                  onClick={()=>this.rightEvent()}></div>
          </div>
        )
      }
    }
    render() {
      return(   
        <>
          <img className="moonPanoram__pc"
            title=""
            alt="IMG"
            style={{
              width: this.state.widthOfBlock,
              left: (window.innerWidth - this.state.widthOfBlock) / 2,
            }}
            src={pc}/>
          {this.imgChange()}

          {this.buttonsEmulator()}
        </>
      );
    }
  }
  const MoonPanoram = connect()(PREMoonPanoram);
  export default MoonPanoram;