/**
 *    Breadcrumb
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

class Breadcrumb {
    constructor () {
        this.init()
    }

    init () {
        // console.log('Breadcrumb loaded')
        this.currentItem()
    }

    currentItem () {
        const breadcrumbLink = document.querySelector('.qsa_qsa_breadcrumb__link')

        breadcrumbLink.setAttribute('aria-current', 'location')
    }
}

/**
 *     @section 4. Export class
 */

export default (new Breadcrumb())

// end of breadcrumb.js
