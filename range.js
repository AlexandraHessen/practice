let range = {
    from: 1,
    to: 5,
  
    *[Symbol.iterator]() { // сокращение для [Symbol.iterator]: function*()
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
  
  for(let value of range) {
    alert(value); // 1, потом 2, потом 3, потом 4, потом 5
  }