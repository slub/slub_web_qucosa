/**
 *    Prototype
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

// import css dependencies

// import js dependencies
// nothing yet

/**
 *     @section 2. Configuration
 */

// nothing yet

/**
 *     @section 3. Class
 */

class Prototype {
    constructor () {
        this.init()
    }

    init () {
        this.changeTheme()
        this.simulateLanguageSwitch()
        this.wizardPreventHash()
    }

    changeTheme () {
        const root = document.documentElement
        const body = document.querySelector('body')
        const logoWrapper = document.querySelector('.qsa_logo')
        const logo = document.querySelector('.qsa_logo img')
        if (window.location.href.indexOf('mantelseite-qucosa') > -1) {
            localStorage.setItem('theme', 'default')
        } else if (window.location.href.indexOf('mandant-tu-dresden') > -1) {
            localStorage.setItem('theme', 'tu-dresden')
        } else if (window.location.href.indexOf('mandant-tu-chemnitz') > -1) {
            localStorage.setItem('theme', 'tu-chemnitz')
        }

        if (localStorage.getItem('theme') === 'default') {
            root.classList.add('default')
            logo.setAttribute('src', '../../images/logo/Logo_Qucosa.svg')
        } else if (localStorage.getItem('theme') === 'tu-dresden') {
            root.classList.remove('default')
            root.classList.add('tu-dresden')
            logo.setAttribute('src', '../../images/logo/Logo_TU_Dresden.svg')
        } else if (localStorage.getItem('theme') === 'tu-chemnitz') {
            root.classList.remove('default')
            root.classList.add('tu-chemnitz')
            logoWrapper.classList.add('qsa_logo__tu-chemnitz')
            logo.setAttribute('src', '../../images/logo/Logo_TU_Chemnitz.svg')
        }

        body.classList.remove('qsa_visibility')
    }

    simulateLanguageSwitch () {
        const dropdown = document.querySelectorAll('.qsa_dropdown')

        dropdown.forEach(dropdown => {
            const dropdownItem = dropdown.querySelectorAll('.qsa_dropdown__item')
            dropdownItem.forEach(item => {
                item.addEventListener('click', e => {
                    dropdownItem.forEach(item => {
                        item.querySelector('.qsa_dropdown__link').classList.remove('qsa_dropdown__link--selected')
                    })
                    item.querySelector('.qsa_dropdown__link').classList.add('qsa_dropdown__link--selected')
                })
            })
        })
    }

    wizardPreventHash () {
        const initialLinks = document.querySelectorAll('.qsa_wizard__wrapper-list-item-link')
        const nextButtons = document.querySelectorAll('.qsa_wizard__wrapper-button-next')

        if (!document.querySelectorAll('.qsa_wizard_non-modal')) {
            initialLinks.forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault()
                })
            })
        }

        nextButtons.forEach(button => {
            button.addEventListener('click', e => {
                e.preventDefault()
            })
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new Prototype())

// end of prototype.js
