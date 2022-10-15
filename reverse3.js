const str = `abc12aa3b9c8`
let arr = str.split("").reverse(); 

let counter = 0;
let newStr = []

arr.forEach(e => {  
  if (isNaN(e)) {       
    newStr.push(e)
  } else {    
    newStr.push(counter < 2 ? '-' : e)         
    counter++;
  }
})


console.log('res',newStr.reverse().join(""))