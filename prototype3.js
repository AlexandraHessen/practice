function ClassName() {
    this.svoistvo=value;
   }
  
   ClassName.prototype.metod=function() { } // создаем метод в 
                                  прототипе который доступен всем экземплярам класса
  
   let objClass1 = new ClassName
   let objClass2 = new ClassName
   objClass1.metod === bjClass1.metod /