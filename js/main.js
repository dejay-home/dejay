$(document).ready(function(){  

    sectionClick();
  
});

function sectionClick(){

    var main_inner01 = $('.main_inner01').offset().top;
    var main_inner02 = $('.main_inner02').offset().top;
    var main_inner03 = $('.main_inner03').offset().top;
	
    $(".btn_top").click(function(){
		$('html, body').animate({
			scrollTop:0
		},300, 'swing');
    });
    
    $(".section_link01").click(function(){
		$('html, body').animate({
			scrollTop:main_inner03
		},300, 'swing');
	});
	
	$(".section_link02").click(function(){
		$('html, body').animate({
			scrollTop:main_inner02
		},300, 'swing');
	});
	
	$(".section_link03").click(function(){
		$('html, body').animate({
			scrollTop:main_inner01
		},300, 'swing');
	});
};