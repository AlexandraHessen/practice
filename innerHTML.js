Ваше имя: <input type=text value='Иванов'><br />
Ваше сообщение:<br />
<textarea style='width: 300px; height: 200px'>Однажды в студёную зимнюю пору</textarea>
<div id=IFooter></div>

<input type='button' value='добавить разметку' onclick='addMarkup()'>

<script>

    "use strict";

    function addMarkup() {
        var footerElem=document.getElementById('IFooter');
        footerElem.innerHTML='Ах, как вы хорошо пишете!';
    }

</script>