$(document).ready(function() {


    // fullpage customization

    $('#fullpage, #indust').fullpage({
        //options here
        sectionsColor: ['#ffffff', '#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5'],
        autoScrolling: true,
        scrollHorizontally: true,
        slidesNavigation: true,

        css3: true,
        scrollingSpeed: 700,
        scrollOverflow: true,
        autoScrolling: true,
        afterRender: function() {
            $('#footer').hide();
        },
        onLeave: function(anchorLink, index) {
            console.log(anchorLink);
            console.log(index['index']);
            if (index['index'] == 0) {
                $('#footer').hide();
            } else {
                $('#footer').show();
            }
        }
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);

})