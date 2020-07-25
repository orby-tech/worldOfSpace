import React, { useState } from "react";
export const ConstructorsOfDynamicElements = props => {
    const styleOfObject = (mass) => {
        if (mass >= 800) {
          return 75
        } else if (mass >= 72) {
          return 20
        } else if (mass >= 12) {
          return 20
        } else if (mass >= 9) {
          return 20
        }else if (mass >= 3) {
          return 15
        } else if (mass >= 1) {
          return 10
        }
      }
    return (
        <>
            {props.stars.map( ( star, index) => 
                <img  
                  key={Object.values(star).join("") + index }
                  className="constructorOfStarSystem__star"
                  title="Звезда класса G"
                  style={{left: star[0], top: star[1], width: styleOfObject(star[2])   }}
                  alt="IMG"
                  src={star[5]}/>
            )}
        </>
    )
}