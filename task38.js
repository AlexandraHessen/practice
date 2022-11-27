function makeArmy() {
    ...
    let i = 0;
    while (i < 10) {
      let shooter = function() { // функция shooter
        alert( i ); // должна выводить порядковый номер
      };
      ...
    }
    ...
  }