function isVeryEvenNumber(n) {
    let str = n.toString()
    while(str.length!==1){
      str=str.split``.reduce((a,b)=>a+b*1,0).toString()
    }
    return str*1%2===0
  }