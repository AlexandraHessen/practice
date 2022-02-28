function f() {
    var a=5;
    console.log('локальная для f переменная a='+a);
  
    return function() { // это та самая функция ff, имя необязательно
        var b=7;
        console.log('локальная для ff переменная b='+b);
        console.log('замкнутая переменная a='+a);
      };
  
  }
  
  var a=3
  console.log(f())
  var ffref=f(); // ffref показывает на описанную внутри f функцию ff
  console.log()
  ffref(); // вызываем функцию ff