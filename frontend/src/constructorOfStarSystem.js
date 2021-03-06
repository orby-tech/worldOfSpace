import React, { Component , Link }  from 'react';
import  { connect } from 'react-redux'

import  { SecondMenu }  from  './secondMenu.js'
import  { Overlay }  from './overlay.js'
import  { ConstructorsOfDynamicElements }  from './consrtuctorsDynamicElements.js'

import newObjectsNameGenerator from "./logic/nameGenerator"

import  sun from "./img/sun.png";
import  blackHole from "./img/blackHole.png";
import  AClassStar from "./img/AClassStar.png";
import  OClassStar from "./img/OClassStar.png";
import  Cvasar from "./img/cvasar.png";
import  plus  from "./img/plus.png"
const a =  3

const speedList = [0.25, 0.5, 1, 1.5, 2, 3, 4, 5]

function sortByMass(a, b){
  return -(a[2] - b[2])
  }
class PREConstructorStarSystem extends Component{

    constructor(props){
      super(props);
      
      this.newStar = this.newStar.bind(this)
      let listOfSpaceObjects = [
        {text: "Квазар", link: Cvasar, massID: 800 },
        {text: "Черная дыра", link: blackHole, massID: 36 },
        {text: "Звезда класса G", link: sun, massID: 3},
        {text: "Звезда класса A", link: AClassStar, massID: 9},
        {text: "Звезда класса O", link: OClassStar, massID: 12}
      ]

      this.center = []
      this.stars = []
      this.timer = 0 
      this.state = {
        work: true,
        stars: [],
        tick: 1,
        listOfSpaceObjects: listOfSpaceObjects,
        selectedItem: listOfSpaceObjects[0],
        hideShow: false,
        overlayShow: false,
        overlayItem: {text: "", link: '', massID: null},
        pause: false,
        speedIndex: 3,
      }  
    }
    componentWillMount(){
      document.body.scrollTo(0,0)
      document.body.style.overflow = "hidden"
    }
  
    coordinatsUpdate() {      
        let arr = this.stars
        let delta = speedList[this.state.speedIndex]
        let distance = 0
        let power = 0
        let powerX = 0
        let powerY = 0
        let temp = []
        for (let i = 0; i< arr.length; i++) {
          for (let j = i+1; j< arr.length; j++) {            
            distance = ((arr[i][0] - arr[j][0]) ** 2 + (arr[i][1] - arr[j][1]) ** 2) ** 0.5            
            power = arr[i][2] * arr[j][2] / distance * 0.0005 
     
            powerX = power / distance  * (arr[i][0] - arr[j][0])
            powerY = power / distance  * (arr[i][1] - arr[j][1])
            arr[i][3] -= powerX / arr[i][2] 
            arr[i][4] -= powerY / arr[i][2]
            arr[j][3] += powerX / arr[j][2]
            arr[j][4] += powerY / arr[j][2]
            if (  distance < 0.5) {
              let mass = arr[i][2] + arr[j][2]
              let x = (arr[i][3] * arr[i][2] + arr[j][3] * arr[j][2]) / mass
              let y = (arr[i][4] * arr[i][2] + arr[j][4] * arr[j][2]) / mass
              let link = 1
              if (mass >= 800) {
                link = Cvasar
              } else if (mass >= 72) {
                link = blackHole
              } else if (mass >= 12) {
                link = OClassStar
              } else if (mass >= 9) {
                link = AClassStar
              }else if (mass >= 3) {
                link = sun
              } else if (mass >= 1) {
                link = 1
              }
              arr[i] = [ arr[i][0], arr[i][1], mass, x, y , link, arr[i][6], arr[i][7] ]
              arr[j] = [null, null, 1, null, null]
            } 
          }
        }
        let tempArr = []
        for (let i = 0; i< arr.length; i++) {
          if (arr[i][0] && Math.abs(arr[i][0])< 1000 && Math.abs(arr[i][1])< 1000){
            arr[i][0] += arr[i][3] * delta
            arr[i][1] += arr[i][4] * delta
            tempArr.push(arr[i])
          }
        }
        tempArr.sort(sortByMass)
        this.stars = tempArr
        this.setState({stars: tempArr})
         
    }
    componentDidMount(){
      if(document.querySelector('.constructorOfStarSystem__star')) {
        this.start()
      } else {
        this.stop()
      }
    }
    componentDidUpdate (prevProps, prevState) {
      if(prevState.speedIndex !== this.state.speedIndex) {
        this.stop()
        this.start()
        console.log(10 * speedList[this.state.speedIndex])
      }
    }
    start () {
      clearInterval(this.timer)
      this.timer = setInterval(() => {          
        this.coordinatsUpdate() 
      }, 20 / speedList[this.state.speedIndex]);
    }
    stop () {
      clearInterval(this.timer)
    }
    newStar ( event ) {
      if( this.state.overlayShow ) return;
      let arr = this.stars      
      arr.push([
        event.x, 
        event.y, 
        this.state.selectedItem.massID, 
        (Math.random() - 0.5) / 100 , 
        (Math.random() - 0.5) / 100, 
        this.state.selectedItem.link,
        newObjectsNameGenerator(this.state.selectedItem.text),
        this.state.selectedItem.text
      ])

      this.stars = arr
      this.start()
    }
    imgClick (object) {
      console.log(this.state.selectedItem)
      let link = object[5]
      let name = object[6]
      let type = object[7]
      this.setState({ overlayItem: { link: link, name: name, text: type } })
      this.hideShowOverlay()
    }
    changeObject (object) {
      if ( object.text === this.state.selectedItem.text) {
        this.setState({ overlayItem: this.state.selectedItem })
        this.hideShowOverlay()
      }
      this.setState({ selectedItem: object})
    }
    hideShowOverlay () {
      setTimeout(() => {
        this.setState({ overlayShow: !this.state.overlayShow })
      }, 20)
    }
    pauseButton(){
      this.setState({ pause: !this.state.pause })
      if( !this.state.pause ) {
        this.stop()
      } else {
        this.start()
      }
    }
    changeSpeed (v) {
      let newSpeed = this.state.speedIndex + v
      if ( newSpeed < 0 ) { newSpeed = 0 }
      if ( newSpeed > 7 ) { newSpeed = 7 }
      this.setState({ speedIndex: newSpeed })
    }
    render() {
      let menuShow = this.state.hideShow ? "constructorOfStarSystem__changer" : "HidedMenu constructorOfStarSystem__changer"
      return(   
        <div className="constructorOfStarSystem__container" onClick={ () => this.newStar(event)}>
          <ConstructorsOfDynamicElements  stars={this.state.stars} 
                                          imgClick={ (object) => this.imgClick(object) }/>
          <SecondMenu listOfMenu={this.state.listOfSpaceObjects}
                      pause={this.state.pause}
                      pauseButton={() => this.pauseButton()}
                      speed={speedList[this.state.speedIndex]}
                      changeSpeed={(v)=> this.changeSpeed(v)}
                      onSelectObject={object => this.changeObject(object)}/>
          <Overlay  overlayShow={this.state.overlayShow} 
                    hideShowOverlay={ () => this.hideShowOverlay()}
                    object={this.state.overlayItem}/>
        </div>
      );
    }
  }
  const ConstructorStarSystem = connect()(PREConstructorStarSystem);
  export default ConstructorStarSystem;