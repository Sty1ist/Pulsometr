$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2800,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/Carousel/icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/Carousel/icons/right.png"></button>'
    });
});

