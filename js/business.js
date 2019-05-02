$(document).ready(function(){  
  
    var visual_area = $(window).height();
    $(".visual_area").css('height', visual_area);

    sectionClick();
    scrollAction ();
  
});

function sectionClick(){

    var business_inner01 = $('.business_inner01').offset().top;
    var business_inner02 = $('.business_inner02').offset().top;
    var business_inner03 = $('.business_inner03').offset().top;
    var business_inner04 = $('.business_inner04').offset().top;
	
    $(".btn_top").click(function(){
		$('html, body').animate({
			scrollTop:0
		},300, 'swing');
    });
    
    $(".section_link01").click(function(){
		$('html, body').animate({
			scrollTop:business_inner04
		},300, 'swing');
	});
	
	$(".section_link02").click(function(){
		$('html, body').animate({
			scrollTop:business_inner03
        },300, 'swing');
	});
	
	$(".section_link03").click(function(){
		$('html, body').animate({
			scrollTop:business_inner02
		},300, 'swing');
    });
    
    $(".section_link04").click(function(){
		$('html, body').animate({
			scrollTop:business_inner01
        },300, 'swing');
    });
    
};

function scrollAction (){

    var business_inner01_H = $('.business_inner01').offset().top;
    var business_inner02_H = $('.business_inner02').offset().top;
    var business_inner03_H = $('.business_inner03').offset().top;
    var business_inner04_H = $('.business_inner04').offset().top;

    $(window).on('scroll', function() {

        var actionScroll = $(this).scrollTop() + 400;
        
        if (business_inner01_H < actionScroll) {
            $('.business_inner01').addClass('active');
            setTimeout(function() { 
                $('.business_inner01 .info').addClass('active'); 
            }, 300);
        }

        if (business_inner02_H < actionScroll) {
            $('.business_inner02').addClass('active');
            setTimeout(function() { 
                $('.business_inner02 .info').addClass('active'); 
            }, 300);
        }

        if (business_inner03_H < actionScroll) {
            $('.business_inner03').addClass('active');
            setTimeout(function() { 
                $('.business_inner03 .info').addClass('active'); 
            }, 300);
        }

        if (business_inner04_H < actionScroll) {
            $('.business_inner04').addClass('active');
            setTimeout(function() { 
                $('.business_inner04 .info').addClass('active'); 
            }, 300);
        }
    });
    
};