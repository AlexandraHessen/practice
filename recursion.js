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




