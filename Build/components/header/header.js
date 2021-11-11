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

/**
 *     @section 2. Configuration
 */

// nothing yet

/**
 *     @section 3. Class
 */

class Header {
    constructor () {
        this.init()
    }

    init () {
        this.toggleMenu()
        this.toggleMobileNav()
    }

    toggleMenu () {
        const hamburger = document.querySelector('.qsa_menu-button')
        const mainNav = document.querySelector('.qsa_nav')
        const body = document.querySelector('body')
        const wizardBtn = document.querySelector('#openWizard')

        hamburger.onclick = function () {
            this.classList.toggle('checked')
            mainNav.classList.toggle('qsa_nav--show')

            // close the menu, when you click on Key "ESC"
            if (mainNav.classList.contains('qsa_nav--show')) {
                window.addEventListener('keyup', (e) => {
                    if (e.keyCode === 27) {
                        mainNav.classList.remove('qsa_nav--show')
                        hamburger.classList.remove('checked')
                    }
                })
            }
        }

        hamburger.addEventListener('keydown', e => {
            if (e.which === 32 || e.which === 13) {
                e.target.classList.toggle('checked')
                mainNav.classList.toggle('qsa_nav--show')
            }
        })

        wizardBtn.onclick = function () {
            hamburger.classList.toggle('checked')
            mainNav.classList.toggle('qsa_nav--show')
        }

        wizardBtn.addEventListener('keydown', e => {
            if (e.which === 32 || e.which === 13) {
                hamburger.classList.toggle('checked')
                mainNav.classList.toggle('qsa_nav--show')
            }
        })

        document.addEventListener('click', function (e) {
            if (e.target === body) {
                hamburger.classList.toggle('checked')
                mainNav.classList.remove('qsa_nav--show')
            }
        })
    }

    toggleMobileNav () {
        const navDropdownButton = document.querySelectorAll('.qsa_dropdown__button')

        navDropdownButton.forEach(el => {
            el.onclick = function () {
                this.classList.toggle('qsa_dropdown__button--active')
                let ariaExpanded = this.getAttribute('aria-expanded')
                ariaExpanded === 'true' ? ariaExpanded = 'false' : ariaExpanded = 'true'
                this.setAttribute('aria-expanded', ariaExpanded)
                if (this.previousElementSibling) {
                    this.previousElementSibling.classList.toggle('qsa_dropdown__items--show')
                }
            }
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new Header())

// end of header.js
