<p>первый абзац</p>
<img id=IPict src='Examples/Hilu200.jpg'>
<p>второй абзац</p>

<input type=button value='сменить картинку 1' onclick="changePicture1()">
<input type=button value='сменить картинку 2' onclick="changePicture2()">

<script>

"use strict";

function changePicture1() {
    var elem=document.getElementById('IPict');
    elem.src='Examples/Peacock3.jpg';
}

function changePicture2() {
    var elem=document.getElementById('IPict');
    elem.setAttribute('src','Examples/pelican2.jpg');
}

</script>