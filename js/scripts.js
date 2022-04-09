document.addEventListener('DOMContentLoaded', function () {
    var splide1 = new Splide('.second_sc-slider .splide', {
        type: 'loop',
        perPage: 2,
        arrows: false,
        interval: 0,
        easing: 'linear',
        pagination: false,
        speed: 10000,
        autoplay: true,
        gap: 10,
        fixedWidth: '45%',
        padding: {
            right: "10%"
        }
    });
    splide1.mount();



    var splide2 = new Splide('.seven_sc-slider .splide', {
        type: 'loop',
        perPage: 1,
        arrows: false,
        easing: 'linear',
        pagination: false,
        speed: 400,
        autoplay: true,
        gap: 10,
    });
    splide2.mount();
    AOS.init({
        once: true
    });
});