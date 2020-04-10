$(function(){
    // $(".gallery__item-zoom").on("click", function(e){
    //     e.preventDefault();
        // $('.image-popup').magnificPopup({
        //     type: 'image',
        //     zoom: {
        //         enabled: true,
        //         duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
        //     }
        // });

    // });
     
    $(".journal__content").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: '<button type="button" class="slick_btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick_btn slick-prev"></button>',
    });
    // new WOW().init();


});

