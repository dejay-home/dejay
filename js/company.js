$(document).ready(function(){  
    AOS.init({
        duration:900,
    });
    var visual_area = $(window).height();
    $(".visual_area").css('height', visual_area);
    $(".viewmore").click(function(){
        $(this).css({ 
            'opacity':'0',
            'pointer-events':'none',
        });
        $('.viewmore_hide').css({
            'height':'auto',
            'visibility':'visible'
        });
        AOS.refresh();
        scrollAction();
        sectionClick();
    });

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
    $(".scroll a").click(function(){
		$('html, body').animate({
			scrollTop:company_inner01
		},300, 'swing');
		$(this).css('opacity', '0');
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
    var organization_H = $('.organization').offset().top + 200;
    var history1_H = $('.history1').offset().top + 300;
    var history2_H = $('.history2').offset().top + 300;
    var history3_H = $('.history3').offset().top + 300;
    var history4_H = $('.history4').offset().top + 300;
    var history5_H = $('.history5').offset().top + 300;
    var history6_H = $('.history6').offset().top + 300;
    var history7_H = $('.history7').offset().top + 300;
    var history8_H = $('.history8').offset().top + 300;
    var history9_H = $('.history9').offset().top + 300;
    var history10_H = $('.history10').offset().top + 300;

    $(window).on('scroll', function() {
        
        var actionScroll = $(this).scrollTop() + 400;
        var organizationScroll = $(this).scrollTop() + 600;
        var historyScroll = $(this).scrollTop() + 800;

        if (company_inner01_H < actionScroll) {
            $('.company_inner01').addClass('scrolled');
        }
        else{
            $('.company_inner01').removeClass('scrolled');
        }
        if (company_inner02_H < actionScroll) {
            $('.company_inner02').addClass('scrolled');   
        }
        else{
            $('.company_inner02').removeClass('scrolled');
        }
        if (organization_H < organizationScroll) {
            $('.organization').addClass('scrolled');
        }
        else{
            $('.organization').removeClass('scrolled');
        }

        if (company_inner03_H < actionScroll) {
            $('.company_inner03').addClass('scrolled');
        }
        else{
            $('.company_inner03').removeClass('scrolled');
        }

        console.log( history10_H ,actionScroll );
        if (history1_H < historyScroll) {
            $('.history1').addClass('scrolled');
        }
        else{
            $('.history1').removeClass('scrolled');
        }
        if (history2_H < historyScroll) {
            $('.history2').addClass('scrolled');
        }
        else{
            $('.history2').removeClass('scrolled');
        }
        if (history3_H < historyScroll) {
            $('.history3').addClass('scrolled');
        }
        else{
            $('.history3').removeClass('scrolled');
        }
        if (history4_H < historyScroll) {
            $('.history4').addClass('scrolled');
        }
        else{
            $('.history4').removeClass('scrolled');
        }
        if (history5_H < historyScroll) {
            $('.history5').addClass('scrolled');
        }
        else{
            $('.history5').removeClass('scrolled');
        }
        if (history6_H < historyScroll) {
            $('.history6').addClass('scrolled');
        }
        else{
            $('.history6').removeClass('scrolled');
        }
        if (history7_H < historyScroll) {
            $('.history7').addClass('scrolled');
        }
        else{
            $('.history7').removeClass('scrolled');
        }
        if (history8_H < historyScroll) {
            $('.history8').addClass('scrolled');
        }
        else{
            $('.history8').removeClass('scrolled');
        }
        if (history9_H < historyScroll) {
            $('.history9').addClass('scrolled');
        }
        else{
            $('.history9').removeClass('scrolled');
        }
        if (history10_H < historyScroll) {
            $('.history10').addClass('scrolled');
        }
        else{
            $('.history10').removeClass('scrolled');
        }


        if (company_inner04_H < actionScroll) {
            $('.company_inner04').addClass('scrolled');
        }
        else{
            $('.company_inner04').removeClass('scrolled');
        }
    });
};
