/**
 *    Carousel
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

/**
 *     @section 2. Configuration
 */

// nothing yet

/**
 *     @section 3. Class
 */

class Carousel {
    constructor () {
        this.init()
    }

    init () {
        // console.log('carousel loaded')
        // Jquery muss wegen Bootstrap verwendet werden
        // eslint-disable-next-line no-undef
        $('.carousel').carousel({
            interval: false,
            touch: true
        })

        this.switchFocus()
    };

    switchFocus () {
        const carouselPrev = document.querySelectorAll('.carousel-control-prev')
        const carouselNext = document.querySelectorAll('.carousel-control-next')

        carouselPrev.forEach(prev => {
            this.focusFirstCarouselEl(prev)
        })

        carouselNext.forEach(next => {
            this.focusFirstCarouselEl(next)
        })
    }

    focusFirstCarouselEl (button) {
        button.addEventListener('click', () => {
            const carousel = button.closest('.carousel')
            const activeSlide = carousel.querySelector('.active .qsa_carousel-item_wrapper')
            const figures = activeSlide.querySelectorAll('figure')

            figures[0].querySelector('.qsa_carousel-item_el-link').focus()
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new Carousel())

// end of carousel.js
