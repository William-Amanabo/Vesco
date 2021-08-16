/*=============================Services ===================================== */

$(function() {
    new WOW().init();
});

/*============================= Works ===================================== */

$(function() {
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*============================= Team ===================================== */

$(function() {
    $('#team-members').owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
});

/*============================= Testimonials ===================================== */

/* $(function() {
    $("#testimonial-container").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
}); */

$(function() {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });


    /*============================= Stats ===================================== */
    $(function() {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });

    });

    /*============================= Client ===================================== */

    $(function() {
        $("#client-list").owlCarousel({
            items: 6,
            autoplay: false,
            smartSpeed: 700,
            loop: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                768: {
                    items: 5
                },
                992: {
                    items: 6
                }
            }
        });
    })
});

/*============================= Navigation ===================================== */


//smooth scrolling
$(function() {
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault;

        var section = $(this).attr("href")

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});





// Show/Hide transparent black navigation
$(function() {

    $(window).scroll(function() {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// Close mobile menu on click
$(function() {

    $(".navbar-collapse ul li a").on("click touch", function() {

        $(".navbar-toggle").click();
    });
});