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

})
