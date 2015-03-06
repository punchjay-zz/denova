/// <reference path="jquery-2.1.3.js" />
$(document).ready(function () {
    //$('.section01').addClass('fade-in-r-slide');
    $('.bt-one').click(function () {

        $('html').animate({
            scrollTop: $('.section01').offset().top
        }, 800);
    });

    $('.bt-two').click(function () {

        $('html').animate({
            scrollTop: $('.section02').offset().top
        }, 800);
    });
});