"use strict";

// пусть нам нужно в консоль вывести 10 букв, начиная от D

// получим Unicode-код буквы D
var DCode='D'.charCodeAt(); // это 68

for ( var i=0; i<10; i++ ) {
    var c=String.fromCharCode(DCode+i); // строим букву по коду
    console.log( c );
}