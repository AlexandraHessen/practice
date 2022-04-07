alert( '2' > 1 ); // true, строка '2' становится числом 2
alert( '01' == 1 ); // true, строка '01' становится числом 1

alert( true == 1 ); // true
alert( false == 0 ); // true

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

alert( 0 == false ); // true
alert( '' == false ); // true