function showName() {
    alert( arguments.length );
    alert( arguments[0] );
    alert( arguments[1] );
  
    // Объект arguments можно перебирать
    // for (let arg of arguments) alert(arg);
  }
  
  // Вывод: 2, Юлий, Цезарь
  showName("Юлий", "Цезарь");
  
  // Вывод: 1, Илья, undefined (второго аргумента нет)
  showName("Илья");

  function func(a) {
    console.log(arguments.length); //2
    for ( var i=0; i<arguments.length; i++ )
      console.log(arguments[i]);
  }
  
  func("aaa","bbb");

  function func(a,b,...rest) {
    console.log(rest.length); // 2   //  rest - массив всех аргументов ПОСЛЕ a и b
    for ( var i=0; i<rest.length; i++ )
      console.log(rest[i]); // "e","f"
  }
  
  func("с","d","e","f");