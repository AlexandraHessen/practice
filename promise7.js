console.log(1); // 1

setTimeout(() => {
    console.log(2); // 6
}, 0);

console.log(3); //2

Promise.resolve().then(() => {
    console.log(4); // 5
})

console.log(5); // 3

while ('') {
    console.log(6); // не выведет
}

console.log(7); // 4