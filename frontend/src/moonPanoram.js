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
        img: [0, 0]
      }
  
    }
    imgAppdate (newImg) {
      setTimeout(() => {
                
      }, 10);
    }

    componentDidMount(){
      document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowLeft') {
          let index = this.state.img
          index[1] -= 1
          if(index[1] < 0){
            index[0] -= 1
            index[1] += 10
            if ( index[0] < 0 ) {
              index[0] += this.imgs.length

            }
            if ( index[0] >= this.imgs.length ) {
              index[0] -= this.imgs.length
            }
          }
          
          this.setState({img: index})
        }
        if (event.code === 'ArrowRight') {
          let index = this.state.img
          index[0] += 1
          if ( index[0] < 0 ) {
            index[0] += this.imgs.length
          }
          if ( index[0] >= this.imgs.length ) {
            index[0] -= this.imgs.length
          }
          this.setState({img: index})
        }
      });
    }
    changeIMG(){
      if(!this.state.imgs){
        return this.imgs[this.state.img[0]]
      } else {
        return noise
      }
    }

    render() {
      return(   
        <div className="moonPanoram__imgContainer">
          <img className="moonPanoram__img"
              title="Меркурий"
              alt="mercury IMG"
              style={{marginLeft:  -this.state.img[1] * 11}}
              src={this.changeIMG()}/>
        </div>
      );
    }
  }
  const MoonPanoram = connect()(PREMoonPanoram);
  export default MoonPanoram;