    "use strict";
    var wind = $(window),
        htmlBody = $("html, body"),
        loader = $(".loader"),
        top_btn = $("#toTop");

    wind.on("load", function () {
        loader.fadeOut(700, function () {
            loader.remove();
        });
    });

    wind.on("scroll", function () {
        if (wind.scrollTop() >= 350) {
            top_btn.fadeIn(500)
        } else {
            top_btn.fadeOut(100)
        }
    });

    top_btn.on("click", function () {
        htmlBody.animate({
            scrollTop: 0
        }, 590)
    });


    $('body header,body section,body footer').attr('id', function (i) {
        return 'section' + (i + 1);
    });

    var firstSectionHeight = $( '#section1' ).height()
    $('section').css('min-height', firstSectionHeight);

    $('.goD a').attr('href', function (i) {
        return '#section' + (i + 2);
    }).addClass('goto');


    $("a.goto").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                //  window.location.hash = hash;
            });
        } // End if
    });