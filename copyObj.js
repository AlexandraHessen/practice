let user = {
    name: "Иван",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  alert( user.sizes === clone.sizes ); // true, один и тот же объект
  
  // user и clone обращаются к одному sizes
  user.sizes.width++;       // меняем свойство в одном объекте
  alert(clone.sizes.width); // 51, видим результат в другом объекте