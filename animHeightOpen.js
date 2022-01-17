<style>
    div.SText
    {
        width: 150px;
        -webkit-transition-duration: 1s; /* для Android */
        transition-duration: 1s;
        -webkit-transition-timing-function: linear; /* для Android */
        transition-timing-function: linear;
        overflow: hidden;
    }
</style>

<input type=button value='анимация' onclick='anim()'><br /><br />

<div class='SText' style='background-color: #FF8080'>
    однажды в студёную зимнюю пору
</div>
<div class='SText' style='background-color: #8080FF; height: 0' id=IText>
    я из лесу вышел, был сильный мороз; гляжу - поднимается медленно в гору
</div>
<div class='SText' style='background-color: #80FF80'>
    лошадка, везущая хворосту воз
</div>

<script>

    "use strict";

    function anim() {
        var textElem=document.getElementById('IText');
        // сначала померяем целевую высоту
        // чтобы элемент получил нормальный размер, но не был виден на странице
        // и не влиял на положение других элементов - ему надо поставить:
        textElem.style.position='absolute';
        textElem.style.visibility='hidden';
        // заставляем браузер посчитать высоту
        textElem.style.height='auto';
        var targetHeight=textElem.offsetHeight;
        console.log(targetHeight);
        // возвращаем назад все установки
        textElem.style.height='0px';
        textElem.style.position='';
        textElem.style.visibility='';
        // и в следующий Idle запустим анимацию
        setTimeout(function() { textElem.style.height=targetHeight+"px"; }, 0);
    }

</script>