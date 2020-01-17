/* global $, jquery, console, alert */

$(document).ready(function() {

    "use strict";

    // Trigger Nice Scroll Plugin

    $('html').niceScroll({

        cursorcolor: '#d3d4d9',
        cursorwidth: 5,
        cursorborderradius: 3,
        cursorborder: '1px solid #d3d4d9'
    });

    // Adjust Slider Height

    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();

    $('.slider , .carousel-item').height(winH - (upperH + navH));

    // Featured Work Shuffle

    $('.featured ul li').on('click', function() {

        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-md').css('opacity', 1);
        } else {
            $('.shuffle-imgs .col-md').css('opacity', '0.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });

});