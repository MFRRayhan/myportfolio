(function ($) {
    ('use strict');

    /*---------------------------------
	Carousel (Owl Carousel) JQUERY
----------------------------------- */
    $('.owl-carousel').each(function (index) {
        var a = $(this);
        if ($('html').attr('dir') == 'rtl') {
            var rtlVal = true;
        } else {
            var rtlVal = false;
        }
        $(this).owlCarousel({
            rtl: rtlVal,
            autoplay: a.data('autoplay'),
            center: a.data('center'),
            autoplayTimeout: a.data('autoplaytimeout'),
            autoplayHoverPause: a.data('autoplayhoverpause'),
            loop: a.data('loop'),
            speed: a.data('speed'),
            nav: a.data('nav'),
            dots: a.data('dots'),
            autoHeight: a.data('autoheight'),
            autoWidth: a.data('autowidth'),
            margin: a.data('margin'),
            stagePadding: a.data('stagepadding'),
            slideBy: a.data('slideby'),
            lazyLoad: a.data('lazyload'),
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            animateOut: a.data('animateout'),
            animateIn: a.data('animatein'),
            video: a.data('video'),
            items: a.data('items'),
            responsive: {
                0: { items: a.data('items-xs') },
                576: { items: a.data('items-sm') },
                768: { items: a.data('items-md') },
                992: { items: a.data('items-lg') },
            },
        });
    });

    /*------------------------------------
    Magnific Popup
-------------------------------------- */
    // Image on Modal JQUERY
    $('.popup-img-gallery').each(function () {
        $(this).magnificPopup({
            delegate: '.popup-img:visible',
            type: 'image',
            tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
            closeOnContentClick: !0,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1],
            },
        });
    });

    // Ajax On Modal JQUERY
    $('.popup-ajax-gallery').each(function () {
        $(this).magnificPopup({
            delegate: '.popup-ajax:visible',
            type: 'ajax',
            tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
            mainClass: 'mfp-fade',
            closeBtnInside: true,
            midClick: true,
            gallery: {
                enabled: true,
            },
            callbacks: {
                ajaxContentAdded: function () {
                    $('.owl-carousel').each(function (index) {
                        var a = $(this);
                        if ($('html').attr('dir') == 'rtl') {
                            var rtlVal = true;
                        } else {
                            var rtlVal = false;
                        }
                        $(this).owlCarousel({
                            rtl: rtlVal,
                            autoplay: a.data('autoplay'),
                            center: a.data('center'),
                            autoplayTimeout: a.data('autoplaytimeout'),
                            autoplayHoverPause: a.data('autoplayhoverpause'),
                            loop: a.data('loop'),
                            speed: a.data('speed'),
                            nav: a.data('nav'),
                            dots: a.data('dots'),
                            autoHeight: a.data('autoheight'),
                            autoWidth: a.data('autowidth'),
                            margin: a.data('margin'),
                            stagePadding: a.data('stagepadding'),
                            slideBy: a.data('slideby'),
                            lazyLoad: a.data('lazyload'),
                            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
                            animateOut: a.data('animateOut'),
                            animateIn: a.data('animateIn'),
                            video: a.data('video'),
                            items: a.data('items'),
                            responsive: {
                                0: { items: a.data('items-xs') },
                                576: { items: a.data('items-sm') },
                                768: { items: a.data('items-md') },
                                992: { items: a.data('items-lg') },
                            },
                        });
                    });
                },
            },
        });
    });

    // YouTube/Viemo Video & Gmaps JQUERY
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').each(function () {
        $(this).magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
        });
    });

    /*------------------------------------
    Parallax Background
-------------------------------------- */
    $('.parallax').each(function () {
        $(this).parallaxie({
            speed: 0.5,
        });
    });

    /*------------------------------------
    Counter
-------------------------------------- */
    $('.counter').each(function () {
        $(this).appear(function () {
            $(this).countTo({
                speed: 1800,
            });
        });
    });

    /*------------------------------------
    YTPlayer YouTube Background
-------------------------------------- */

    $('.player').each(function () {
        $(this).mb_YTPlayer();
    });

    /*------------------------
	Scroll to top
-------------------------- */
    $(function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 400) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });
    });

    /*------------------------
	Contact Form
-------------------------- */
    var form = $('#contact-form'); // contact form
    var submit = $('#submit-btn'); // submit button

    // form submit event
    form.on('submit', function (e) {
        e.preventDefault(); // prevent default form submit

        if (typeof $('#google-recaptcha-v3').val() != 'undefined') {
            grecaptcha.ready(function () {
                var site_key = $('#google-recaptcha-v3').attr('src').split('render=')[1];
                grecaptcha.execute(site_key, { action: 'contact' }).then(function (token) {
                    var gdata = form.serialize() + '&g-recaptcha-response=' + token;
                    $.ajax({
                        url: 'php/email.php', // form action url
                        type: 'POST', // form submit method get/post
                        dataType: 'json', // request type html/json/xml
                        data: gdata, // serialize form data
                        beforeSend: function () {
                            submit.attr('disabled', 'disabled');
                            var loadingText = '<span role="status" aria-hidden="true" class="spinner-border spinner-border-sm align-self-center me-2"></span>Sending.....'; // change submit button text
                            if (submit.html() !== loadingText) {
                                submit.data('original-text', submit.html());
                                submit.html(loadingText);
                            }
                        },
                        success: function (data) {
                            submit.before(data.Message).fadeIn('slow'); // fade in response data
                            submit.html(submit.data('original-text')); // reset submit button text
                            submit.removeAttr('disabled', 'disabled');
                            if (data.response == 'success') {
                                form.trigger('reset'); // reset form
                            }
                            setTimeout(function () {
                                $('.alert-dismissible').fadeOut('slow', function () {
                                    $(this).remove();
                                });
                            }, 3000);
                        },
                        error: function (e) {
                            console.log(e);
                        },
                    });
                });
            });
        } else {
            $.ajax({
                url: 'php/email.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'json', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function () {
                    submit.attr('disabled', 'disabled');
                    var loadingText = '<span role="status" aria-hidden="true" class="spinner-border spinner-border-sm align-self-center me-2"></span>Sending.....'; // change submit button text
                    if (submit.html() !== loadingText) {
                        submit.data('original-text', submit.html());
                        submit.html(loadingText);
                    }
                },
                success: function (data) {
                    submit.before(data.Message).fadeIn('slow'); // fade in response data
                    submit.html(submit.data('original-text')); // reset submit button text
                    submit.removeAttr('disabled', 'disabled');
                    if (data.response == 'success') {
                        form.trigger('reset'); // reset form
                    }
                    setTimeout(function () {
                        $('.alert-dismissible').fadeOut('slow', function () {
                            $(this).remove();
                        });
                    }, 3500);
                    if (typeof $('#recaptcha-v2').val() != 'undefined') {
                        grecaptcha.reset(); // reset reCaptcha
                    }
                },
                error: function (e) {
                    console.log(e);
                },
            });
        }
    });
})(jQuery);
