function showScreenSize() {
    document.getElementById('size').innerHTML=`
      экран:<br>
      innerWidth=${window.innerWidth}<br>
      innerHeight=${window.innerHeight}<br>
    `;
  }

  window.onresize=showScreenSize;

  showScreenSize();