$(document).ready(function(){  
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
    $('.reference_detail').show();
    // $('.btn_reference').click(function(){
    //     var $href = $(this).attr('href');
    //     layer_popup($href);
    //     //$('.detail_area, .reference_detail').fadeIn();
    // });
    // function layer_popup(el){

    //     var $el = $(el);
    //     var isDim = $el.prev().hasClass('dim');

    //     isDim ? $('.reference_detail').fadeIn().addClass('on') : $el.fadeIn();
    //     $el.find('a.btn-layerClose').click(function(){
    //         isDim ? $('.reference_detail').fadeOut() : $el.fadeOut();
    //         return false;
    //     });

    //     // $('.layer .dimBg').click(function(){
    //     //     $('.dim-layer').fadeOut();
    //     //     return false;
    //     // });

    // }
});