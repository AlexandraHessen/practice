var obj ={
    a: () =>{
        console.log(this)
        console.log(this.prop);
    },
    prop: 1
}

obj.a();
var fn = obj.a.bind(obj)
fn()
console.log(obj.prop)
cl