$(function(){

  var naviPos = $('#header').offset().top;
  // console.log(naviPos);

  // 상단 네비게이션 설정
  $(window).scroll(function(){

    var scrollPos = $(window).scrollTop();

    if(scrollPos > naviPos){
      $('#header').addClass('fixed');
    }else{
      $('#header').removeClass('fixed');
    }

  });
  
  
  // 상단 네비게이션 부드러운 이동 설정
  var menuItem = $('.gnb li a');

  menuItem.click(function(e){
    var el = $(this).attr('href');
    // console.log(el);
    var elWrap = $(el);

    scrollMove(elWrap, 60);
    e.preventDefault();
  });

  // 부드러운 움직임 동작 함수
  function scrollMove(elWrap, navHeight){
    var offset = elWrap.offset().top;
    var totalPos = offset - navHeight;

    $('html, body').animate({scrollTop: totalPos}, 800);
  }

});