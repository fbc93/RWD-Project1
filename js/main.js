$(function(){

//Banner 
$('.jarallax').jarallax({
    speed: 0.2
});


//Sticky 메뉴 
var naviPos = $('#navi').offset().top;
  // console.log(naviPos);

  // 상단 네비게이션 설정
  $(window).scroll(function(){

    var scrollPos = $(window).scrollTop();

    if(scrollPos > naviPos){
      $('#navi').addClass('fixed');
    }else{
      $('#navi').removeClass('fixed');
    }

  });
  
  
  // 상단 네비게이션 부드러운 이동 설정
  var menuItem = $('.gnb li a, h1 a'); //+로고 누르면 인트로

  menuItem.click(function(e){
    var el = $(this).attr('href');
    // console.log(el);
    var elWrap = $(el);

    scrollMove(elWrap, 94);
    e.preventDefault();
  });

  // 부드러운 움직임 동작 함수
  function scrollMove(elWrap, navHeight){
    var offset = elWrap.offset().top;
    var totalPos = offset - navHeight;

    $('html, body').animate({scrollTop: totalPos}, 800);
  }


  //Mobile Button Settings
  $('#mobile_btn').click(function(e){

    $('.gnb').toggleClass('act');
    e.preventDefault();
  });


  //클릭후 Gnb에서 벗어나면 메뉴 접히기
  $('.gnb').mouseleave(function(){
      $(this).removeClass('act');
  });

});