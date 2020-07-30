import React, { useState } from "react";

import  plus  from "./img/plus.png"
import  pause_1  from "./img/icons/pause_1.svg"
import  pause_2  from "./img/icons/pause_2.svg"

export const SecondMenu = props => {
    const [selectedItem, setSelectedItem] = useState(props.listOfMenu[0].massID);
    const [hideShow, setHideShow] = useState(false);
    const changeObject = (e, object) =>{
        e.stopPropagation()
        props.onSelectObject(object)
        setSelectedItem(object.massID)
    }
    const hideShowMenu = e => {
        e.stopPropagation()
        setHideShow(!hideShow)
    }
    const pauseButton = e => {
        e.stopPropagation()
        props.pauseButton()
    }
    const changeSpeed = (e, v) => {
        e.stopPropagation()
        props.changeSpeed(v)
    }
    let menuShow = hideShow ? "constructorOfStarSystem__changer" : "HidedMenu constructorOfStarSystem__changer"
    let showPause = !(typeof props.pause == "undefined") ? "constructorOfStarSystem__pauseButton" : "noDisplay"
    let showSpeedRegulation = !(typeof props.pause == "undefined") ? "constructorOfStarSystem__speedRegulationBlock" : "noDisplay"

    return (
        <>
            <div className={menuShow}>

            {props.listOfMenu.map( object =>               
            <div    className={
                        object.massID === selectedItem 
                            ? "constructorOfStarSystem__changerItemSelected"
                            : "constructorOfStarSystem__changerItem"
                            } 
                    key={Object.values(object).join("")}
                    onClick={(e) =>changeObject(e, object)}>
                
                <img  
                className="constructorOfStarSystem__img"
                alt="sun IMG"
                src={object.link}/>
                
                <div className="constructorOfStarSystem__changerItemText">{ object.text }</div>
            </div>            
            )}  
            </div>
            <div    className="constructorOfStarSystem__menuButton"
                    onClick={(e) => hideShowMenu(e)}>
            <img src={plus}/>
            </div> 
            <img    className={showPause}
                    onClick={(e) => pauseButton(e)}
                    src={ props.pause ? pause_1 : pause_2 }></img>
            <div    className={showSpeedRegulation}>
                <img    className="constructorOfStarSystem__speedRegulationButton"
                        style={{transform:"rotate(180deg"}}
                        onClick={(e) => changeSpeed(e, -1)}
                        src={ pause_2 }></img>
                <div>
                    <div    className="constructorOfStarSystem__speedRegulationInfo">
                        {props.speed}
                    </div>
                </div>
                <img    className="constructorOfStarSystem__speedRegulationButton"
                        onClick={(e) => changeSpeed(e, 1)}
                        src={ pause_2 }></img>    
            </div>
        </>
    )
}