$(document).ready(function(){  
	AOS.init();
	sectionClick();

	$('#counter1').counterUp({
		delay:100,
		time:1000,
	});
	$('#counter2').counterUp({
		delay:100,
		time:1000,
	});
	$('#counter3').counterUp({
		delay:100,
		time:1000,
	});
	$('#counter4').counterUp({
		delay:30,
		time:1000,
	});
	$(window).on('scroll', function() {
		
		var BodyTop = $(this).scrollTop();
		var section1 = $('#whattodo').offset().top - 200;
		var section2 = $('#whatweus').offset().top - 200;
		var section3 = $('#portfolio').offset().top;
		var sortbox = $('.main_inner01 .mauto').offset().top;

		if ( BodyTop >= sortbox ) {
			$('.sortbox').addClass('scrolled');
		}
		else{
			$('.sortbox').removeClass('scrolled');
		}
		if ( BodyTop >= section1 ) {
			$('#whattodo').addClass('scrolled');
		}
		else {
			$('#whattodo').removeClass('scrolled');
		}
		if ( BodyTop >= section2 ) {
			$('#whatweus').addClass('scrolled');
			
		}
		else {
			$('#whatweus').removeClass('scrolled');
		}
		if ( BodyTop >= section3 ) {
			$('#portfolio').addClass('scrolled');
		}
		else {
			$('#portfolio').removeClass('scrolled');
		}
	});

	$('div[data-type="background"]').each(function(){
		var $bgobj = $(this);
		var $window = $(window);
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed')) + 380;
			var coords = '50% '+ yPos + 'px';
			$bgobj.css({ backgroundPosition: coords });
		});
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