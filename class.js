class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} стоит.`);
    }
  }
  
  let animal = new Animal("Мой питомец");

  // ES5
  function ClassName() {
    let self=this
    this.svoistvo=value; 
  
    this.metod=function() { 
    }
  }

let objClass = new ClassName

// ES6
class ClassName {
  constructor() {
    this.svoistvo=value; 
  }

  metod() {
  }
}

let objClass = new ClassName
