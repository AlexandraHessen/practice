"use strict";

function createTimerPromise(result) {

    return new Promise( (resolve,reject) => {
        console.log("я создан, запущен...");
        setTimeout( () => {
            console.log("я решён!");
            resolve(result);
            }, 1000);
    });

}

createTimerPromise(5).then( result => {
        console.log("промис решён с результатом "+result);
    }
);