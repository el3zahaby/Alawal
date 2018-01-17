$(function () {
    "use strict";
    var wind = $(window),
        htmlBody = $("html, body"),
        loader = $(".loader"),
        nav_section = $(".navbar-default .navbar-nav > li > a"),
        scroll_btn = $(".scroll-top"),
        go_to = $("#go-to"),
        send_msg = $("#send_msg"),
        portfolio = $("#portfolio"),
        form = $("#send_mail"),
        form_mail = $("#send_mail .mail"),
        form_msg = $("#send_mail .message"),
        border_color = "borderColor",
        red_color = "#F00",
        grey_color = "#ccc",
        php_file = "php/send.php";
    wind.on("load", function () {
        loader.fadeOut(700);
        htmlBody.css("overflow", "auto")
    });
    wind.on("scroll", function () {
        if (wind.scrollTop() >= 300) {
            scroll_btn.fadeIn(700)
        } else {
            scroll_btn.fadeOut(700)
        }
    });
    scroll_btn.on("click", function () {
        htmlBody.animate({
            scrollTop: 0
        }, 700)
    });
    nav_section.on("click", function (e) {
        e.preventDefault();
        var section_name = $(this).attr("href");
        htmlBody.animate({
            scrollTop: $(section_name).offset().top
        }, 700)
    });
    go_to.on("click", function () {
        htmlBody.animate({
            scrollTop: portfolio.offset().top
        }, 700)
    });
    send_msg.on("click", function () {
        if (!form_mail.val()) {
            form_mail.css(border_color, red_color);
            setTimeout(function () {
                form_mail.css(border_color, grey_color)
            }, 2e3)
        } else if (!form_msg.val()) {
            form_msg.css(border_color, red_color);
            setTimeout(function () {
                form_msg.css(border_color, grey_color)
            }, 2e3)
        } else {
            $.ajax({
                type: "POST",
                url: php_file,
                data: form.serialize(),
                success: function () {
                    form_mail.val("");
                    form_msg.val("")
                }
            })
        }
    })
});
