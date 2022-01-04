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