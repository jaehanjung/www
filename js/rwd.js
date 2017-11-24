$(document).ready(function() {
  var container = $('.menubar-container');
  var btn = $('.btn-menubar');
  var menubar = $('.menubar, .btn-menubar');
  var menu = $('.main-menu');
  var last = $('.main-menu li:last-child li:last-child a');
  // 메뉴 활성화
  menubar.click(function() {
    container.toggleClass('menubar-act');
    menu.toggleClass('menu-act');
    if (container.hasClass('menubar-act')) {
      btn.text('닫기');
    } else {
      btn.text('열기');
    }
  });
  last.focusout(function() {
    container.removeClass('menubar-act');
    menu.removeClass('menu-act');

  });

});