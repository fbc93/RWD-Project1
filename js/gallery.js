$(function(){

$(window).load(function(){

  $('.grid').isotope({
     itemSElector: '.grid-item',
     layoutMode: 'fitRows',
     fitRows: { gutter: 30 }
   });

   var grid = $('.grid');

  //초기설정
   $('.grid').isotope({
     itemSElector: '.grid-item',
     layoutMode: 'fitRows',
     fitRows: { gutter: 30 }
   });

   $('.grid-item a').lightBox({
    overlayBgColor: '#000',
    overlayOpacity: 0.5,
    imageLoading: '../images/lightbox-ico-loading.gif',
    imageBtnClose: '../images/lightbox-btn-close.gif',
    imageBtnPrev: '../images/lightbox-btn-prev.gif',
    imageBtnNext: '../images/lightbox-btn-next.gif',
    
   });




   //필터링 버튼 설정
   $('#m1').click(function(e){
    grid.isotope({
        filter: '.grid-item'
      });

      $('.grid-item a').lightBox({
    overlayBgColor: '#000',
    overlayOpacity: 0.5,
    imageLoading: '../images/lightbox-ico-loading.gif',
    imageBtnClose: '../images/lightbox-btn-close.gif',
    imageBtnPrev: '../images/lightbox-btn-prev.gif',
    imageBtnNext: '../images/lightbox-btn-next.gif',
    
   });


      e.preventDefault();
   });

   $('#m2').click(function(e){
    grid.isotope({
        filter: '.brand'
      });

      $('.brand a').lightBox({
    overlayBgColor: '#000',
    overlayOpacity: 0.5,
    imageLoading: '../images/lightbox-ico-loading.gif',
    imageBtnClose: '../images/lightbox-btn-close.gif',
    imageBtnPrev: '../images/lightbox-btn-prev.gif',
    imageBtnNext: '../images/lightbox-btn-next.gif',
    
   });

      e.preventDefault();
   });

   $('#m3').click(function(e){
    grid.isotope({
        filter: '.web'
      });

      $('.web a').lightBox({
    overlayBgColor: '#000',
    overlayOpacity: 0.5,
    imageLoading: '../images/lightbox-ico-loading.gif',
    imageBtnClose: '../images/lightbox-btn-close.gif',
    imageBtnPrev: '../images/lightbox-btn-prev.gif',
    imageBtnNext: '../images/lightbox-btn-next.gif',
    
   });

      e.preventDefault();
   });

   $('#m4').click(function(e){
    grid.isotope({
        filter: '.print'
      });

      $('.print a').lightBox({
    overlayBgColor: '#000',
    overlayOpacity: 0.5,
    imageLoading: '../images/lightbox-ico-loading.gif',
    imageBtnClose: '../images/lightbox-btn-close.gif',
    imageBtnPrev: '../images/lightbox-btn-prev.gif',
    imageBtnNext: '../images/lightbox-btn-next.gif',
    
   });

      e.preventDefault();
   });

   $('#m5').click(function(e){
    grid.isotope({
        filter: '.photo'
      });

      $('.photo a').lightBox({
    overlayBgColor: '#000',
    overlayOpacity: 0.5,
    imageLoading: '../images/lightbox-ico-loading.gif',
    imageBtnClose: '../images/lightbox-btn-close.gif',
    imageBtnPrev: '../images/lightbox-btn-prev.gif',
    imageBtnNext: '../images/lightbox-btn-next.gif',
    
   });
      e.preventDefault();
   });



}); //윈도우 끝

//필터링 버튼 설정
$('#m1').click(function(){

});


});