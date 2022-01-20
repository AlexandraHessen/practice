	
Разработка веб-приложений на JavaScript
Тема K. SPA (Single Page Application). Регулярные выражения. Промисы
K.40b Программное создание URI — правильно
предыдущий слайд   слайд 6 из 51   следующий слайд


Введите поисковую фразу: 
 

Введите поисковую фразу: <input type='text' id='QUERY'>
<input type='button' value='поиск' onclick='doSearch()'>

<script>

    "use strict";

    function doSearch() {
        var queryElem=document.getElementById('QUERY');
        var queryText=queryElem.value;
        var queryURL= 'http://yandex.by/yandsearch?text=' + encodeURIComponent(queryText) ;
        console.log(queryURL);
        var newWindow=window.open(queryURL,'mywindow');
        console.log(newWindow);
    }

</script>