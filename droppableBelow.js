// потенциальная цель переноса, над которой мы пролетаем прямо сейчас
let currentDroppable = null;

function onMouseMove(event) {
  moveAt(event.pageX, event.pageY);

  ball.hidden = true;
  let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
  ball.hidden = false;

  // событие mousemove может произойти и когда указатель за пределами окна
  // (мяч перетащили за пределы экрана)

  // если clientX/clientY за пределами окна, elementFromPoint вернёт null
  if (!elemBelow) return;

  // потенциальные цели переноса помечены классом droppable (может быть и другая логика)
  let droppableBelow = elemBelow.closest('.droppable');

  if (currentDroppable != droppableBelow) {
    // мы либо залетаем на цель, либо улетаем из неё
    // внимание: оба значения могут быть null
    //   currentDroppable=null,
    //     если мы были не над droppable до этого события (например, над пустым пространством)
    //   droppableBelow=null,
    //     если мы не над droppable именно сейчас, во время этого события

    if (currentDroppable) {
      // логика обработки процесса "вылета" из droppable (удаляем подсветку)
      leaveDroppable(currentDroppable);
    }
    currentDroppable = droppableBelow;
    if (currentDroppable) {
      // логика обработки процесса, когда мы "влетаем" в элемент droppable
      enterDroppable(currentDroppable);
    }
  }
}