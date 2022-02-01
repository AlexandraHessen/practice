var ffref=null;

function f() {
  var a=5;

  function ff() {
    console.log('замкнутая переменная a='+a);
  }

  ffref=ff; // сохраняем глобальную ссылку на функцию ff
}

f();

ffref();

// замкнутая переменная a=5