var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];

console.log('myFish до: ' + myFish);
//myFish до: ангел,клоун,мандарин,хирург

var shifted = myFish.shift();

console.log('myFish после: ' + myFish);
//myFish после: клоун,мандарин,хирург

console.log('Удалён этот элемент: ' + shifted);
//Удалён этот элемент: ангел