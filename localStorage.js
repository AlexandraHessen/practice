Ваше имя: <input type=text id='IName'><br />
Ваш возраст: <input type=text id='IAge'><br />
<input type=button value='Запомнить меня' onclick='store()'>

<script>

    "use strict";

    var storedName=window.localStorage.getItem('lsName');
    if ( storedName )
        document.getElementById('IName').value=storedName;

    var storedAge=window.localStorage.getItem('lsAge');
    if ( storedAge )
        document.getElementById('IAge').value=storedAge;

    function store() {
        window.localStorage.setItem('lsName',document.getElementById('IName').value);
        window.localStorage.setItem('lsAge',document.getElementById('IAge').value);
    }

</script>