$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_right.svg"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false,
            }
        }]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__wrapper_content').eq(i).toggleClass('catalog-item__wrapper_content_active');
                $('.catalog-item__wrapper_list').eq(i).toggleClass('catalog-item__wrapper_list_active');
            })
        })
    };

    toggleSlide('.catalog-item__details');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__closed').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    })

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                phone: "Пожалуйста, введите номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес электронной почты"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    // Smooth scroll up

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageUp').fadeIn();
        } else {
            $('.pageUp').fadeOut();
        }
    });

    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

});