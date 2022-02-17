let range = {
    from: 1,
    to: 5,
  
    // for..of вызывает этот метод один раз в самом начале
    [Symbol.iterator]() {
      // ...возвращает объект-итератор:
      // далее for..of работает только с этим объектом, запрашивая следующее значение вызовом next()
      return {
        current: this.from,
        last: this.to,
  
        // next() вызывается на каждой итерации цикла for..of
        next() { // (2)
          // должен возвращать значение в виде объекта {done:.., value :...}
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  for(let value of range) {
    alert(value); // 1, потом 2, потом 3, потом 4, потом 5
  }