$(document).ready(function(){  

	sectionClick();

	
	
	$(window).on('scroll', function() {
		var sortbox = $('.main_inner01 .mauto').offset().top;
		var BodyTop = $(this).scrollTop();

		console.log(sortbox);
		console.log(BodyTop);
		if ( BodyTop >= sortbox ) {
			$('.sortbox').addClass('scrolled');
		}
		else{
			$('.sortbox').removeClass('scrolled');
		}
	});
});



function sectionClick(){

	var main_inner01 = $('.main_inner01').offset().top;
	var main_inner02 = $('.main_inner02').offset().top;
	var main_inner03 = $('.main_inner03').offset().top;

	$(".btn_top").click(function(){
		$('html, body').animate({
			scrollTop:0
		},300, 'swing');
		$('.scroll a').css('opacity', '1');
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
	
	$(".section_link03, .scroll a").click(function(){
		$('html, body').animate({
			scrollTop:main_inner01
		},300, 'swing');
	});
	$(".scroll a").click(function(){
		$('html, body').animate({
			scrollTop:main_inner01
		},300, 'swing');
		$(this).css('opacity', '0');
	});
};
