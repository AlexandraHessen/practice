"use strict";

var ajaxHandlerScript="http://fe.it-academy.by/TestAjax3.php";

function getIP() {

    var domain1=document.getElementById('DomName1').value;
    var domain2=document.getElementById('DomName2').value;
    var domain3=document.getElementById('DomName3').value;

    var promise1=fetch(ajaxHandlerScript+"?func=GET_DOMAIN_IP&domain="+domain1,{method: 'get'}).then( response => response.text() );
    var promise2=fetch(ajaxHandlerScript+"?func=GET_DOMAIN_IP&domain="+domain2,{method: 'get'}).then( response => response.text() );
    var promise3=fetch(ajaxHandlerScript+"?func=GET_DOMAIN_IP&domain="+domain3,{method: 'get'}).then( response => response.text() );

    Promise.all([promise1,promise2,promise3])
        .then( results => { alert(results.join("\n")); } )
        .catch( error => { alert('ошибка!\n'+error); } )
        ;
    
}