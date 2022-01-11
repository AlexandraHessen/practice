function ff(a,b) {
    console.log(a+" "+b);
    console.log(this);
    console.log(this.c);
  }
  
  ff(3,4); /* обычный вызов - this=window */
  3 4
  [object Window]
  undefined
  
  var hh={c:77};
  ff.call(hh,5,6); /* вызов с this=hh и с аргументами 5 и 6 */
  5 6
  [object Object]
  77
  ff.apply(hh,[5,6]); /* вызов с this=hh и с аргументами 5 и 6 */
  5 6
  [object Object]
  77