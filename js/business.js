$(document).ready(function(){      
    var visual_area = $(window).height();
    $(".visual_area").css('height', visual_area);

    sectionClick();
    scrollAction();

    $('.ml3').each(function(){
		$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
	});
	anime.timeline({loop: false})
	.add({
		targets: '.ml3 .letter',
		opacity: [0,1],
		easing: "easeInOutQuad",
		duration:500,
		delay: function(el, i) {
		return 150 * (i+1)
		}
	}).add({
		targets: '.ml3',
		opacity: 1,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 1000
	});
  
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
    $(".scroll a").click(function(){
		$('html, body').animate({
			scrollTop:business_inner01
		},300, 'swing');
		$(this).css('opacity', '0');
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
            $('.business_inner01').addClass('scrolled');
        }
        else{
            $('.business_inner01').removeClass('scrolled');
        }
        if (business_inner02_H < actionScroll) {
            $('.business_inner02').addClass('scrolled');
        }
        else{
            $('.business_inner02').removeClass('scrolled');
        }
        if (business_inner03_H < actionScroll) {
            $('.business_inner03').addClass('scrolled');
        }
        else{
            $('.business_inner03').removeClass('scrolled');
        }
        if (business_inner04_H < actionScroll) {
            $('.business_inner04').addClass('scrolled');
        }
        else{
            $('.business_inner04').removeClass('scrolled');
        }
    });
    
};