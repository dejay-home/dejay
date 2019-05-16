$(document).ready(function(){  
    var visual_area = $(window).height();
    $(".visual_area").css('height', visual_area);

    sectionClick();
});

function sectionClick(){
    $(".btn_top").click(function(){
		$('html, body').animate({
			scrollTop:0
		},300, 'swing');
    });
};