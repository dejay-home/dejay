$(document).ready(function(){  
    var visual_area = $(window).height();
    $(".visual_area").css('height', visual_area);

    $('.content').tabs({
        active:0,
        activate: function( event, ui ){
            var selectedTab = $(".content").tabs('option', 'active');
            if(selectedTab == 0){
                $('.rnb').fadeIn();
            }
            else if(selectedTab == 1){
                $('.rnb').fadeOut();
            }
        }
    });
    sectionClick();
    scrollAction();
});

function sectionClick(){

    var recruit_nav_H = $('#nav_recruit').offset().top - 96;
    var recruit_inner01 = $('.recruit_inner01').offset().top;
    var recruit_inner02 = $('.recruit_inner02').offset().top;
    var recruit_inner03 = $('.recruit_inner03').offset().top;
    //var recruit_inner04 = $('.recruit_inner04').offset().top;
    
    $(".scroll2 a").click(function(){
		$('html, body').animate({
			scrollTop:recruit_nav_H
		},300, 'swing');
    });

    $(".btn_top").click(function(){
		$('html, body').animate({
			scrollTop:0
		},300, 'swing');
    });
    
    $(".section_link01").click(function(){
		$('html, body').animate({
			scrollTop:recruit_inner04
		},300, 'swing');
	});
	
	$(".section_link02").click(function(){
		$('html, body').animate({
			scrollTop:recruit_inner03
        },300, 'swing');
	});
	
	$(".section_link03").click(function(){
		$('html, body').animate({
			scrollTop:recruit_inner02
		},300, 'swing');
    });
    
    $(".section_link04").click(function(){
		$('html, body').animate({
			scrollTop:recruit_inner01
        },300, 'swing');
    });
    
};

function scrollAction (){
    var recruit_inner01_H = $('.recruit_inner01').offset().top;
    var recruit_inner02_H = $('.recruit_inner02').offset().top;
    var recruit_inner03_H = $('.recruit_inner03').offset().top;
    //var recruit_inner04_H = $('.recruit_inner04').offset().top;

    $(window).on('scroll', function() {

        var actionScroll = $(this).scrollTop() + 200;
        
        if (recruit_inner01_H < actionScroll) {
            $('.recruit_inner01').addClass('scrolled');
        }
        else{
            $('.recruit_inner01').removeClass('scrolled');
        }
        if (recruit_inner02_H < actionScroll) {
            $('.recruit_inner02').addClass('scrolled');
        }
        else{
            $('.recruit_inner02').removeClass('scrolled');
        }
        if (recruit_inner03_H < actionScroll) {
            $('.recruit_inner03').addClass('scrolled');
        }
        else{
            $('.recruit_inner03').removeClass('scrolled');
        }
        // if (recruit_inner04_H < actionScroll) {
        //     $('.recruit_inner04').addClass('scrolled');
        // }
        // else{
        //     $('.recruit_inner04').removeClass('scrolled');
        // }
    });
    
};