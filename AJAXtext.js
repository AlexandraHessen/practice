<input type=button onclick='testLoadData()' value='загрузить текст'>

<script src='http://fe.it-academy.by/JQ/jquery.js'></script>

<script>

    "use strict";

    function testLoadData() {
        $.ajax("http://fe.it-academy.by/Examples/test.txt",
            { type:'GET', dataType:'text', success:dataLoaded, error:errorHandler }
        );
    }

    function dataLoaded(data) {
        console.log('загруженные через AJAX данные:');
        console.log(data);

        alert(data);
    }

    function errorHandler(jqXHR,statusStr,errorStr) {
        alert(statusStr+' '+errorStr);
    }

</script>