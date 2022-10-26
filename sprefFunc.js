function applyAndNew(constructor, args) {
    function partial () {
       return constructor.apply(this, args);
    };
    if (typeof constructor.prototype === "object") {
       partial.prototype = Object.create(constructor.prototype);
    }
    return partial;
 }
 
 
 function myConstructor () {
    console.log("arguments.length: " + arguments.length);
    console.log(arguments);
    this.prop1="val1";
    this.prop2="val2";
 };
 
 var myArguments = ["hi", "how", "are", "you", "mr", null];
 var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);
 
 console.log(new myConstructorWithArguments);
 // (internal log of myConstructor):           arguments.length: 6
 // (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
 // (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}