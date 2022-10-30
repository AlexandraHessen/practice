if (!String.prototype.repeat) {             // если такого метода нет,
    // добавляем его в прототип
String.prototype.repeat = function(n) {
return new Array(n + 1).join(this); // повторить строку n раз
};
}

// проверка работы метода
alert( "La".repeat(3) ); // LaLaLa