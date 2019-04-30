$(document).ready(function(){  
  
    var visual_area = $(window).height();
    $(".visual_area").css('height', visual_area);

    $('.company_inner04').text(company_inner04);

    sectionClick();
  
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