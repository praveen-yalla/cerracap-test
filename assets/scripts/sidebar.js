$(document).ready(function() {


    $(".loading").hide();

    $('#dismiss, .overlay').on('click', function() {
        // hide sidebar
        $('#sidebar').removeClass('active');
        // hide overlay
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function() {
        // open sidebar
        $('#sidebar').addClass('active');
        // fade in the overlay
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');


        // $(".navbar").css("position", "static");
        // $(".content-wrapper").css("margin", "0");

    });

    // variables
    var $header_top = $('.header-top');
    var $nav = $('nav');



    // toggle menu 
    $header_top.find('a').on('click', function() {
        $(this).parent().toggleClass('open-menu');
    });


    $('.crcls, .mn-nme').mouseenter(function() {
        var title = $(this).closest('.mn').attr('title');

        $('.mn-dt').hide();
        $('.' + title).show();

        $(this).closest('.mn').addClass("mnactive");
    })
    var clicked;
    var cur = "evaluation";
    $('.crcls, .mn-nme').click(function() {
        cur = $(this).closest('.mn').attr('title');
        clicked = true;
        $('.mn').not(this).removeClass('mnactive');
        $(this).closest('.mn').addClass("mnactive");
    })

    $('.crcls, .mn-nme').mouseleave(function() {

        $('.mn-dt').hide();
        $('.' + cur).show();

        if (!clicked) {
            $(this).closest('.mn').removeClass("mnactive");
        } else {
            clicked = false;
        }
    })



    $('.mn-dt').hide();
    $('.evaluation').show();


})