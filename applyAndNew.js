function applyAndNew(constructor, args) {
    function partial () {
       return constructor.apply(this, args);
    };
    if (typeof constructor.prototype === "object") {
       partial.prototype = Object.create(constructor.prototype);
    }
    return partial;
 }
 