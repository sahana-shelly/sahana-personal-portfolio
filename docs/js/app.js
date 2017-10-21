/*
* ------------------------------------
Author       : Sahana Shelly
Template Name: sahanashelly
Version      : 1.0
* -------------------------------------
*/
(function ($) {
    'use strict';
        $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
        /* ===================================
     CHANGE MENU BACKGROUND JS
====================================== */
        
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('#header').addClass("positionFixed");
            } else {
                $('#header').removeClass("positionFixed");
            }
        });
/* ===================================
     SMOOTH SCROOL JS
====================================== */
    
    $("nav").on('click','a',function (event) {
        event.preventDefault();
        var elAttr = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $(elAttr).offset().top -125
        },1000);
    });
     /* ===================================
     isotope JS
====================================== */
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function( itemElem ) {
                var weight = $( itemElem ).find('.weight').text();
                return parseFloat( weight.replace( /[\(\)]/g, '') );
            }
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
        }
    };

    $(document).on('click', '#filters-ul li a', function(){
        var filterValue = $( this ).attr('data-filter');
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
        return false;
    });
    
/* ===================================
    magnitic popup JS
====================================== */
    var groups = {};
    $('.gallery-item').each(function() {
        var id = parseInt($(this).attr('data-group'), 10);

        if(!groups[id]) {
            groups[id] = [];
        } 

        groups[id].push( this );
    });


    $.each(groups, function() {

        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            gallery: { enabled:true }
        })

    });
    /* ===================================
    link color setup  JS
====================================== */
$('a.cp-btns').click(function(e) {
 $("a.cp-btns.active").removeClass("active");
    $(this).addClass("active");
});

$('a.filter-btns').click(function(e) {
 $("a.filter-btns.active").removeClass("active");
    $(this).addClass("active");
});
    /* ===================================
    image joom JS
====================================== */
      $('.unassign').on('click', function() {

    alert("Unassign!");

});

$('.assign').on('click', function() {

    alert("Assign!");

})

 /* ===================================
    footer scroll JS
====================================== */
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });


    $("#toTop").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    });
})(jQuery);



