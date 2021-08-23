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
    };
}

/**
 *     @section 4. Export class
 */

export default (new Carousel())

// end of carousel.js
