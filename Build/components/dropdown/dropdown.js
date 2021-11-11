/**
 *    Dropdown
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

class Dropdown {
    constructor () {
        this.init()
    }

    init () {
        // console.log('Dropdown loaded')
        this.openDropdown()
        this.closeDropdowns()
    }

    openDropdown () {
        const button = document.querySelectorAll('.qsa_dropdown__button-language')
        // const dropdownNav = document.querySelector('.qsa_nav__item--has-submenu')

        button.forEach(item => {
            item.addEventListener('click', e => {
                e.target.classList.toggle('qsa_dropdown__button-language--show')
            })
        })
    }

    closeDropdowns () {
        window.onclick = function (event) {
            if (!event.target.matches('.qsa_dropdown__button')) {
                const dropdowns = document.querySelectorAll('.qsa_dropdown__button')
                const dropdownItems = document.querySelectorAll('.qsa_dropdown__items')
                dropdownItems.forEach(dropdownItem => {
                    if (dropdownItem.classList.contains('qsa_dropdown__items--show')) {
                        dropdownItem.classList.remove('qsa_dropdown__items--show')
                    }
                })
                dropdowns.forEach(dropdown => {
                    if (dropdown.classList.contains('qsa_dropdown__button--show') ||
                        dropdown.classList.contains('qsa_dropdown__button-language--show') ||
                        dropdown.classList.contains('qsa_dropdown__button--active')) {
                        dropdown.classList.remove('qsa_dropdown__button--show')
                        dropdown.classList.remove('qsa_dropdown__button--active')
                        dropdown.classList.remove('qsa_dropdown__button-language--show')
                    }
                })
            }
        }
    }
}

/**
 *     @section 4. Export class
 */

export default (new Dropdown())

// end of icon.js
