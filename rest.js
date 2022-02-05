function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10
  

  function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("один", "два", "три", "четыре", "пять", "шесть");
  
  // Console Output:
  // a, один
  // b, два
  // manyMoreArgs, [три, четыре, пять, шесть]

  function func(a, b, ...rest) {

  }