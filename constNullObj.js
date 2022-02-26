const a={}

function clear(obj){
    obj.x = 40
    obj = null
    console.log(obj)
}

clear(a)

console.log(a)
