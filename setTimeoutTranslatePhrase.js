"use strict";

var translateDelayTimer=0; // таймера нет

function startTimer() { // (ре)старт таймера
    stopTimer();
    translateDelayTimer=setTimeout(translatePhrase,500);
}

function stopTimer() { // стоп таймера
    if ( translateDelayTimer ) {
        clearTimeout(translateDelayTimer);
        translateDelayTimer=0;
    }
}

function keyPressed() {
    startTimer();
}

function translatePhrase() {
    stopTimer(); // важно чтоб очистить translateDelayTimer
    // запускаем длительную операцию по обработке фразы
    var phrase=document.getElementById('IPhrase').value;
    console.log('перевожу фразу: '+phrase);
}