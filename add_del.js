<div id='Block'>
<p>Моллюски &mdash; главным образом свободноживущие организмы, однако есть некоторое количество паразитических форм.</p>
<p>Моллюски очень разнообразны не только по размеру, но и анатомическому строению и поведению.</p>
<p>Головоногие моллюски, такие как <b>кальмары</b>, <b>каракатицы</b> и <b>осьминоги</b>, занимают одно из первых мест среди беспозвоночных по степени развития нервной системы.</p>
</div>

<input type='button' onclick='insertText()'
    value='вставка нового текстового элемента'>
<input type='button' onclick='insertTag()'
    value='вставка нового элемента-тега'>
<input type='button' onclick='removeFirst()'
    value='удалить первый элемент в блоке'>
<input type='button' onclick='removeLast()'
    value='удалить последний элемент в блоке'>

<script>

    "use strict";

    function insertText() {
        var blockElement=document.getElementById('Block');
        var newTextElement=document.createTextNode('новый текст');
        blockElement.appendChild(newTextElement);
    }

    function insertTag() {
        var blockElement=document.getElementById('Block');
        var newTagElement=document.createElement('p');
        var newTextElement=document.createTextNode('новый абзац');
        newTagElement.appendChild(newTextElement);
        blockElement.appendChild(newTagElement);
    }

    function removeFirst() {
        var blockElement=document.getElementById('Block');
        var deletingElement=blockElement.firstChild;
        blockElement.removeChild(deletingElement);
    }

    function removeLast() {
        var blockElement=document.getElementById('Block');
        var deletingElement=blockElement.lastChild;
        blockElement.removeChild(deletingElement);
    }

</script>