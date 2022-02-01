var speed=parseFloat('sss');
console.log( speed );
// NaN
console.log( isFinite(speed) );
// false
console.log( isFinite(5/0) );
// false
console.log( isFinite(-5/0) );
//  false
console.log( isFinite(7) );
// true
console.log( isFinite('7') );
// true
console.log( isFinite('7м') );
// false