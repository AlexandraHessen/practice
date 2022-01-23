unction test() {

    "use strict";

    var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";

    // отдельно создаём набор POST-параметров запроса
    let sp = new URLSearchParams();
    sp.append('f', 'READ');
    sp.append('n', 'LOKTEV_TEST_INFO');

    fetch(ajaxHandlerScript, { method: 'post', body: sp })
        .then( response => response.json() )
        .then( data => { console.log(data); } )
        .catch( error => { console.error(error); } );

}