"use strict";

var divElem=document.getElementById('IYellow');
divElem.addEventListener('mouseover',mouseOver,false);
divElem.addEventListener('mouseout',mouseOut,false);

function mouseOver(EO) {
    EO=EO||window.event;
    console.log('mouseover - мышь теперь над самим элементом '+EO.target.id);
}

function mouseOut(EO) {
    EO=EO||window.event;
    console.log('mouseout - мышь теперь НЕ над самим элементом '+EO.target.id);
}