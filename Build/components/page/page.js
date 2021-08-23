/**
 *    Page
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

class Page {
    constructor () {
        this.init()
    }

    init () {
        // console.log('Page loaded')
        this.focus()
        this.tabbed()
        this.scrollDirection()
    }

    focus () {
        let highlight = false
        const body = document.querySelector('body')

        body.classList.add('state--mouse')

        body.addEventListener('keydown', function (e) {
            if (highlight === false) {
                const self = this

                highlight = true

                // 9 is 'tab'
                if (e.which === 9) {
                    self.classList.remove('state--mouse')
                    self.classList.add('state--focus')
                }
            }
        })
        body.addEventListener('mousemove', function (e) {
            if (highlight === true) {
                const self = this

                highlight = false
                self.classList.remove('state--focus')
                self.classList.add('state--mouse')
            }
        })
    }

    tabbed () {
        const focusableElements = document.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]')
        focusableElements.forEach(el => {
            el.addEventListener('focusin', (event) => {
                event.target.classList.add('tabbed')
            })
            el.addEventListener('focusout', (event) => {
                event.target.classList.remove('tabbed')
            })
        })
    }

    scrollDirection () {
        let lastScrollTop = window.pageYOffset
        const body = document.querySelector('body')

        window.addEventListener('scroll', () => { // or window.addEventListener("scroll"....
            const st = window.pageYOffset || document.documentElement.scrollTop // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop) {
                if (!body.classList.contains('scroll-down')) {
                    body.classList.add('scroll-down')
                    body.classList.remove('scroll-up')
                }
            } else {
                if (!body.classList.contains('scroll-up')) {
                    body.classList.add('scroll-up')
                    body.classList.remove('scroll-down')
                }
            }
            lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
        }, false)
    }
}

/**
 *     @section 4. Export class
 */

export default (new Page())

// end of page.js
