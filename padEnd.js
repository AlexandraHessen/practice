// ... line 13
if (!String.prototype.padEnd) {
    console.log("padEnd is not supported. Using polyfill.");
  
    String.prototype.padEnd = function padEnd(targetLength, padString) {
      targetLength =
        typeof targetLength !== "number" || targetLength < 0 ? 0 : targetLength;
      padString = String(padString || " ");
  
      if (this.length > targetLength) return String(this);
  
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length);
      }
  
      return String(this) + padString.slice(0, targetLength);
    };
  }
  // ... line 32