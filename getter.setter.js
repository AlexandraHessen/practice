let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName запустится с данным значением
  user.fullName = "Alice Cooper";
  
  alert(user.name); // Alice
  alert(user.surname); // Cooper

    let obj = {
        get name() {
            return `...`;
        // геттер, срабатывает при чтении obj.name
        },
    };

    let obj = {
        set name(value) {
            // сеттер, срабатывает при записи obj.name = value
          }
    };

let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return this.firstName + " " + this.lastName;
      // return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
}

let obj = {
    set name(value) {
        this.name=value;
    // сеттер, срабатывает при записи obj.name = value
    },
};

function ClassName() {
    let self=this
    this.svoistvo=value; 
  
    this.metod=function() { 
    }
  }

let objClass = new ClassName