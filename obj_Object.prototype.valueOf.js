myNumberType.prototype.valueOf = function() { return customPrimitiveValue; };
myNumber.valueOf()
var o = new Object();
myVar = o.valueOf();      // [object Object]