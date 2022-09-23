function throttle(func, wait) {
    // your code here
    let timeoutId = null;
    let lastArguments = null;
    let lastThis = null;
   
    return (...args) => {
      if (timeoutId) {
        lastArguments = args;
        lastThis = this;
      } else {
        func.apply(this, args);
   
        timeoutId = setTimeout(() => {
          if (lastArguments) {
            func.apply(lastThis, lastArguments);
   
            timeoutId = null;
            lastArguments = null;
            lastThis = null;
          }
        }, wait);
      }
    };
   }