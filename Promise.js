	"use strict";

	console.log('точка 1');

	let promise = new Promise((resolve, reject) => {

	});


	promise.then(result => {

	});


	console.log('точка 1'); //1

	var pr = new Promise((resolve, reject) => {
	    console.log("я создан, запущен..."); //2 !! эта функция будет вызвана сразу!
	    setTimeout(() => { //  а вот когда уже придет результат будут вызваны функции результата
	        console.log("я решён!"); //5
	        resolve(5);
	    }, 1000);
	});

	console.log('точка 2'); //3

	pr.then(result => {
	    console.log("промис решён с результатом " + result); //6
	});

	console.log('точка 3'); //4


	function createTimerPromise(result) {

	    return new Promise((resolve, reject) => {});

	}

	createTimerPromise().then(result => {});

	function createTimerPromise(result) {

	    return new Promise((resolve, reject) => {
	        console.log("я создан, запущен..."); //1
	        setTimeout(() => {
	            console.log("я решён!"); //2
	            resolve(result);
	        }, 1000);
	    });

	}

	createTimerPromise(5).then(result => {
	    console.log("промис решён с результатом " + result); //3
	});

	function createTimerPromise(name, result) {

	    return new Promise((resolve, reject) => {
	        console.log("промис " + name + " создан, запущен...");
	        setTimeout(() => {
	            console.log("промис " + name + " решён!");
	            resolve(result);
	        }, 1000);
	    });

	}

	createTimerPromise("AAA", 1)
	    .then(result => {
	        console.log("получен результат " + result);
	        return createTimerPromise("BBB", 2)
	    })
	    .then(result => {
	        console.log("получен результат " + result);
	        return createTimerPromise("CCC", 3)
	    })
	    .then(result => {
	        console.log("получен результат " + result);
	    });

	function createTimerPromise(name, result) {

	    return new Promise((resolve, reject) => {
	        console.log("промис " + name + " создан, запущен...");
	        setTimeout(() => {
	            console.log("промис " + name + " решён с результатом " + result);
	            resolve(result);
	        }, 1000);
	    });

	}

	var chain = Promise.resolve();
	for (let i = 1; i <= 5; i++)
	    chain = chain.then(() => {
	        return createTimerPromise("promise" + i, i)
	    });

	function createTimerPromise(name, result) {

	    return new Promise((resolve, reject) => {
	        console.log("промис " + name + " создан, запущен...");
	        setTimeout(() => {
	            if (Math.random() < 0.7) {
	                console.log("промис " + name + " решён!");
	                resolve(result);
	            } else {
	                console.log("промис " + name + " отклонён");
	                reject("ошибка!!!");
	            }
	        }, 1000);
	    });

	}

	createTimerPromise("AAA", 1)
	    .then(result => {
	        console.log("получен результат " + result);
	        return createTimerPromise("BBB", 2)
	    })
	    .then(result => {
	        console.log("получен результат " + result);
	        return createTimerPromise("CCC", 3)
	    })
	    .then(result => {
	        console.log("получен результат " + result);
	    })
	    .catch(error => {
	        console.log("случилась ошибка: " + error);
	    });

	createTimerPromise()
	    .then(result => {})
	    .catch(error => {})



	new Promise(function (resolve, reject) {

	    setTimeout(() => resolve(1), 1000); // (*)

	}).then(function (result) { // (**)

	    alert(result); // 1
	    return result * 2;

	}).then(function (result) { // (***)

	    alert(result); // 2
	    return result * 2;

	}).then(function (result) {

	    alert(result); // 4
	    return result * 2;

	});

    new Promise(function(resolve, reject) {

        setTimeout(() => resolve(1), 1000); // (*)
      
      }).then(function(result) { // (**)
      
        alert(result); // 1
        return result * 2;
      
      }).then(function(result) { // (***)
      
        alert(result); // 2
        return result * 2;
      
      }).then(function(result) {
      
        alert(result); // 4
        return result * 2;
      
      });