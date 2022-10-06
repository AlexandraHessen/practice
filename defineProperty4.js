function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  
    // age будет высчитывать возраст по birthday
    Object.defineProperty(this, "age", {
      get: function() {
        var today = new Date();
        var yearDelta = today.getFullYear() - this.birthday.getFullYear();
  
        if (today.getMonth() > this.birthday.getMonth() ||
          (today.getMonth() === this.birthday.getMonth() && today.getDate() >= this.birthday.getDate())) {
          return yearDelta;
        }
  
        return yearDelta - 1;
      }
    });
  }
  
  var pete = new User("Петя", new Date(1987, 6, 1));
  
  alert( pete.birthday ); // и дата рождения доступна
  alert( pete.age );      // и возраст