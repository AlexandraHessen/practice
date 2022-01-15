"use strict";

var counter;
var running;

function start() {
    setTimeout(stop,1000);
    counter=0;
    running=true;
    requestAnimationFrame(tick)
}

function tick() {
    counter++;
    if ( running )
        requestAnimationFrame(tick)
}

function stop() {
    running=false;
    alert('срабатываний в секунду: '+counter);
}