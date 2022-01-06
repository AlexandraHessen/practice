"use strict";

var myBoard=[
    ['x','x','x','x','x','x','x','x'],
    ['x','x','x','x','x','x','x','x'],
    ['x','x','x','x','x','x','x','x'],
    ['x','x','x','x','x','x','x','x'],
    ['x','x','x','x','x','x','x','x'],
    ['x','x','x','x','x','x','x','x'],
    ['x','x','x','x','x','x','x','x'],
    ['x','x','x','x','x','x','x','x'],
];

function showBoard(board) {
    console.log(' ---------------');
    for ( var row=0; row<board.length; row++ ) {
        var rowStr=(row+1)+") ";
        for ( var col=0; col<board[row].length; col++ )
            rowStr+=board[row][col]+" ";
        console.log(rowStr);
    }
    console.log(' ---------------');
}

showBoard(myBoard);

myBoard[1][3]='Q';

showBoard(myBoard);