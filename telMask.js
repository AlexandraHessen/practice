
<script src="../num-placeholder/intlTelInput.js"></script>
    <script src="../num-placeholder/utils.js"></script>
    <script defer>
        // Vanilla Javascript
        var input = document.querySelectorAll('input[type="tel"]');
        input.forEach(function(el){
        window.intlTelInput(el, ({
            // options here
            preferredCountries: ["by"],
            nationalMode: false,
            dropdownContainer: document.body,
        }))});
    </script>