<div id='RED' style='position: absolute; left: 100px; top: 200px;
    width: 100px; height: 100px; background-color: red'></div>
<div id='GREEN' style='position: absolute; left: 30px; top: 200px;
    width: 30px; height: 30px; background-color: green'></div>

<input type='button' value='слева' onclick='toLeft()'>
<input type='button' value='справа' onclick='toRight()'>
<input type='button' value='сверху' onclick='toTop()'>
<input type='button' value='снизу' onclick='toBottom()'>

<script>

    "use strict";

    function toLeft( ) {
        var green=document.getElementById('GREEN');
        var red=document.getElementById('RED');
        green.style.left=(red.offsetLeft-green.offsetWidth)+'px';
        green.style.top=(red.offsetTop+red.offsetHeight/2-green.offsetHeight/2)+'px';
    }

    function toRight( ) {
        var green=document.getElementById('GREEN');
        var red=document.getElementById('RED');
        green.style.left=(red.offsetLeft+red.offsetWidth)+'px';
        green.style.top=(red.offsetTop+red.offsetHeight/2-green.offsetHeight/2)+'px';
    }

    function toTop( ) {
        var green=document.getElementById('GREEN');
        var red=document.getElementById('RED');
        green.style.top=(red.offsetTop-green.offsetHeight)+'px';
        green.style.left=(red.offsetLeft+red.offsetWidth/2-green.offsetWidth/2)+'px';
    }

    function toBottom( ) {
        var green=document.getElementById('GREEN');
        var red=document.getElementById('RED');
        green.style.top=(red.offsetTop+red.offsetHeight)+'px';
        green.style.left=(red.offsetLeft+red.offsetWidth/2-green.offsetWidth/2)+'px';
    }