function User() {
    alert(new.target);
  }
  
  // без "new":
  User(); // undefined
  
  // с "new":
  new User(); // function User { ... }