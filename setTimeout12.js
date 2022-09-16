console.log("1"); //1

setTimeout(() => {
    console.log("2"); //3

    setTimeout(() => console.log('3'), 0) //5
}, 0)

setTimeout(()=>console.log("4")) //4

console.log('5'); //2

//1 5 2 4 3