function Animal() {
    this.eyes=2; // пусть у каждого животного 2 глаза
}

// методы всегда добавляем в прототип
Animal.prototype.showEyes=function() {
    console.log('eyes: '+this.eyes);
}

Animal.prototype.setLegs=function(legs) {
    this.legs=legs;
}

Animal.prototype.showLegs=function() {
    console.log('legs: '+this.legs);
}

function Tiger() {
    Animal.call(this); // явно вызываем конструктор класса-предка

    this.setLegs(4); // плюс к тому что есть у животного, у тигра 4 ноги...

    this.roar=function() { // ...и тигр умеет рычать
        console.log('я реву!');
    }
}

Tiger.prototype=
    Object.create(Animal.prototype); // тигр - это животное, наследуемся
Tiger.prototype.constructor=Tiger; // рекомендуется

var tigerJohn=new Tiger;
console.log(tigerJohn);