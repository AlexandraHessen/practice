// type arOrStr = string[] | string;

// let someVar :arOrStr = 'abc';

// someVar = 123;



// type arOrStr = string[] | string;

// function foo(a :arOrStr) {
//     if (typeof a === 'string') {
//         a = [a];
//     }
//     a.map( x => x.toUpperCase() );
// }

// foo('abcdef');
// foo(['abc', 'def']);

function foo(a :string[] | string) {

    if (!Array.isArray(a)) {
        a = <string[]> [a];
    }

    (<string[]> a).map( x => x.toUpperCase() );
}