$(document).ready(function(){  

	sectionClick();

	var $grid = $('.grid').isotope({
		itemSelector:'.grid-item',
		layoutMode:'fitRows',
	});
	$('.gridnav li a').click(function(){
		var value = $(this).attr('data-filter');
		$grid.isotope({
			filter:value
		});
		$(this).parent('li').addClass('on').siblings().removeClass('on');
	});

	var imgs;
	var img_count;
	var img_position = 1;

	imgs = $(".grid ul");
	img_count = imgs.children().length;

	$('#back').click(function(){
		back();
	});
	$('#next').click(function(){
		next();
	});
	function back(){
		if ( 1 < img_position ){
			imgs.animate({
				left:'+=465px'
			});
			img_position--;
		}
	};
	
	function next(){
		if ( img_count > img_position ){
			imgs.animate({
				left:'-=465px'
			});
			img_position++;
		}
	};
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

