let bigint = 1n;
let number = 2;

// конвертируем number в bigint
alert(bigint + BigInt(number)); // 3

// конвертируем `bigint` в number
alert(Number(bigint) + number); // 3