function ClassName() {
    this.svoistvo=value;
  }

  ClassName.prototype.metod=function() { }

  let objClass1 = new ClassName
  let objClass2 = new ClassName
  objClass1.metod === bjClass1.metod // метод metod в обоих объектах - ОДИН И ТОТ ЖЕ
  //true
  

  var a2=new Class2(21);
  a2.f(); // вызываем метод объекта-прототипа, но this==a2
21
  var b2=new Class2(22);
  b2.f(); // вызываем метод объекта-прототипа, но this==b2
22
  console.log( a2.f===b2.f ); // метод f в обоих объектах - ОДИН И ТОТ ЖЕ
true