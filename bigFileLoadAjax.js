<input type=button onclick='testLoadData()' value='загрузить большой JSON'>
<br /><br />
<div id='IProgress' style='border: solid red 1px; width: 200px'>
    <div id='IProgressPerc' style='background-color: red; height: 20px; width: 0%'></div>
</div>

<script src='http://fe.it-academy.by/JQ/jquery.js'></script>

<script>

    "use strict";

    function testLoadData() {
        $.ajax("http://fe.it-academy.by/Examples/net_city/cities.json", {
                type:'GET', dataType:'json', cache:false,
                success:success, complete:complete, error:errorHandler,
                xhrFields: { onprogress: progress }
            }
        );
    }

    function progress(EO) {
        if ( EO.lengthComputable ) {
            var perc=Math.round(EO.loaded/EO.total*100);
            document.getElementById('IProgressPerc').style.width=perc+"%";
        }
    }

    function success(data) {
        console.log('загруженные через AJAX данные:');
        console.log(data);
    }

    function complete() {
        document.getElementById('IProgress').style.display="none";
    }

    function errorHandler(jqXHR,statusStr,errorStr) {
        alert(statusStr+' '+errorStr);
    }

</script>