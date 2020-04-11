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
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
              breakpoint: 1031,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
     });

    $(".header__menu-mobile").on("click", function(){
        $('.header__menu-list').toggleClass("active").slideToggle();

        if ($(".header__menu-list").hasClass("active")) $(".header__info").addClass("movedown");
        else $(".header__info").removeClass("movedown");
    });

    new WOW().init();
});

