Object.create
if (!Object.create) {
    Object.create = function (O, Properties) {
        s
        var obj;
        if (typeof O !== 'object' || O === null) {
            throw new TypeError();
        }
        obj = new Object();
        obj.prototype = O;

        if (Properties !== undefined) {
            Object.defineProperties(obj, Properties);
        }
        return obj;
    };
}