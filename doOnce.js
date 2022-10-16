function doOnce() {
    if (!document.cookie.split('; ').find((row) => row.startsWith('doSomethingOnlyOnce'))) {
      // Note that we are setting `SameSite=None;` in this example because the example
      // needs to work cross-origin.
      // It is more common not to set the `SameSite` attribute, which results in the default,
      // and more secure, value of `SameSite=Lax;`
      document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";
  
      const output = document.getElementById('do-once')
      output.textContent = '> Do something here!'
    }
  }
  
  function clearOutputDoOnce() {
    const output = document.getElementById('do-once')
    output.textContent = ''
  }