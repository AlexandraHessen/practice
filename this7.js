var obj = {
	name: 'Ben',
	func:  () =>  {
		console.log(this.name);
	}
}
obj.func();
var x = obj.func;
x();

x.name = 'Jack';
x();