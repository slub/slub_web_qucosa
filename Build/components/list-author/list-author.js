/**
 *    Header
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
import tippy from 'tippy.js'

/**
 *     @section 2. Configuration
 */

// nothing yet

/**
 *     @section 3. Class
 */

class ListAuthor {
    constructor () {
        this.init()
    }

    init () {
        // console.log('ListAuthor loaded')
        this.list()
        this.tooltip()
    }

    list () {
        const btnShowAuthors = document.querySelector('.qsa_list-author__authors--show')
        const btnHideAuthors = document.querySelector('.qsa_list-author__authors--hide')
        const listAuthor = document.querySelector('.qsa_u-list')

        btnShowAuthors.addEventListener('click', function () {
            listAuthor.classList.toggle('open')
            btnShowAuthors.style.display = 'none'
            btnHideAuthors.style.display = 'block'
        })

        btnHideAuthors.addEventListener('click', function () {
            listAuthor.classList.toggle('open')
            btnShowAuthors.style.display = 'block'
            btnHideAuthors.style.display = 'none'
        })
    }

    tooltip () {
        tippy('[data-tippy-content]', {
            interactive: true,
            allowHTML: true
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new ListAuthor())

// end of header.js
