function resetOnce() {
    // Note that we are setting `SameSite=None;` in this example because the example
    // needs to work cross-origin.
    // It is more common not to set the `SameSite` attribute, which results in the default,
    // and more secure, value of `SameSite=Lax;`
    document.cookie = "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";
  
    const output = document.getElementById('reset-once')
    output.textContent = '> Reset!'
  }
  
  function clearOutputResetOnce() {
    const output = document.getElementById('reset-once')
    output.textContent = ''
  }