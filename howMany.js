function howMany(selectObject) {
    var numberSelected = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function(){
    alert('Выбрано элементов: ' + howMany(document.selectForm.musicTypes))
  });