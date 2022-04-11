function SmallUser() {

    this.name = "Вася";
  
    return; // <-- возвращает this
  }
  
  alert( new SmallUser().name );  // Вася