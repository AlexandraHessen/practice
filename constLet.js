function run() {
    // область видимости функции run()
    const two = 2
    let one = 1
    function run2() {}
    var run3 = () => {}

    console.log(two)
    console.log(one)
    console.log(run2)
    console.log(run3)
}
run() // 2 1 ƒ run2() {} () => {}
console.log(two) // ReferenceError
console.log(one) // ReferenceError
console.log(run2) // ReferenceError
console.log(run3) // ReferenceError