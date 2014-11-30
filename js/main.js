
$(document).ready(function(){

    //if ($.browser.msie) {
    //Placeholder для IE
        $('input').placeholder();
   // }

    $(".carousel-inner").jCarouselLite({
        btnNext: ".btnNext",
        btnPrev: ".btnPrev",
        mouseWheel: true,
        circular: true,
        visible: 7,
        scroll: 3,
        speed: 300
    });
    $('.chosen-select').chosen({
        disable_search_threshold: 10,
        height: '36px',

    });
    $(".carousel-inner li").addClass("middlize");

    $(".vertical.lightCarousel").jCarouselLite({
        vertical: true,
        auto: 1500,
        speed: 1000,
        visible: 1,
        scroll: 1
    });
    $(".carousel").jCarouselLite({
        auto: 3000,
        speed: 2000,
        visible: 1,
        scroll: 1
    });
})