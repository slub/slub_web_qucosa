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

    // Open submenus and push navigation forward on mobile devices
    $('button.submenu-toggle').on('click', function () {
        if ($(this).closest('li').hasClass('submenu-open')) {
            $(this).attr('aria-expanded', 'false').closest('li').removeClass('submenu-open').find('.submenu-container').attr('aria-expanded', 'false');
        } else {
            $('nav.main-navigation').attr('aria-expanded', 'true');
            $(this).attr('aria-expanded', 'true').closest('li').addClass('submenu-open').find('> .submenu-container').attr('aria-expanded', 'true');
        }

     
        return false;
    });

})
