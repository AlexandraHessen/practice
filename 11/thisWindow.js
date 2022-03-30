var obj ={
    a: () =>{
        console.log(this) // this=window
        console.log(this.prop);
    },
    prop: 1
}

obj.a();
var fn = obj.a.bind(obj)
fn()
console.log(obj.prop)
