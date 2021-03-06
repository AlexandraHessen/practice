<input type='button' value='Пуск!' onclick='start()'>
<br /><br />
<div style='width: 400px; height: 300px;
    border: solid blue 1px; position: relative'>
    <img src='Examples/ball3.png' id='IBall'
        style='position: absolute'>
</div>

<script>

    "use strict";

    var RAF=
        // находим, какой метод доступен
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        // ни один не доступен
        // будем работать просто по таймеру
        function(callback)
            { window.setTimeout(callback, 1000 / 60); }
        ;

    var ballH={
        posX : 0,
        posY : 0,
        speedX : 1,
        width : 100,
        height: 100,

        update : function() {
            var ballElem=document.getElementById('IBall');
            ballElem.style.left=this.posX+"px";
            ballElem.style.top=this.posY+"px";
        }
    }

    var areaH={
        width : 400,
        height : 300
    }

    function start() {
        // синхрон с внутренней анимацией браузера
        // обычно 60 раз в сек
        RAF(tick);
    }

    function tick() {

        ballH.posX+=ballH.speedX;

        // вылетел ли мяч правее стены?
        if ( ballH.posX+ballH.width>areaH.width ) {
            ballH.speedX=-ballH.speedX;
            ballH.posX=areaH.width-ballH.width;
        }
        // вылетел ли мяч левее стены?
        if ( ballH.posX<0 ) {
            ballH.speedX=-ballH.speedX;
            ballH.posX=0;
        }

        ballH.update();

        RAF(tick);
    }

    ballH.update();

</script>