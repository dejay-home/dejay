$(document).ready(function(){  
    // var visual_area = $(window).height();
    // $(".visual_area").css('height', visual_area);

    sectionClick();
    scrollAction();
});

function sectionClick(){
    $(".btn_top").click(function(){
		$('html, body').animate({
			scrollTop:0
		},300, 'swing');
    });
};

function scrollAction(){
  
  $(window).on('scroll', function(){
    var mapArea = $('.map');
    var actionScroll = $(this).scrollTop();
    console.log(actionScroll);
    if ( actionScroll > 200 ) {
      $(mapArea).css({
        'position':'absolute'
      });
    }
    else{
      $(mapArea).css({
        'position':'fixed'
      });
    }
  });
};