
// Mobile Menü Trigger


$(".trigger").click(function () {
    $(this).toggleClass("open");
    $('#mainnav').animate({
        height: 'toggle'
    });

    $('.logo').toggleClass("open");

});


/* Recherche Suchauswahl - nicht mehr benötigt


$(document).ready(function(){
  
  $('.controls button').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.controls button').removeClass('current');
    $('.form').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})

*/

// Scroll to top Funktion

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) { $('#totop').fadeIn(); }
    else { $('#totop').fadeOut(); }
});


// Smooth-Scroll Funktion

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });






// Internet Explorer Version in body-Klasse ergänzen - entfernen falls Typo3 das übernimmt


(function () {
    var v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i'),
        browser,
        isIE;

    while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]);
    v = v > 4 ? v : document.documentMode;
    if (v) {
        browser = " ie"
        for (var i = 5; i < 12; i++) {
            if (v < i) {
                browser += ' lte-ie' + i;
            } else if (v > i) {
                browser += ' gte-ie' + i;
            } else if (v == i) {
                browser += ' ie' + i;
            }
        }

        isIE = {
            "version": v
        }

    } else {
        browser = ' not-ie';
        isIE = false;
    }
    document.documentElement.className += browser;
    window.ie = isIE;
}());



// jquery Datepicker aktivieren

$(function () {
    $(".datetimepicker").datepicker({ dateFormat: "dd.mm.yy", monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] });
});




// Akkordeon (FAQ)

$(".accordion").accordion({ active: false, collapsible: true, heightStyle: "content" });



$(function () {

    // Check form inputs for value or live input and toggle parent class 
    $('.form-group input[type="text"], .form-group textarea').each(function () {
        ($(this).val() !== '') && $(this).parent().addClass('got-input')
    }).on('focusout', function () {
        $(this).parent().toggleClass('got-input', $(this).val() !== '')

    });

    if ($('div.search-results')[0]) {
        $('.banner h1').append('<span class="search-info-toggle"/>')
        $('main div[id^="c"] .content').addClass('search-infos search-infos-minimized')
    }
    $('.search-info-toggle').click(() => { $('main div[id^="c"] .content').toggleClass('search-infos-minimized') })

})
