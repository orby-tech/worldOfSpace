import React, { Component }  from 'react';
import  { connect } from 'react-redux'

import  asteroidIMG from "./img/asteroid.png";
import { solarSystem__listOfStaticElements, solarSystem__listOfBaseElements } from './logic/variables'

const listOfStaticElements = solarSystem__listOfStaticElements
let intervalForTick 
let tick = 0

class PRESolarSystem extends Component{
  constructor(props){
    super(props);
    this.state = {
      widthOfBlock: (window.innerHeight < window.innerWidth) 
          ? window.innerHeight * 0.9
          : window.innerWidth * 0.9,
      centerOfBlock: [ window.innerWidth / 2, window.innerHeight / 2 ],
      listOfBaseElements: solarSystem__listOfBaseElements,
      listOfDynamicElements: [],
    }

  }

  componentDidMount(){      
    this.loop()
    document.body.scrollTo(0,0)
    document.body.style.overflow = "hidden"
    document.addEventListener( "scroll", function(e){
            document.body.scrollTo(0,0)
          }, true)      
    document.body.addEventListener('click', (event) => this.appendNewObject(event))
  }
  loop(){
    this.countBaseElementsPositions()
    this.countDynamicElementsPositions()
    tick++
    setTimeout(() => {
      this.loop()
    }, 20)    
  }
  appendNewObject(event) {
    console.log(event)
    this.setState({ listOfDynamicElements: [
      ...this.state.listOfDynamicElements,
        { 
          "object" : "asteroid",
          "mass": 1,
          "img": asteroidIMG,
          "position": [event.clientX, event.clientY],
          "form": 0.2,
          "speed": [0, 0],
          "status": null,
        },
    ] })
  }
  countBaseElementsPositions() {
    let listOfBaseElements = this.state.listOfBaseElements.slice()
    listOfBaseElements.forEach( item => {
      item.position = [
        Math.cos(tick / 200 * item.speed ) * this.state.widthOfBlock * item.orbit * 0.5 + this.state.centerOfBlock[0] ,
        Math.sin(tick / 200 * item.speed ) * this.state.widthOfBlock * item.orbit * 0.5 + this.state.centerOfBlock[1] ,
      ]
    })
    this.setState({ listOfBaseElements : listOfBaseElements })
  }
  countDynamicElementsPositions() {
    let listOfDynamicElements = [...this.state.listOfDynamicElements]
    let listOfBaseElements = [...this.state.listOfBaseElements]
    let coeficient = 10
    let accumulator = [0,0]
    let distance = 0
    for( let item of listOfDynamicElements) {
      if (item.position[0] < -100 || item.position[1] < -100 ||
          item.position[0] > window.innerWidth + 100 || item.position[1] > window.innerWidth + 100){
        item={}
        
        continue
      }
      accumulator = [0,0]
      let live = true;
      for( let baseItem of  listOfBaseElements){
        distance = (( baseItem.position[0] - item.position[0] ) ** 2 + ( baseItem.position[1] - item.position[1] ) ** 2) ** 0.5
        if (distance < this.state.widthOfBlock * 0.1 * item.form * 0.3 ) {
          if( !item.status ) {
            console.log(93)
            item.status = 1
          } 
        }
        if( item.status ) {
          item.status++
        } else {
          accumulator[0] += baseItem.mass / distance ** 3 * coeficient * ( baseItem.position[0] - item.position[0] )
          accumulator[1] += baseItem.mass / distance ** 3 * coeficient * ( baseItem.position[1] - item.position[1] )
        }
        if ( item.status && item.status > 300 ) {
          live = false
          break;
        }        
      }
      if ( !live ) {
        item = {}
        continue
      }
      item.speed[0] += accumulator[0]
      item.speed[1] += accumulator[1]
      item.position[0] += item.speed[0]
      item.position[1] += item.speed[1]
    }
    let temp = []
    for ( let item of listOfDynamicElements ){
      if( !item.status || item.status < 4 ) {
        temp.push( item )
      }
    }
    this.setState({listOfDynamicElements: temp})
  }
  render() {
    return(   
      <>
        {listOfStaticElements.map((item)=>{
          if(item.orbit) {
            return(
              <div  className="earthSystem__orbit"
                    key={Object.values(item).join("")}
                    style={{
                      left : this.state.centerOfBlock[0],
                      top : this.state.centerOfBlock[1],
                      width : this.state.widthOfBlock * item.orbit,
                      height : this.state.widthOfBlock * item.orbit,
                    }}>

              </div>
            )
          } else if( item.center ) {
            return(
              <img 
                className="earthSystem__orbit"
                key={Object.values(item).join("")}
                src={item.center}
                style={{
                  left : this.state.centerOfBlock[0],
                  top : this.state.centerOfBlock[1],
                  width : this.state.widthOfBlock * 0.1,
                  height : this.state.widthOfBlock * 0.1,
                }}/>
            )
          }
        })}
        {this.state.listOfBaseElements.map( item => 
          <img 
            key={Object.values(item).join("")}
            className="earthSystem__orbit"
            src={item.object}
            style={{
              left : item.position[0],
              top : item.position[1],
              width : this.state.widthOfBlock * 0.1 * item.form,
              height : this.state.widthOfBlock * 0.1 * item.form,
            }}/>
        )}
        {this.state.listOfDynamicElements.map( item => 
          <img 
            key={Object.values(item).join("")}
            className="earthSystem__orbit"
            src={item.img}
            style={{
              left : item.position[0],
              top : item.position[1],
              width : this.state.widthOfBlock * 0.1 * item.form,
              height : this.state.widthOfBlock * 0.1 * item.form,
            }}/>
        )}
      </>
    );
  }
}
const SolarSystem = connect()(PRESolarSystem);
export default SolarSystem;