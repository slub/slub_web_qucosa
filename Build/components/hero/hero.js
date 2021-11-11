/**
 *    Hero
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

class Hero {
    constructor () {
        this.init()
    }

    init () {
        // console.log('Hero loaded')

        document.getElementById('linkToAdvancedSearch').addEventListener('click', () => {
            localStorage.setItem('advancedSearch', true)
        })

        this.resetSearch()
        this.styleOnFocus()
    }

    resetSearch () {
        const heroSearch = document.querySelector('#tx-dlf-search-query')
        const resetButton = document.querySelector('.qsa_hero__search__reset')
        heroSearch.addEventListener('input', e => {
            if (e.target.value) {
                resetButton.style.display = 'inline-block'
            } else {
                resetButton.style.display = 'none'
            }
        })

        resetButton.addEventListener('click', e => {
            heroSearch.value = ''
            resetButton.style.display = 'none'
        })
    }

    styleOnFocus () {
        const heroSearch = document.querySelector('#tx-dlf-search-query')
        const submitButton = document.querySelector('.qsa_hero__search button[type="submit"]')

        heroSearch.addEventListener('focus', e => {
            submitButton.classList.add('isFocus')
        })

        heroSearch.addEventListener('blur', e => {
            submitButton.classList.remove('isFocus')
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new Hero())

// end of hero.js
