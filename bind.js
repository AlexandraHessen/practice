function ff(a,b) {
    console.log(a+" "+b);
    console.log(this);
    console.log(this.c);
  }
  
  var hh={c:77};
  var ff2=ff.bind(hh);
  // теперь ff2 - это та же ff, только работающая всегда с this=hh
  ff2(5,6);