import React, { useState } from "react";

import  plus  from "./img/plus.png"

export const SecondMenu = props => {
    const [selectedItem, setSelectedItem] = useState(0);
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
    let menuShow = hideShow ? "constructorOfStarSystem__changer" : "HidedMenu constructorOfStarSystem__changer"
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
        </>
    )
}