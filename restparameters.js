// In functions parameters, creates an array of remaining arguments
function classes(...args) { return args.join(' ') }
// In function arguments, expands array to actual parameters
console.log(...args)
// Similar to Function.prototype.apply, but doesn't modify this
