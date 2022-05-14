$(document).on('click', '[data-toggle="modal"]', function () {
    var target = $(this).attr('data-target');
    $(target).addClass('show');
    return false;
  });
  $('.modal .close').on('click', function () {
    $(this).closest('.modal').removeClass('show');
    return false;
  });