var a = {};
var b = new Object();
var c = Object.create(null); //  

Object.create = function (proto) {
        var obj = {};
        obj.__proto__ =
            return obj;
    }
/////////////+++++
    <
    input type = "text" >
    document.querySelectorAll('[type="text"]');
/////////////+++++
var obj = {
    name: 'Ben',
    func: () => {
        console.log(this.name);
    }
}
obj.func(); //'Ben'
var x = obj.func;
x(); //undefined

x.name = 'Jack';
x(); //undefined
