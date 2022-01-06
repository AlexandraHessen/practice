"use strict";

class AeroCar {
  // приём с self неприменим!
  
  // конструктор описывается явно
  constructor(carNum) {
    // публичные свойства добавляются в this в конструкторе
    this.num=carNum;
  }

  // новый синтаксис описания методов - без this.имя=function()...
  beep() {
    console.log('aerocar num:'+this.num+' beeeeep!');
  }
}

var car5=new AeroCar('AAA-555');
car5.beep();
// aerocar num:AAA-555 beeeeep!