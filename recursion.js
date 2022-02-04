function cycle(numb, degree){
  let result=1
  for(let i=0; i<degree; i++){
    result*=numb
  }
return result
}

alert(cycle(2, 3))

// function recursion(numb, degree){
//   console.log("degree " + degree)
//   if (degree==1){
//     return numb
//   } else {
//     let result=numb * recursion(numb, degree-1) // в математике xn = x * xn-1
//     console.log("result " + result)
//     return result
//   }
// }

// alert(recursion(2, 3))

function recursion(numb, degree){
  console.log("degree " + degree)
  if (degree==0){
    return 1
  } else {
    let result=numb * recursion(numb, degree-1) // в математике xn = x * xn-1
    // result 2в3 т.е. = 2 * 2в2
    console.log("result " + result)
    return result
  }
}

alert(recursion(2, 3))
/*
console.log
degree 3
degree 2
degree 1
degree 0
result 2
result 4
result 8

т.е. сначала проходит все степени, а функции отправлятся по порядку в стек
когда доходит то условия degree==0 появляется первый return = 1
который является результатом последнего вызова функции recursion(2, 0) 0=1 => 2*1 и возвращется return 2
т.е. вызывающая её верхняя функция recursion(2, 1) возвращает 2 и получается 2*recursion(2, 1) = 2*2
и т.к. далее раскручивается до верха
**********************  СХЕМА В БЛОКНОТЕ АЛЬФАЛИДЕР  ********************** 
*/

function recursionSum (number){
  if (number==0){
    return 0
  } else {
    let result=number+recursionSum(number-1)
    return result
  }
}

alert (recursionSum(100))

// function sumTo(n) {
//   if (n == 1) return 1;
//   return n + sumTo(n - 1);
// }

// alert( sumTo(100) );

function factorial(number){
  if(number==1){
    return 1
  } else {
    let result= number*factorial(number-1)
    return result
  }
}

// function factorial(n) {
//   return (n != 1)   ?   n * factorial(n - 1)   :   1;
// }


alert (factorial(5))


function fibonacci(number){
  console.log(number)
  if(number <= 1){
    return number
  } else{
    // формула Фибоначчи Fn = Fn-1 + Fn-2
    let result=fibonacci(number - 1 ) + fibonacci(number - 2 )
    return result 
  }

}

alert(fibonacci(7))
// function fib(n) {
//   return n <= 1   ?   n   :  fib(n - 1) + fib(n - 2);
// }

// alert( fib(3) ); // 2
// alert( fib(7) ); // 13
// // fib(77); // вычисляется очень долго

// Возведение в степень 
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); // 8


function powFunc(num, pow){
  let result=0

  if(pow==1){
    return num
  }
  
  for(let i=0; i<pow; i++){
    return result=num*powFunc(num, pow-1)
  }

}

console.log(pow(2, 3))


function fact(num){
  let result
  if(num==1){
    return 1
  } else {
    return result=num*fact(num-1)
  }
}
fact (5)

function sum(num){
  let result
  if(num==0){
    return 0
  } else{
    return result=num+sum(num-1)
  }
//  return  (num==0)?0:num+sum(num-1)
}

sum(4)

function fib(num){
  let result
  if(num <= 1){
    return num
  } else {
    return result=fib(num-1)+fib(num-2)
  }
}

fib(7)

let a='[5, 7]'
let b=eval(a)





