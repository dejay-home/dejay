$(document).ready(function(){  
    AOS.init({
        duration:900,
    });
    var visual_area = $(window).height();
    $(".visual_area").css('height', visual_area);
    $('.content').tabs({
        active:0,
        activate: function( event, ui ){
            var selectedTab = $(".content").tabs('option', 'active');
            if(selectedTab == 0){
                $('.rnb').fadeIn();
                setTimeout(function(){
                    $('.recruit_inner01').addClass('scrolled');
                    $('.section.recruit_inner04 h3, .section.recruit_inner04 .stable').removeClass('active');
                }, 300);
                AOS.refresh();
            }
            else if(selectedTab == 1){
                $('.rnb').fadeOut();
                setTimeout(function(){
                    $('.recruit_inner01').removeClass('scrolled');
                    $('.section.recruit_inner04 h3, .section.recruit_inner04 .stable').addClass('active');
                }, 300);
                AOS.refresh();
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
			scrollTop:recruit_inner03
		},300, 'swing');
	});
	
	$(".section_link02").click(function(){
		$('html, body').animate({
			scrollTop:recruit_inner02
        },300, 'swing');
	});
	
	$(".section_link03").click(function(){
		$('html, body').animate({
			scrollTop:recruit_inner01
		},300, 'swing');
    });    
};

function scrollAction (){
    var recruit_inner01_H = $('.recruit_inner01').offset().top;
    var recruit_inner02_H = $('.recruit_inner02').offset().top;
    var recruit_inner03_H = $('.recruit_inner03').offset().top;
    var talent_H = $('.talent').offset().top - 200;
    var support1_H = $('.support_list .list1').offset().top - 70;
    var support2_H = $('.support_list .list2').offset().top - 70;
    var support3_H = $('.support_list .list3').offset().top - 70;
    var support4_H = $('.support_list .list4').offset().top - 70;
    var support5_H = $('.support_list .list5').offset().top - 70;

    $(window).on('scroll', function() {

        var actionScroll = $(this).scrollTop() + 400;
        
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
        if ( talent_H < actionScroll) {
            $('.talent').addClass('scrolled');
        }
        else{
            $('.talent').removeClass('scrolled');
        }
       
        if ( support1_H < actionScroll) {
            $('.support_list .list1').addClass('scrolled');
        }
        else{
            $('.support_list .list1').removeClass('scrolled');
        }
        if ( support2_H < actionScroll) {
            $('.support_list .list2').addClass('scrolled');
        }
        else{
            $('.support_list .list2').removeClass('scrolled');
        }
        if ( support3_H < actionScroll) {
            $('.support_list .list3').addClass('scrolled');
        }
        else{
            $('.support_list .list3').removeClass('scrolled');
        }
        if ( support4_H < actionScroll) {
            $('.support_list .list4').addClass('scrolled');
        }
        else{
            $('.support_list .list4').removeClass('scrolled');
        }
        if ( support5_H < actionScroll) {
            $('.support_list .list5').addClass('scrolled');
        }
        else{
            $('.support_list .list5').removeClass('scrolled');
        }
    });
    
};