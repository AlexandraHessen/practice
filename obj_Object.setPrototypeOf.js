if (!Object.setPrototypeOf) {
    Object.prototype.setPrototypeOf = function(obj, proto) {
        if(obj.__proto__) {
            obj.__proto__ = proto;
            return obj;
        } else {
            // Если нужно будет определить прототип у Object.create(null) объекта
            var Fn = function() {
                for (var key in obj) { //Если в объект уже были определены некоторые свойства
                    Object.defineProperty(this, key, {
                        value: obj[key],
                    });
                }
            };
            Fn.prototype = proto;
            return new Fn();
        }
    }
}