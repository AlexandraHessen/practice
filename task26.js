function func(res, num) {
    if (num % 2 === 0) {
        res.push(num/2)
    } 
        return res
}
console.log(arr.reduce(func, []))