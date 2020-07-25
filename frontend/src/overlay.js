import React, { useState } from "react";
import  OClassStar from "./img/OClassStar.png";
export const Overlay = props => {
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