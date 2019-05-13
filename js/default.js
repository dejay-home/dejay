function Load() {
	var body = document.getElementsByTagName('body')[0];
	body.className += ' load';
}
setTimeout(function(){
  window.onload = Load();
}, 300);
$(document).ready(function(){
  setTimeout(function(){
    $('.visual_area').addClass('active');
  }, 300);  
  $('#footer').footerReveal();
  var delta = false, // 중복방지용
      thisScroll,
      lastScroll = 0;

  $(window).on('scroll', function() {

    var thisScroll = $(this).scrollTop();
    var Nextpage = $('.next_page').offset().top - 500;

    if (thisScroll > 10) {
      if ($('#header').hasClass('')) {
        $('#header').addClass('scrolling-down');
      }
      if (thisScroll > lastScroll) {
        if (delta) {
          $('#header').removeClass();
          $('#header').addClass('scrolling-down');
          delta = false;
        }
      }else{
        if(delta == false) {
          $('#header').removeClass();
          $('#header').addClass('scrolling-up');
          delta = true;
        }
      }
      lastScroll = $(window).scrollTop();

      $('.btn_top').css({
        'opacity':'1',
        'pointer-events':'auto',
      });
      $('.scroll a, .scroll2 a').css({
        'opacity':'0',
        'pointer-events':'none',
      });
    }
    if (thisScroll < 10) {
      $('#header').removeClass();

      $('.btn_top').css({
        'opacity':'0',
        'pointer-events':'none',
      });
      $('.scroll a, .scroll2 a').css({
        'opacity':'1',
        'pointer-events':'auto',
      });
    };
    if ( thisScroll >= Nextpage ) {
      $('.next_page').addClass('scrolled');
    }
    else{
      $('.next_page').removeClass('scrolled');
    }
    
	$('.this_scroll').text(thisScroll);
	//$('.last_scroll').text(lastScroll);
  });


  subTitleHover();

});


function subTitleHover(){

  var subTitle = $('.section .titlebox2');

  $(subTitle).hover(function() { 
    $(this).addClass('hover'); //hover시 붙이기
  }, function() {
    $(this).removeClass('hover'); //hover시 때기
  });  
};