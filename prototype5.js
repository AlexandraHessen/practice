function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype = {};

console.log(rabbit.eats); //true

//ПРАВИЛО
// После создания F.prototype может измениться, 
// и новые объекты, созданные с помощью new F(), будут иметь другой объект в качестве [[Prototype]], 
// но уже существующие объекты сохранят старый.
    var rabbit2 = new Rabbit();
 console.log(rabbit2.eats); //undefined

//пример проверка этаго правила, что еслибы создали инстенс черех new после пустого, то он бы обнулился
// а так как мы создали его до то действует прошлый прототип


//2
function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype.eats = false;

console.log(rabbit.eats); //false


function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log(rabbit.eats); //undefined