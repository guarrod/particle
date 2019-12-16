$(document).ready(function() {

    // LightSlider
    var autoplaySlider = $('#autoplay').lightSlider({
        item:3,
        slideMove:1,
        auto:true,
        loop:true,
        pause:3000,
        controls:false,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        },
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
        
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());


    // Smooth scroll
    $('a.nav-link').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

});