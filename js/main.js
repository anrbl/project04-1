$(function () {

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.to_top').fadeIn() : $('.to_top').fadeOut();
    });

    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
        $('h1').toggleClass('on');
        $('.user').toggleClass('on');
    });
});