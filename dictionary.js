"use strict";

function colorCode(colorName) {
    var colors={ red:'#FF0000', green:'#00FF00', blue:'#0000FF', black:'#000000', white:'#FFFFFF' };
    return colors[colorName];
}

console.log( colorCode('red') );
console.log( colorCode('white') );