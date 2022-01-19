<input type=button onclick='testLoadData()' value='загрузить JSON'>

<script src='http://fe.it-academy.by/JQ/jquery.js'></script>

<script>

    "use strict";

    function testLoadData() {
        $.ajax("http://fe.it-academy.by/Examples/test.json",
            { type:'GET', dataType:'json', success:dataLoaded, error:errorHandler }
        );
    }

    function dataLoaded(data) {
        console.log('загруженные через AJAX данные:');
        console.log(data);
    }

    function errorHandler(jqXHR,statusStr,errorStr) {
        alert(statusStr+' '+errorStr);
    }

</script>