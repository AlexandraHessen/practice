//ES5
function Class1() {
    this.svoistvo = value;
}

Class1.prototype.metod = function () {

}

function Class2() {
    Class1.call(this); // делаем чтобы получить свойства
}

Class2.prototype = Object.create(Class1.prototype); //  делаем чтобы получить методы

//ES6

class Animal {
    // конструктор описывается явно
    constructor() {
        this.eyes = 2; // пусть у каждого животного 2 глаза
    }

    // новый синтаксис описания методов - без this.имя=function()...
    // методы автоматически будут добавлены в прототип класса
    showEyes() {
        console.log('eyes: ' + this.eyes);
    }

    setLegs(legs) {
        this.legs = legs;
    }

    showLegs() {
        console.log('legs: ' + this.legs);
    }
}

class Tiger extends Animal { // тигр - это животное

    constructor() {
        super(); // нужно явно вызывать конструктор класса-предка,
        // иначе this вообще будет недоступен
        this.setLegs(4); // у тигра 4 ноги
    }

    roar() // и тигр умеет рычать
    {
        console.log('я реву!');
    }
}

class Butterfly extends Animal { // бабочка - это животное

    constructor() {
        super();
        this.setLegs(6); // у бабочки 6 ног
    }

    fly() // и бабочка умеет летать
    {
        console.log('я летаю!');
    }
}



class Class1 {
    constructor() {
        this.svoistvo = value;
    }

    metod() {     // без function!, методы автоматически будут добавлены в прототип класса
    }
}

class Class2 extends Class1 {  // = Class2.prototype = Object.create(Class1.prototype); //  делаем чтобы получить методы

    constructor() {
        super(); // = Class1.call(this);  делаем чтобы получить свойства
    }

    metod() {     // без function, методы автоматически будут добавлены в прототип класса
    }
}

objClass.__proto__ === Class.prototype
true