function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }
  
  for(let value of generateSequence(1, 5)) {
    alert(value); // 1, потом 2, потом 3, потом 4, потом 5
  }