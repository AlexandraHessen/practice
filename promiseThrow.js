"use strict";

function createTimerPromise(name,result) {

    return new Promise( (resolve,reject) => {
        console.log("промис "+name+" создан, запущен...");
        setTimeout( () => {
            if ( Math.random()<0.7 ) {
                console.log("промис "+name+" решён!");
                resolve(result);
            }
            else {
                console.log("промис "+name+" отклонён");
                reject("ошибка!!!");
            }
        }, 1000);
    });

}

createTimerPromise("AAA",1)
.then( result => {
        console.log("получен результат "+result);
        throw new Error("ошибка!!!");
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
.catch( error => {
        console.log("случилась ошибка: "+error);
    }
)
;
