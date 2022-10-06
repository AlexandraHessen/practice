var user = {
    name: "Вася",
    toString: function() { return this.name; }
  };
  
  // помечаем toString как не подлежащий перебору в for..in
  Object.defineProperty(user, "toString", {enumerable: false});
  
  for(var key in user) alert(key);  // name