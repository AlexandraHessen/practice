function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = curry(sum);
  
  alert( curriedSum(1, 2, 3) ); // 6, всё ещё можно вызывать нормально
  alert( curriedSum(1)(2,3) ); // 6, каррирование первого аргумента
  alert( curriedSum(1)(2)(3) ); // 6, каррирование всех аргументов