function debounce(func, wait) {
    // your code here
    let timeoutId = null;
    let lastArguments = null;
    let lastThis = null;
  
    return (...args) => {
      lastArguments = args;
      lastThis = this;
  
      const fnCall = () => {
        func.apply(lastThis, lastArguments);
  
        lastArguments = null;
        lastThis = null;
      }
  
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(fnCall, wait);
    }
  }