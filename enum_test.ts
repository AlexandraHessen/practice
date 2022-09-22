enum Color { BLACK, YELLOW, RED=8, GREEN };
var col1:Color=Color.BLACK;
console.log(col1); //0
console.log(Color.GREEN); //9
// BLACK, =0
// YELLOW, =1
// RED=8,
// GREEN =9
console.log(Color[1]); //YELLOW

console.log(Color[2]); //undefined
console.log(Color[9]); //GREEN