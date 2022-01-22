"use strict";

function createTimerPromise(name,result) {

    return new Promise( (resolve,reject) => {
        console.log("промис "+name+" создан, запущен...");
        setTimeout( () => {
            console.log("промис "+name+" решён!");
            resolve(result);
            }, 1000);
    });

}

createTimerPromise("AAA",1)
.then( result => {
        console.log("получен результат "+result);
        return createTimerPromise("BBB",2)
    }
)
.then( result => {
        console.log("получен результат "+result);
        return createTimerPromise("CCC",3)
    }
)
.then( result => {
        console.log("получен результат "+result);
    }
)
;