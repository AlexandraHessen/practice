"use strict";

function f(arg) {
    setTimeout( () => { console.log(arg); } ,1000);
}

f(5);
f(7);