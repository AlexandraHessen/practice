	
"use strict";

console.log('точка 1');

let promise = new Promise( (resolve,reject) => {

});


promise.then( result => {
    
    }
);


console.log('точка 1'); //1

var pr=new Promise( (resolve,reject) => {
    console.log("я создан, запущен..."); //2 !! эта функция будет вызвана сразу!
    setTimeout( () => {                  //  а вот когда уже придет результат будут вызваны функции результата
        console.log("я решён!"); //5
        resolve(5);
        }, 1000);
});

console.log('точка 2'); //3

pr.then( result => {
        console.log("промис решён с результатом "+result); //6
    }
);

console.log('точка 3'); //4


function createTimerPromise(result) {

    return new Promise( (resolve,reject) => {
    });

}

createTimerPromise().then( result => {
    }
);

function createTimerPromise(result) {

    return new Promise( (resolve,reject) => {
        console.log("я создан, запущен..."); //1
        setTimeout( () => {
            console.log("я решён!"); //2
            resolve(result);
            }, 1000);
    });

}

createTimerPromise(5).then( result => {
        console.log("промис решён с результатом "+result); //3
    } 
);
