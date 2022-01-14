"use strict";

var draggedBall=null;

function ballDragStart(EO) {
    // началось перетаскивание мячика
    EO=EO||window.event;
    console.log('starting drag id='+EO.target.id);
    draggedBall=EO.target;
}

function ballDragEnd(EO) {
    // закончилось перетаскивание мячика (неважно куда он уронен)
    EO=EO||window.event;
    console.log('drag finished');
    draggedBall=null;
}

function divDragOver(EO) {
    EO=EO||window.event;
    // по-умолчанию ронять элементы в div запрещено, отменяем:
    EO.preventDefault();
}

function divDrop(EO) {
    // мячик уронен
    EO=EO||window.event;
    EO.preventDefault();
    if ( draggedBall )
        EO.currentTarget.appendChild(draggedBall);
}