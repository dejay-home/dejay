$(document).ready(function(){  

    sectionClick();
  
});

function sectionClick(){

    var main_visual = $('.main_visual').height()
    var main_inner01 = main_visual + $('.main_inner01').height()
    var main_inner02 = main_inner01 + $('.main_inner02').height()
    //var main_inner03 = main_inner02 + $('.main_inner03').height()
	
    $(".btn_top").click(function(){
		$('html, body').animate({
			scrollTop:0
		},300, 'swing');
    });
    
    $(".section_link01").click(function(){
		$('html, body').animate({
			scrollTop:main_visual
		},300, 'swing');
	});
	
	$(".section_link02").click(function(){
		$('html, body').animate({
			scrollTop:main_inner01
		},300, 'swing');
	});
	
	$(".section_link03").click(function(){
		$('html, body').animate({
			scrollTop:main_inner02
		},300, 'swing');
	});
};