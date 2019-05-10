$(document).ready(function(){ 
    var reference01 = $('.gridnav').offset().top;
    var reference_inner02 = $('.reference_inner01').height();
    console.log(reference01, reference_inner02);
    
    $(".btn_top").click(function(){
		$('html, body').animate({
			scrollTop:0
		},300, 'swing');
    });
    
    $(".scroll a").click(function(){
		$('html, body').animate({
			scrollTop:reference01
		},300, 'swing');
    });
    

    var visual_area = $(window).height();
    $(".visual_area").css('height', visual_area);
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
    var $grid = $('.reference_area').isotope({
        itemSelector:'.grid-item',
        layoutMode:'fitRows',
    });
    $('.gridnav li a').on('click', function(){
        var value = $(this).attr('data-filter');
        $grid.isotope({
            filter:value
        });
        $(this).parent('li').addClass('on').siblings().removeClass('on');
    });

    // 레퍼런스 상세화면
    $('.reference_detail').hide();
    $('.btn_reference').click(function(){
        var $href = $(this).attr('href');
        layer_popup($href);
		//$('.detail_area, .reference_detail').fadeIn();
		$('body').addClass('active');
    });
    function layer_popup(el){

        var $el = $(el);
        var isDim = $el.prev().hasClass('dim');

        isDim ? $('.reference_detail').fadeIn().addClass('on') : $el.fadeIn();
        $el.find('a.btn-layerClose').click(function(){
			$('body').removeClass('active');
            isDim ? $('.reference_detail').fadeOut() : $el.fadeOut();
            return false;
        });

        $('.reference_detail .dim').click(function(){
			$('.reference_detail').fadeOut();
			$('body').removeClass('active');
            return false;
        });

    }
});