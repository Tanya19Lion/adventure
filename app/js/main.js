$(function(){
      
    $(".header__menu-mobile").on("click", function(){
        $('.header__menu-list').toggleClass("active").slideToggle();

        if ($(".header__menu-list").hasClass("active")) $(".header__info").addClass("movedown");
        else $(".header__info").removeClass("movedown");
    });

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

    new WOW().init();
});


const imgPopup = document.createElement('div'),
    commonSection = document.querySelector('.gallery'),
    bigImage = document.createElement('img'),
    scroll = calcScroll();

imgPopup.classList.add('popup');
commonSection.appendChild(imgPopup);

imgPopup.style.display = 'none';
imgPopup.style.justifyContent = 'center';
imgPopup.style.alignItems = 'center';

imgPopup.appendChild(bigImage);

commonSection.addEventListener('click', (event) => {
    event.preventDefault();

    target = event.target;

    if (target && target.classList.contains('gallery__preview')) {
        imgPopup.style.display = 'flex';
        const path = target.parentNode.getAttribute('href');
        bigImage.setAttribute('src', path);
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    }

    if (target && target.matches('div .popup')) {
        imgPopup.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    }
});

function calcScroll() {
    let div = document.createElement('div');

    div.style.width= '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}
