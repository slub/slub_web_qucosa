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
        this.toggleAccordionItem()
        this.toggleAccordion()
        this.switchId()
        this.openAccItemOnLoad()
    }

    toggleAccordionItem () {
        const acc = document.querySelectorAll('.qsa_accordion__btn')
        let i

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click', function (e) {
                const self = this
                const panel = this.nextElementSibling
                const wrapper = findAncestor(self, '.qsa_accordion__items')
                const accordionItems = wrapper.querySelectorAll('.qsa_accordion__item')

                self.classList.toggle('active')
                panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + 'px'

                const activeAcc = document.querySelectorAll('.qsa_accordion__btn.active')
                if (accordionItems.length === activeAcc.length) {
                    wrapper.querySelector('.qsa_accordion__trigger').classList.add('active')
                } else {
                    wrapper.querySelector('.qsa_accordion__trigger').classList.remove('active')
                }
            })
        }
    }

    toggleAccordion () {
        const trigger = document.querySelectorAll('.qsa_accordion__trigger')
        const abstractAcc = document.querySelector('.qsa_accordion__btn[data-type="abstract"]')

        let i
        for (i = 0; i < trigger.length; i++) {
            trigger[i].addEventListener('click', function () {
                const self = this
                self.classList.toggle('active')

                const ariaExpanded = self.getAttribute('aria-expanded')

                if (ariaExpanded === 'true') {
                    self.setAttribute('aria-expanded', false)
                } else if (ariaExpanded === 'false') {
                    self.setAttribute('aria-expanded', true)
                }
                const wrapper = this.parentElement
                const items = wrapper.getElementsByClassName('qsa_accordion__btn')

                if (self.classList.contains('active')) {
                    for (let j = 0; j < items.length; j++) {
                        const panel = items[j].nextElementSibling
                        if (!items[j].classList.contains('active')) {
                            items[j].setAttribute('aria-expanded', 'true')
                            panel.style.maxHeight = panel.scrollHeight + 'px'
                            items[j].classList.add('active')
                        }
                    }
                } else {
                    for (let k = 0; k < items.length; k++) {
                        const panel = items[k].nextElementSibling
                        panel.style.maxHeight = null
                        items[k].classList.remove('active')
                        items[k].setAttribute('aria-expanded', 'false')
                    }
                }
            })
        }

        if (abstractAcc) {
            abstractAcc.click()
        }
    }

    switchId () {
        const accButton = document.querySelectorAll('.qsa_accordion__btn')

        accButton.forEach(item => {
            item.addEventListener('click', () => {
                const id = item.dataset.id
                window.location.hash = `#btn_${id}`
            })
        })
    }

    openAccItemOnLoad () {
        let id = window.location.hash.substring(1)
        id = id.replace('btn_', '')
        const item = document.getElementById(id)

        console.log(id)

        if (id) {
            const accButton = item.nextElementSibling
            const panel = accButton.nextElementSibling
            const topPos = accButton.getBoundingClientRect().top + window.pageYOffset

            setTimeout(() => {
                window.scrollTo({
                    top: topPos,
                    behavior: 'smooth'
                })
            }, 700)

            accButton.classList.toggle('active')
            panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + 'px'
            accButton.focus({ preventScroll: true })
        }
    }
}

function findAncestor (el, sel) {
    while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el, sel)));
    return el
}

/**
 *     @section 4. Export class
 */

export default (new Header())

// end of header.js
