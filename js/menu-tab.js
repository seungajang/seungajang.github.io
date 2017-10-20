$(document).ready(function() {
  var menu = $('.main-menu > li');
  var subMenu = $('.sub-menu');
  var img = $('.main-menu img');


  menu.hover(function() {
    $(this).find(subMenu).toggleClass('sub-menu-act');

  });
  menu.focusin(function() {
    $(this).siblings().find(subMenu).removeClass('sub-menu-act');
    $(this).find(subMenu).addClass('sub-menu-act');
  });

  menu.mouseover(function() {
      var src = $(this).find(img).attr('src').match(/[^＼.]+/) + '_ov.gif';
      $(this).find(img).attr('src', src);
    })
    .mouseout(function() {
      var src = $(this).find(img).attr('src').replace('_ov.gif', '.gif');
      $(this).find(img).attr('src', src);
    });

  menu.focusin(function() {
      var src = $(this).find(img).attr('src').match(/[^＼.]+/) + '_ov.gif';
      $(this).find(img).attr('src', src);
    })
    .focusout(function() {
      var src = $(this).find(img).attr('src').replace('_ov.gif', '.gif');
      $(this).find(img).attr('src', src);
    })
    // 텝 콘텐츠
  var tab = $('.board-list [role="tab"]');
  var tabImg = $('.board-list img');

  $(tab).click(function() {
    var selectedId = "#" + $(this).attr('aria-controls');
    $(selectedId).removeClass('unvisual').siblings().addClass('unvisual');



    $(tab).click(function() {
      $(tabImg).each(function() {
        if ($(this).hasClass('img-act')) {
          this.src = this.src.replace('_on', '_off');
        } else {
          this.src = this.src.replace('_off', '_on');
        }
        $(this).toggleClass('img-act');
      });
    });
    // $(tab).focusin(function() {
    //   $(tabImg).each(function() {
    //     if ($(this).hasClass('img-act')) {
    //       this.src = this.src.replace('_on', '_off');
    //     } else {
    //       this.src = this.src.replace('_off', '_on');
    //     }
    //   });
    //   $(this).siblings().find(tabImg).removeClass('img-act');
    //   $(this).find(tabImg).addClass('img-act');
    // });
  });
});