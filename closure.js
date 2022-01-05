var ffref=null;

function f() {
  var a=5;

  function ff() {
    console.log('замкнутая переменная a='+a);
  }

  ffref=ff; // сохраняем глобальную ссылку на функцию ff
}

f();

ffref();


let fancRef;

function funcGlob(){
  let variable=10;
  function funcDel(){
    console.log(variable)
  }
  funcDel()
  fancRef=funcDel
}

funcGlob()

fancRef()


let a=[1, 2, 3]
let b=a.slice()
console.log(a==b)
console.log(a===b)
console.log(a)
console.log(b)
console.log([]==[])
console.log({}=={})
console.log([]===[])
console.log({}==={})