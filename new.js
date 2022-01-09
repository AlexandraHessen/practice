function getFunc() {
    let value = "test";
  
    let func = function() { alert(value); };
  
    return func;
  }
  
  getFunc()(); // "test", из лексического окружения функции getFunc