function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
} 

console.log((multiply(1)(2)(3))); //6

const mul1 = multiply(1);
const mul2 = mul1(2);
const result = mul2(3);
console.log(result); // 6