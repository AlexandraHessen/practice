<input type=button id=button1 value='кнопка 1'>
<br />
<input type=button id=button2 value='кнопка 2'>
<br />
<input type=button id=button3 value='кнопка 3'>

<script>

    "use strict";

    function createButtonPromise(buttonId,result) {

        return new Promise( (resolve,reject) => {
            var buttonElem=document.getElementById(buttonId);
            buttonElem.addEventListener("click", ()=>{resolve(result)} );
        });

    }

    var bp1=createButtonPromise('button1',111);
    var bp2=createButtonPromise('button2',222);
    var bp3=createButtonPromise('button3',333);

    Promise.race([bp1,bp2,bp3])
    .then( result => {
            console.log("промис решён, результат "+result);
        }
    )
    ;

</script>