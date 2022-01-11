function getClassName(obj) {
    if ( obj.constructor && obj.constructor.name )
        return obj.constructor.name;
    var c=Object.prototype.toString.apply(obj);
    return c.substring(8,c.length-1);
}
