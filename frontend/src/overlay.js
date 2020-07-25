import React, { useState } from "react";
import  OClassStar from "./img/OClassStar.png";
export const Overlay = props => {
    const [selectedItem, setSelectedItem] = useState(0);
    const [hideShow, setHideShow] = useState(true);
    const changeObject = (e, object) =>{
        e.preventDefault()
        props.onSelectObject(object)
        setSelectedItem(object.massID)
    }
    const hideOverlay = e => {
        e.preventDefault()
        setHideShow(!hideShow)
    }
    let overlayShow = props.overlayShow ? "overlay__container" : "overlay__containerNoDisplay"
    return (
        <div className={overlayShow} onClick={ (e) => props.hideShowOverlay(e) }>
            <div className='overlay__infoBlock' onClick={ (e) => e.stopPropagation() }>
                <div className='overlay__header'> 
                    <img  className='overlay__img' src={props.object.link} />
                    <h1  className='overlay__h'> {props.object.text} </h1>
                </div>
                
            </div>
        </div>
    )
}