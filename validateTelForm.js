<form name='FTEL' action='http://fe.it-academy.by/TestForm.php' novalidate>
        Введите телефон:<input type='text' name='PHONE'><br />
        (строго в формате +375-зона-999-99-99, зона может быть 17, 25, 33, 44, 29)<br />
        <input type='submit' value='готово'>
</form>

<script>

    "use strict";

    var formElement=document.forms.FTEL;
    formElement.addEventListener('submit',validateTelForm,false);

    function validateTelForm(EO) {
        EO=EO||window.event;

        try {
            var telRE=/^\+375\-(?:17|25|33|44|29)\-\d{3}\-\d{2}\-\d{2}$/;

            var formElement=document.forms.FTEL;
            var telElement=formElement.elements.PHONE;
            var telValue=telElement.value;

            if ( !telRE.test(telValue) ) {
                alert('Введите пожалуйста телефон строго в указанном формате!');
                telElement.focus();
                EO.preventDefault();
                return;
            }

        }
        catch ( err ) {
            EO.preventDefault();
        }

    }
</script>