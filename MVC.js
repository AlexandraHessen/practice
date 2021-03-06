<script>

    "use strict";

    // model

    function ManModel() {
        this.posX = 50;
        this.posY = 50;
        this.isRun = false;

        var myView = null;

        this.start=function(view) {
            myView=view;
        }

        this.updateView=function() {
            // при любых изменениях модели попадаем сюда
            // представление может быть любым,
            // лишь бы имело метод update()
            if ( myView )
                myView.update();
        };

        this.shift=function(x,y) {
            this.posX+=(this.isRun?30:5)*x;
            this.posY+=(this.isRun?30:5)*y;
            this.updateView(); // модель при любых изменениях
            // вызывает обновление представления
        };

        this.setRun=function(r) {
            this.isRun=r;
            this.updateView(); // модель при любых изменениях
            // вызывает обновление представления
        }

    };

    // view

    function ManViewWebPage() {
        var myModel = null; // с какой моделью работаем
        var myField = null; // внутри какого элемента DOM наша вёрстка
        var runCheckbox = null; // чекбокс "бег"
        var manDiv = null; // сам человечек

        this.start=function(model,field) {
            myModel=model;
            myField=field;

            // ищем и запоминаем интересные нам элементы DOM
            runCheckbox=myField.querySelector('.SRun');
            manDiv=myField.querySelector('.SMan');
        }

        this.update=function() {
            runCheckbox.checked=myModel.isRun;
            manDiv.style.left=myModel.posX+"px";
            manDiv.style.top=myModel.posY+"px";
        }

    };

    // controller

    function ManControllerButtons() {
        var myModel = null; // с какой моделью работаем
        var myField = null; // внутри какого элемента DOM наша вёрстка
        var runCheckbox = null; // чекбокс "бег"

        this.start=function(model,field) {
            myModel=model;
            myField=field;

            // ищем и запоминаем интересные нам элементы DOM
            // назначаем обработчики событий

            runCheckbox=myField.querySelector('.SRun');
            runCheckbox.addEventListener('change',this.runChanged);

            var buttonUp=myField.querySelector('.SUp');
            buttonUp.addEventListener('click',this.shiftUp);
            var buttonDown=myField.querySelector('.SDown');
            buttonDown.addEventListener('click',this.shiftDown);
            var buttonLeft=myField.querySelector('.SLeft');
            buttonLeft.addEventListener('click',this.shiftLeft);
            var buttonRight=myField.querySelector('.SRight');
            buttonRight.addEventListener('click',this.shiftRight);
        }

        this.shiftLeft=function() {
            myModel.shift(-1,0); // контроллер вызывает только методы модели
        }

        this.shiftRight=function() {
            myModel.shift(1,0); // контроллер вызывает только методы модели
        }

        this.shiftUp=function() {
            myModel.shift(0,-1); // контроллер вызывает только методы модели
        }

        this.shiftDown=function() {
            myModel.shift(0,1); // контроллер вызывает только методы модели
        }

        this.runChanged=function() {
            if ( myModel ) // контроллер вызывает только методы модели
                myModel.setRun(runCheckbox.checked);
        }

    }

</script>

<div id='IManContainer'>
    <table>
    <tr>
        <td></td>
        <td><input type=button class='SUp' value='&uarr;'></td>
        <td></td>
    </tr>
    <tr>
        <td><input type=button class='SLeft' value='&larr;'></td>
        <td></td>
        <td><input type=button class='SRight' value='&rarr;'></td>
    </tr>
    <tr>
        <td></td>
        <td><input type=button class='SDown' value='&darr;'></td>
        <td></td>
    </tr>
    </table>
    <br />
    Бег: <input type='checkbox' class='SRun'>
    <br /><br />
    <div style='position: relative; width: 300px; height: 300px;
        border: solid red 1px'>
        <div class='SMan' style='position: absolute; width: 10px; height: 10px;
            background-color: green'></div>
    </div>
</div>

<script>

    // настройка, инициализация

    // создаём все три компонента
    var man=new ManModel();
    var view=new ManViewWebPage();
    var controller=new ManControllerButtons();

    // увязываем компоненты друг с другом
    // указываем компонентам, в каком DOM им работать
    var containerElem=document.getElementById('IManContainer');
    man.start(view);
    view.start(man,containerElem);
    controller.start(man,containerElem);

    // инициируем первичное отображение Model во View
    man.updateView();

</script>