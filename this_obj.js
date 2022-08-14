let user = {
    // ...
  };
  
  // сначала объявляем
  function sayHi() {
    alert("Привет!");
  }
  
  // затем добавляем в качестве метода
  user.sayHi = sayHi;
  
  user.sayHi(); // Привет!