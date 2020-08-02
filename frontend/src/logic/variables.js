import  sun from "./../img/sun.png";
import  rocket from "./../img/rocket.png";
import  earth from "./../img/earth.png";
import  moon from "./../img/moonPre.png";
import  music from "./../img/music.png";
import curiosity from "./../img/marsCuriosity/curiosity.png";
import spaceScale from './../img/space_scale_icon.png'

import  mercury from "./../img/mercury.png";
import  venera from "./../img/venera.png";
import  mars from "./../img/mars.png";
import  jupiter from "./../img/jupiter.png";
import  saturn from "./../img/saturn.png";
import  uranus from "./../img/uranus.png";
import  neptun from "./../img/neptun.png";


export const listOfMenu = [
    {text: "Конструктор звездной системы",  link:"/constructor_Of_Star_System", img: rocket },
    {text: "Как звучит космос",             link:"/audio_of_space",             img: music },
    {text: "Земная система",                link:"/earth",                      img: earth },
    {text: "Солнечная система",             link:"/solar_system",               img: sun },
    {text: "Лунная панорама из Чанъе-3",    link:"/moon_panoram",               img: moon },
    {text: "Управление Curiosity",          link:"/mars_rider",                 img: curiosity },
    {text: "Вглубь вселенной",              link:"/space_scale",                img: spaceScale },
]

export const solarSystem__listOfStaticElements = [
    { "orbit": 1 },
    { "orbit": 0.9 },
    { "orbit": 0.7 },
    { "orbit": 0.6 },
    { "orbit": 0.4 },
    { "orbit": 0.3 },
    { "orbit": 0.2 },
    { "orbit": 0.1 },
  ]
export const solarSystem__listOfBaseElements = [
    { "object": sun,     "position": [0,0], "orbit": 0,   "form": 1 ,   "mass": 6.5,    "speed": 1 },
    { "object": mercury, "position": [0,0], "orbit": 0.1, "form": 0.2 , "mass": 0.2,    "speed": 1 },
    { "object": venera,  "position": [0,0], "orbit": 0.2, "form": 0.3 , "mass": 0.3,    "speed": 0.7 },
    { "object": earth,   "position": [0,0], "orbit": 0.3, "form": 0.3 , "mass": 0.5,    "speed": 0.5 },
    { "object": mars,    "position": [0,0], "orbit": 0.4, "form": 0.3 , "mass": 0.4,    "speed": 0.3 },
    { "object": jupiter, "position": [0,0], "orbit": 0.6, "form": 0.5 , "mass": 1.2,    "speed": 0.2 },
    { "object": saturn,  "position": [0,0], "orbit": 0.7, "form": 0.7 , "mass": 1,      "speed": 0.1 },
    { "object": uranus,  "position": [0,0], "orbit": 0.9, "form": 0.7 , "mass": 0.7,    "speed": 0.05 },
    { "object": neptun,  "position": [0,0], "orbit": 1,   "form": 0.3 , "mass": 0.7,    "speed": 0.025 }
  ]