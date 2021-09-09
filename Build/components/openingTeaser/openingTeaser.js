/**
 *    OpeningTeaser
 *
 *    @tableofcontent
 *      1. Dependencies
 *      2. Configuration
 *      3. Class
 *      4. Export class
 *
 */

/**
 *     @section 1. Dependencies
 */

// import js dependencies
import 'slick-carousel/slick/slick.min'

/**
 *     @section 2. Configuration
 */

// nothing yet

/**
 *     @section 3. Class
 */

class OpeningTeaser {
    constructor () {
        this.init()
    }

    init () {
        // console.log('OpeningTeaser loaded')
        this.initSlickSlider()
    }

    initSlickSlider () {
        /* eslint-disable no-undef */

        const cardWrapper = document.querySelectorAll('.qsa_opening-teaser__card-wrapper')
        const $prev = $('.qsa_prev')
        const $next = $('.qsa_next')

        cardWrapper.forEach(wrapper => {
            if (wrapper.childElementCount === 4) {
                $('.qsa_opening-teaser__card-wrapper').slick({
                    prevArrow: false,
                    nextArrow: false,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                arrows: true,
                                prevArrow: $prev,
                                nextArrow: $next,
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                arrows: true,
                                prevArrow: $prev,
                                nextArrow: $next,
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                })
            }

            if (wrapper.childElementCount === 3) {
                $('.qsa_opening-teaser__card-wrapper').slick({
                    prevArrow: false,
                    nextArrow: false,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                arrows: true,
                                prevArrow: $prev,
                                nextArrow: $next,
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                arrows: true,
                                prevArrow: $prev,
                                nextArrow: $next,
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                })
            }

            if (wrapper.childElementCount === 2) {
                $('.qsa_opening-teaser__card-wrapper').slick({
                    prevArrow: false,
                    nextArrow: false,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 576,
                            settings: {
                                arrows: true,
                                prevArrow: $('.prev'),
                                nextArrow: $('.next'),
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                })
            }
        })
        /* eslint-enable no-undef */
    }
}

/**
 *     @section 4. Export class
 */

export default (new OpeningTeaser())

// end of openingTeaser.js
