Promise.resolve('BatMan')
.then(function (val) {
    console.log('then', val);
    throw new Error('Error happen');
    return 'OMG!';
})
.then((val) => console.log('then', val))
.catch((val) => {
    console.log('catch', val);
    return Promise.reject();
})
.then(firstHandler, secondHandler)
.then(firstHandler, secondHandler)
.then(firstHandler, secondHandler);​
function firstHandler(val) {
    console.log('first', val);
}​
function secondHandler(val) {
    console.log('second', val);
}

ответ: then BatMan
catch Error
second
first
first