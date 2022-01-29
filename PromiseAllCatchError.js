<input type=button id=button1Y value='кнопка 1 успех'>
<input type=button id=button1N value='кнопка 1 ошибка'>
<br /><br />
<input type=button id=button2Y value='кнопка 2 успех'>
<input type=button id=button2N value='кнопка 2 ошибка'>
<br /><br />
<input type=button id=button3Y value='кнопка 3 успех'>
<input type=button id=button3N value='кнопка 3 ошибка'>

<script>

    "use strict";

    function createButtonPromise(buttonYId,buttonNId,result) {

        return new Promise( (resolve,reject) => {
            var buttonYElem=document.getElementById(buttonYId);
            buttonYElem.addEventListener("click", ()=>{resolve(result)} );
            var buttonNElem=document.getElementById(buttonNId);
            buttonNElem.addEventListener("click", ()=>{reject("ошибка!!!")} );
        });

    }

    var bp1=createButtonPromise('button1Y','button1N',111);
    var bp2=createButtonPromise('button2Y','button2N',222);
    var bp3=createButtonPromise('button3Y','button3N',333);

    Promise.all([bp1,bp2,bp3])
    .then( result => {
            console.log("промис решён с результатом "+result);
        }
    )
    .catch( error => {
            console.log("промис отклонён с ошибкой "+error);
        }
    )
    ;

</script>