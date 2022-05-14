(function () {
    var elemTarget;
    var modal = $modal({
      title: 'Текст заголовка',
      content: '<p>Содержмиое модального окна...</p>',
      footerButtons: [
        { class: 'btn btn-2', text: 'ОК', handler: 'modalHandlerOk' },
        { class: 'btn btn-1', text: 'Отмена', handler: 'modalHandlerCancel' }
      ]
    });
    document.addEventListener('show.modal', function (e) {
      document.querySelector('.actions').textContent = 'Действия при открытии модального окна...';
      // получить ссылку на DOM-элемент показываемого модального окна (.modal)
      console.log(e.detail);
    });
    document.addEventListener('hide.modal', function (e) {
      document.querySelector('.actions').textContent = 'Действия при закрытии модального окна...';
      // получить ссылку на DOM-элемент скрываемого модального окна (.modal)
      console.log(e.detail);
    });
    document.addEventListener('click', function (e) {
      if (e.target.dataset.toggle === 'modal') {
        elemTarget = e.target;
        modal.show();
        modal.setContent('Вы открыли модальное окно посредством нажатия на кнопку <b>' + e.target.textContent + '</b>');
      } else if (e.target.dataset.handler === 'modalHandlerCancel') {
        modal.hide();
        document.querySelector('.message').textContent = 'Вы нажали на кнопку Отмена, а открыли окно с помощью кнопки ' + elemTarget.textContent;
      } else if (e.target.dataset.handler === 'modalHandlerOk') {
        modal.hide();
        document.querySelector('.message').textContent = 'Вы нажали на кнопку ОК, а открыли окно с помощью кнопки ' + elemTarget.textContent;
      } else if (e.target.dataset.dismiss === 'modal') {
        document.querySelector('.message').textContent = 'Вы закрыли модальное окно нажав на крестик или на область вне модального окна, а открыли окно с помощью кнопки ' + elemTarget.textContent;
      }
    });
  })();