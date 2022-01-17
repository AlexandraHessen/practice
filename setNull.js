	
<style>
    div.SBlock
    {
        width: 150px;
        height: 150px;
        background-color: green;
        /* изначально анимация НЕ задана */
    }
</style>

<input type=button value='создать и анимировать цвет' onclick='anim()'><br /><br />

<div id=ICont style='width: 200px; height: 200px; border: solid red 1px'></div>

<script>

    "use strict";

    function anim() {
        var blockElem=document.createElement('div');
        blockElem.className='SBlock'; // зелёный
        blockElem.style.transitionDuration='1s'; // задаём анимацию
        document.getElementById('ICont').appendChild(blockElem);
        // но целевые значения анимации задаём НЕ СРАЗУ:
        setTimeout( function()
        {
            blockElem.style.backgroundColor='yellow'; // до жёлтого
        },0);
    }

</script>