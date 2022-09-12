var a = {};
var b = new Object();
var c = Object.create(null);  //  

Object.create = function(proto) {
  var obj = {};
  obj.__proto__ = 
  return obj;
}