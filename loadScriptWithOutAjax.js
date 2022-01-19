<input type=button value='тест!' onclick='testLoadJS()'>

<script>

    "use strict";

    function loadScriptAsync(url) {
        var s=document.createElement("script");
        s.src=url;
        document.getElementsByTagName("head")[0].appendChild(s);
    }

    function testLoadJS() {
        console.log('до вызова функции загрузки');
        loadScriptAsync("Examples/script5.js");
        console.log('после вызова функции загрузки');
    }

</script>