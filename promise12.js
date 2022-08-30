console.log('q');
Promise.reject('a')               
.catch(p => p + 'b')           
.catch(p => p + 'с')
.then(p => p + 'd')                
.finally(p => p + 'e')               
.then(p => console.log(p))    
console.log('f');