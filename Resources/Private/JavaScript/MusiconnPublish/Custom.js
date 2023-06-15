/*
 *
 * JS functions
 * ================================================
 * a few JS based additional calls to
 * enhance the user experience
 *
 */

$(function () {

    // Toggle mobile nav
    $('.main-navigation-toggle').on('click', function () {
        if ($('body.open-main-navigation')[0]) {
            $('body').removeClass('open-main-navigation');
            $('.main-navigation, .main-navigation-toggle').attr('aria-expanded', 'false');
        } else {
            $('body').addClass('open-main-navigation');
            $('.main-navigation, .main-navigation-toggle').attr('aria-expanded', 'true');
        }
    });

    // Open submenus on mobile devices and larger touch devices
    $('button.submenu-toggle').on('click', function () {
        if ($(this).closest('li').hasClass('submenu-open')) {
            $(this).attr('aria-expanded', 'false').closest('li').removeClass('submenu-open').find('.submenu-container').attr('aria-expanded', 'false');
        } else {
            $('nav.main-navigation').attr('aria-expanded', 'true');
            $(this).attr('aria-expanded', 'true').closest('li').addClass('submenu-open').find('> .submenu-container').attr('aria-expanded', 'true');
        }

        return false;
    });

    // Handle mouse and keyboard controls
    if (!(Modernizr.pointerevents || Modernizr.touchevents)) {
        $('ul.main-menu > li.has-submenu').on('mouseenter focusin', function () {
            $(this).addClass('submenu-open').find('> .submenu-container').attr('aria-expanded', 'true');
        }).on('mouseleave focusout', function () {
            $(this).removeClass('submenu-open').find('> .submenu-container').attr('aria-expanded', 'false');
        });
    }

    // Remove or add aria attributes to main navigation based on screen width
    $(window).resize(function () {
        if ($(window).width() > 1024) {
            $('nav.main-navigation').removeAttr('aria-haspopup aria-expanded');
        } else {
            $('nav.main-navigation').attr({ 'aria-haspopup': 'true', 'aria-expanded': 'false' });
        }
    });




    $('.accordion-item h2 button').on('click', function () {
        $(this).attr('aria-expanded', ($(this).parents('.accordion-item').hasClass('accordion-open')) ? 'false' : 'true').parents('.accordion-item').toggleClass('accordion-open');
    });

})
