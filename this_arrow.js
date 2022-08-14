let user = {
    firstName: "Илья",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Илья