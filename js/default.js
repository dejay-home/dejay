$(document).ready(function(){  
  
  var delta = false, // 중복방지용
      thisScroll,
      lastScroll = 0;

  $(window).on('scroll', function() {

    var thisScroll = $(this).scrollTop();
    
    if (thisScroll > 10) {
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

      $('.btn_top').fadeIn()
    };
    if (thisScroll < 10) {
      $('#header').removeClass();

      $('.btn_top').fadeOut()
    };

    // $('.this_scroll').text(thisScroll);
    // $('.last_scroll').text(lastScroll);
  });

});