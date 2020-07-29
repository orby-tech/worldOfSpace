import React, { useState } from "react";

import infoOfObjects from './logic/dataOfObjectsInOverlay'

import  OClassStar from "./img/OClassStar.png";

export const Overlay = props => {
    let overlayShow = props.overlayShow ? "overlay__container" : "overlay__containerNoDisplay"
    document.body.style.overflow = ""
    return (
        <div className={overlayShow} onClick={ (e) => props.hideShowOverlay(e) }>
            <div className='overlay__infoBlock' onClick={ (e) => e.stopPropagation() }>
                <div className='overlay__header'> 
                    <img  className='overlay__img' src={props.object.link} />
                    <h2  className='overlay__h'> {props.object.text} </h2>
                </div>
                <div className="overlay__textBlock">
                    <h3 className="overlay__nameHeader"> { props.object.name ? props.object.name : null } </h3>
                    {
                        infoOfObjects(props.object.text).map ( item => 
                            <p className="overlay__p" key={item}>{item}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}