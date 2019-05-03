$(document).ready(function(){  
  
    var visual_area = $(window).height();
    $(".visual_area").css('height', visual_area);

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
    var organization_H = $('.organization').offset().top;
    var organizationSub_H = $('.organization .sub').offset().top;
    var history1_H = $('.history1').offset().top;
    var history2_H = $('.history2').offset().top;
    var history3_H = $('.history3').offset().top;
    var history4_H = $('.history4').offset().top;


    $(window).on('scroll', function() {

        var actionScroll = $(this).scrollTop() + 400;
        var organizationScroll = $(this).scrollTop() + 600;
        var historyScroll = $(this).scrollTop() + 800;
        
        if (company_inner01_H < actionScroll) {
            $('.company_inner01').addClass('active');
            setTimeout(function() { 
                $('.company_inner01 .info').addClass('active'); 
            }, 300);
        };

        if (company_inner02_H < actionScroll) {
            $('.company_inner02').addClass('active');
            setTimeout(function() { 
                $('.company_inner02 .info').addClass('active'); 
            }, 300);

            if (organization_H < organizationScroll) {
                $('.ceo').animate({opacity: 1},300);
                $('.line').delay(200).animate({opacity: 1},300); 
                setTimeout(function() { 
                    $('.team1').animate({'padding-top': '0px', opacity: 1},300); 
                    $('.team2').delay(200).animate({'padding-top': '0px', opacity: 1},300); 
                    $('.team3').delay(300).animate({'padding-top': '0px', opacity: 1},300); 
                    $('.team4').delay(400).animate({'padding-top': '0px', opacity: 1},300); 
                }, 700);
            };
            if (organizationSub_H < organizationScroll) {
                $('.team1').find('.sub_line').addClass('active');
                $('.team1').find('.sub_line i').delay(500).animate({opacity: 1},300);
                $('.team1').find('.sub_line em').delay(700).animate({opacity: 1},300); 
                $('.team1').find('.sub').delay(1200).animate({'padding-top': '120px', opacity: 1},500);  
                setTimeout(function() { 
                    $('.team2').find('.sub_line').addClass('active');
                    $('.team2').find('.sub_line i').delay(500).animate({opacity: 1},300);
                    $('.team2').find('.sub_line em').delay(700).animate({opacity: 1},300); 
                    $('.team2').find('.sub').delay(1200).animate({'padding-top': '120px', opacity: 1},500);  
                }, 500);
                setTimeout(function() { 
                    $('.team3').find('.sub_line').addClass('active');
                    $('.team3').find('.sub_line i').delay(500).animate({opacity: 1},300);
                    $('.team3').find('.sub_line em').delay(700).animate({opacity: 1},300); 
                    $('.team3').find('.sub').delay(1200).animate({'padding-top': '120px', opacity: 1},500); 
                }, 1000);
                setTimeout(function() { 
                    $('.team4').find('.sub_line').addClass('active');
                    $('.team4').find('.sub_line i').delay(500).animate({opacity: 1},300);
                    $('.team4').find('.sub_line em').delay(700).animate({opacity: 1},300); 
                    $('.team4').find('.sub').delay(1200).animate({'padding-top': '120px', opacity: 1},500); 
                }, 1500);
            };
        };

        if (company_inner03_H < actionScroll) {
            $('.company_inner03').addClass('active');
            setTimeout(function() { 
                $('.company_inner03 .info').addClass('active'); 
            }, 300);

            if ($('.viewmore_hide').hasClass('hide')) {
                if (history1_H < historyScroll) {
                    $('.history1').addClass('active');
                    $('.history1').find('.sub_line i').animate({opacity: 1},300);
                    $('.history1').find('.sub_line em').delay(200).animate({opacity: 1},500); 
                    setTimeout(function() { 
                        $('.history1').find('.sub_line').addClass('active');
                    }, 500);
                    $('.history1').find('dl').delay(700).animate({opacity: 1},500);
                };
                if (history2_H < historyScroll) {
                    $('.history2').addClass('active');
                    $('.history2').find('.sub_line i').animate({opacity: 1},300);
                    $('.history2').find('.sub_line em').delay(200).animate({opacity: 1},500); 
                    setTimeout(function() { 
                        $('.history2').find('.sub_line').addClass('active');
                    }, 500);
                    $('.history2').find('dl').delay(700).animate({opacity: 1},500);
                };
                if (history3_H < historyScroll) {
                    $('.history3').addClass('active');
                    $('.history3').find('.sub_line i').animate({opacity: 1},300);
                    $('.history3').find('.sub_line em').delay(200).animate({opacity: 1},500); 
                    setTimeout(function() { 
                        $('.history3').find('.sub_line').addClass('active');
                    }, 500);
                    $('.history3').find('dl').delay(700).animate({opacity: 1},500);
                };
                if (history4_H < historyScroll) {
                    $('.history4').addClass('active');
                    $('.history4').find('.sub_line i').animate({opacity: 1},300);
                    $('.history4').find('.sub_line em').delay(200).animate({opacity: 1},500); 
                    setTimeout(function() { 
                        $('.history4').find('.sub_line').addClass('active');
                    }, 500);
                    $('.history4').find('dl').delay(700).animate({opacity: 1},500);
                };
            };
        };

        if (company_inner04_H < actionScroll) {
            $('.company_inner04').addClass('active');
            setTimeout(function() { 
                $('.company_inner04 .info').addClass('active'); 
            }, 300);
        };
    });

    $(".viewmore").click(function(){
        $('.viewmore_hide').removeClass('hide');
        $('.history_list li').addClass('active');
        $('.history_list').find('.sub_line i').animate({opacity: 1},300);
        $('.history_list').find('.sub_line em').delay(200).animate({opacity: 1},500); 
        setTimeout(function() { 
            $('.history_list').find('.sub_line').addClass('active');
        }, 500);
        $('.history_list').find('dl').delay(700).animate({opacity: 1},500);
        $('.viewmore').addClass('hide');
    });
	//alert(visual_area_H);
};
