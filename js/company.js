$(document).ready(function(){  
  
    var visual_area = $(window).height();
    $(".visual_area").css('height', visual_area);

    sectionClick();
    scrollAction ();
  
});

function sectionClick(){

    var company_inner01 = $('.company_inner01').offset().top;
    var company_inner02 = $('.company_inner02').offset().top;
    var company_inner03 = $('.company_inner03').offset().top;
    var company_inner04 = $('.company_inner04').offset().top;
	
    $(".btn_top").click(function(){
		$('html, body').animate({
			scrollTop:0
		},300, 'swing');
    });
    
    $(".section_link01").click(function(){
		$('html, body').animate({
			scrollTop:company_inner04
		},300, 'swing');
	});
	
	$(".section_link02").click(function(){
		$('html, body').animate({
			scrollTop:company_inner03
        },300, 'swing');
	});
	
	$(".section_link03").click(function(){
		$('html, body').animate({
			scrollTop:company_inner02
		},300, 'swing');
    });
    
    $(".section_link04").click(function(){
		$('html, body').animate({
			scrollTop:company_inner01
        },300, 'swing');
    });
    
};

function scrollAction (){

    var company_inner01_H = $('.company_inner01').offset().top;
    var company_inner02_H = $('.company_inner02').offset().top;
    var company_inner03_H = $('.company_inner03').offset().top;
    var company_inner04_H = $('.company_inner04').offset().top;

    $(window).on('scroll', function() {

        var actionScroll = $(this).scrollTop() + 400;
        
        if (company_inner01_H < actionScroll) {
            $('.company_inner01').addClass('active');
            setTimeout(function() { 
                $('.company_inner01 .info').addClass('active'); 
            }, 300);
        };

        if (company_inner02_H < actionScroll) {
            $('.company_inner02').addClass('active');
            setTimeout(function() { 
                $('.company_inner02 .info').addClass('active'); 
            }, 300);
        };

        if (company_inner03_H < actionScroll) {
            $('.company_inner03').addClass('active');
            setTimeout(function() { 
                $('.company_inner03 .info').addClass('active'); 
            }, 300);
        };

        if (company_inner04_H < actionScroll) {
            $('.company_inner04').addClass('active');
            setTimeout(function() { 
                $('.company_inner04 .info').addClass('active'); 
            }, 300);
        };
    });
	//alert(visual_area_H);

    
};