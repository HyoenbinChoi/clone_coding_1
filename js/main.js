var mainButtons = document.querySelectorAll('.headerIndex1');
var articles = document.querySelectorAll('.articleListIndex');

mainButtons.forEach(function (button, buttonIndex) {
  button.addEventListener('click', function () {
    mainButtons.forEach(function (btn) {
      btn.style.cssText = 'color: #78787c; font-weight: normal;';
    });
    this.style.cssText = 'color: #0055bc; font-weight: 800;';
    articles.forEach(function (article) {
      article.style.display = 'none';
    });
    if (buttonIndex < articles.length) {
      articles[buttonIndex].style.display = 'block';
    } else {
      console.error('button index exceeds article list size')
    }
  });
});

var mainMenus = document.querySelectorAll('.headerNavList');
var subMenus = document.querySelectorAll('.listInner');
var mainLists = document.querySelectorAll('.listInner>ul>li');
var subLists = document.querySelectorAll('.listInnerInner>ul>li');
var arrows = document.querySelectorAll('.arrow');
var doubleLists = [];

mainLists.forEach(function (double) {
  if (double.querySelector('.listInnerInner')) {
    doubleLists.push(double);
  };
});

mainMenus.forEach(function (menu, menuIndex) {
  menu.addEventListener('mouseover', function () {
    subMenus.forEach(function (sub, subIndex) {
      sub.style.cssText = 'display: none;';
      if (subIndex < mainMenus.length) {
        subMenus[menuIndex].style.cssText = 'display: block;';
      };
    });
    menu.addEventListener('mouseleave', function () {
      subMenus[menuIndex].addEventListener('mouseenter', function () {
        subMenus[menuIndex].style.display = 'block';
      });
      subMenus[menuIndex].addEventListener('mouseleave', function () {
        subMenus[menuIndex].style.display = 'none';
      });
    });
  });
});

mainLists.forEach(function (list) {
  list.addEventListener('mouseover', function () {
    list.style.cssText = 'color: white;';
  });
  list.addEventListener('mouseleave', function () {
    list.style.cssText = 'color: #434345;';
  });
});

doubleLists.forEach(function (colorChange) {
  colorChange.addEventListener('mouseover', function () {
    var arrow = colorChange.querySelector('.arrow');
    if (arrow) {
      arrow.style.cssText = 'border-top: 2px solid #fff; border-right: 2px solid #fff;';
    }
  });
  colorChange.addEventListener('mouseleave', function () {
    var arrow = colorChange.querySelector('.arrow');
    if (arrow) {
      arrow.style.cssText = 'border-top: 2px solid #434345; border-right: 2px solid #434345;';
    }
  })
});

subLists.forEach(function (list) {
  list.addEventListener('mouseover', function () {
    list.style.cssText = 'color: white;';
  });
  list.addEventListener('mouseleave', function () {
    list.style.cssText = 'color: #434345;';
  });
});


