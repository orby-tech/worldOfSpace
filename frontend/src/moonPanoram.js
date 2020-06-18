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
        loading: true
      }
  
    }


    componentDidMount(){


      let self = this
      setInterval(() => {
        self.setState({loading:true})
        setTimeout(() => {
          self.setState({loading:false})
        }, 5)
      }, 1200)

      
      document.addEventListener('keydown', (event) => {
        
        if (event.code === 'ArrowLeft') {
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
            self.setState({img: index, loading:false})
          }, 50)
          
          
        }
        if (event.code === 'ArrowRight') {
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
            self.setState({img: index, loading:false})
          }, 20)
        }
      });
      this.setState({loading: false})
    }
    imgChange(){
      if(this.state.loading) {
        return (
          <img className="moonPanoram__img"
                title=""
                alt="IMG"
                
                src={noise}/>
        )
      } else {
        return (<img className="moonPanoram__img"
                title=""
                alt="IMG"
                
                src={this.imgs[this.state.img[0]]}/>)
      }

    }
    render() {
      return(   
        <>
          <img className="moonPanoram__pc"
            title=""
            alt="IMG"
            style={{}}
            src={pc}/>
          <div className="moonPanoram__imgContainer">
    
          {this.imgChange()}
          </div>
        </>
      );
    }
  }
  const MoonPanoram = connect()(PREMoonPanoram);
  export default MoonPanoram;