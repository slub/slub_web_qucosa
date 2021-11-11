/**
 *    SearchResult
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

class SearchResult {
    constructor () {
        this.init()
    }

    init () {
        // console.log('search loaded')
        this.toggleClass()
    }

    toggleClass () {
        const iconActive = document.querySelectorAll('.qsa_search-result__item-icon')

        iconActive.forEach(icon => {
            icon.addEventListener('click', () => {
                icon.classList.toggle('active-icon')
                if (icon.classList.contains('active-icon')) {
                    icon.closest('.qsa_search__wrapper').classList.add('qsa_search__wrapper--active')
                } else {
                    icon.closest('.qsa_search__wrapper').classList.remove('qsa_search__wrapper--active')
                }
            })
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new SearchResult())

// end of list.js
