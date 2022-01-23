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

async function test() {

    console.log('start...');

    let resA=await createTimerPromise(3);
    console.log('A '+resA);

    let resB=await createTimerPromise(5);
    console.log('B '+resB);

    let resC=await createTimerPromise(7);
    console.log('C '+resC);

}