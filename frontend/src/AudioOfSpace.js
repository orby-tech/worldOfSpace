import React, { Component ,Link }  from 'react';
import  { connect } from 'react-redux'
import AudioPlayer from 'react-h5-audio-player';

import  blackHole from "./img/blackHole.png";
import  Cvasar from "./img/cvasar.png";
import  Jupiter from "./img/jupiter.png";
import  Mars from "./img/mars.png";
import  MilkyWay from "./img/milkyWay.png";
import  Neptun from "./img/neptun.png";
import  { SecondMenu }  from  './secondMenu.js';

import audioMars from './audio/mars.mp3'
import audioJupiter from './audio/jupiter.mp3'
import audioBlackHole from './audio/blackHole.mp3'
import audioCvasar from './audio/cvasar.mp3'
import audioMilkyWay from './audio/milkyWay.mp3'
import audioNeptun from './audio/neptun.mp3'

HTMLAudioElement.prototype.stop = function()
{
  this.pause();
  this.currentTime = 0.0;
}

class PREAudioOfSpace extends Component{

    constructor(props){
      super(props);
      let listOfSpaceObjects = [
        {text: "Марс", link: Mars, massID: 1, audio:audioMars },
        {text: "Юпитер", link: Jupiter, massID: 2, audio:audioJupiter },
        {text: "Черная дыра", link: blackHole, massID: 3, audio:audioBlackHole},
        {text: "Квазар", link: Cvasar, massID: 4, audio:audioCvasar},
        {text: "Млечный путь", link: MilkyWay, massID: 5, audio: audioMilkyWay},
        {text: "Нептун", link: Neptun, massID: 6, audio: audioNeptun},
      ]
      this.state = {
        listOfSpaceObjects: listOfSpaceObjects,
        selectedItem: {text: "Марс", link: Mars, massID: 1, audio:audioMars }

      }
  
    }


    componentDidMount(){
      

    }
    changeObject(object){
      for (let i = 1; i<=this.state.listOfSpaceObjects.length; i++){
        console.log(i)
        let temp = "" + i
        document.getElementById(temp).stop()
      }
      this.setState({ selectedItem: object})
    }
    selectedItem (item) {
      if(item === this.state.selectedItem.massID) {
        return "constructorOfStarSystem__changerItemSelected"
      } else {
        return "constructorOfStarSystem__changerItem"
      }

    }
    audio(item){
      if(item === this.state.selectedItem.massID) {
        return "spaceMusic__audio"
      } else {
        return "spaceMusic__audioNoDisplay"
      }
    }
    render() {
      return(   
        <>
            <div className="spaceMusic__audioContainer">
              {this.state.listOfSpaceObjects.map( object =>               
                <audio controls="controls" id={""+ object.massID} className={this.audio(object.massID)} name="media">
                  <source src={object.audio} type="audio/mpeg" />  
                </audio>          
              )}  
            </div>

        
          <SecondMenu listOfMenu={this.state.listOfSpaceObjects}
                      onSelectObject={object => this.changeObject(object)}/>
        </>
      );
    }
  }
  const AudioOfSpace = connect()(PREAudioOfSpace);
  export default AudioOfSpace;