/**
 *    Content sidebar
 *
 *    @tableofcontent
 *      1. Dependencies
 *      2. Class
 *      3. Export class
 *
 */

/**
 *     @section 1. Dependencies
 */

// import css dependencies

/**
 *     @section 2. Class
 */

class ContentSidebar {
    constructor () {
        // console.log('slider loaded')
        this.init()
    }

    init () {
        this.toggleSidebar()

        console.log('lightbox loaded')
        // eslint-disable-next-line no-unused-vars,no-undef
        const lightbox = new SimpleLightbox('.lightbox a')
        lightbox.on('shown.simplelightbox', function () {
            const closeButton = document.querySelectorAll('.sl-close')
            const caption = document.querySelectorAll('.sl-caption')
            const prevButton = document.querySelectorAll('.sl-prev')
            const nextButton = document.querySelectorAll('.sl-next')
            const image = document.querySelector('.qsa_sidebar__image-wrapper-toggle')

            closeButton.forEach(button => {
                button.setAttribute('aria-label', 'Bildergalerie schließen')

                button.setAttribute('tabindex', '1')

                // leave focus on the element
                button.addEventListener('click', () => {
                    image.focus()
                    button.setAttribute('tabindex', '0')
                })
            })

            caption.forEach(caption => {
                const currentText = caption.innerHTML
                caption.innerHTML = '<p>' + currentText + '</p>'
            })

            prevButton.forEach(button => {
                button.setAttribute('aria-label', 'Nächstes Bild anzeigen')
            })

            nextButton.forEach(button => {
                button.setAttribute('aria-label', 'Vorheriges Bild anzeigen')
            })
        })
    }

    toggleSidebar () {
        const sliderButton = document.querySelectorAll('[data-button="sidebarSlider"]')
        const closeSidebar = document.querySelector('.qsa_sidebar__close')
        const sidebar = document.querySelector('.qsa_content-area__sidebar')
        const body = document.querySelector('body')
        const self = this

        if (sliderButton && closeSidebar) {
            sliderButton.forEach(button => {
                button.addEventListener('keydown', e => {
                    if (e.which === 32 || e.which === 13) {
                        self.sliderButtonClick(e.target, sidebar, body)
                    }
                })

                button.onclick = function () {
                    self.sliderButtonClick(this, sidebar, body)
                }
            })

            closeSidebar.addEventListener('keydown', e => {
                if (e.which === 32 || e.which === 13) {
                    self.slideBarClose(sliderButton, sidebar, body)
                }
            })

            closeSidebar.onclick = function () {
                self.slideBarClose(sliderButton, sidebar, body)
            }
        }
    }

    sliderButtonClick (el, sidebar, body) {
        el.classList.add('checked')
        sidebar.classList.toggle('qsa_content-area__sidebar--show')
        body.classList.toggle('no-scroll')
    }

    slideBarClose (sliderButton, sidebar, body) {
        sliderButton.forEach(button => {
            button.classList.remove('checked')
        })
        sidebar.classList.toggle('qsa_content-area__sidebar--show')
        body.classList.toggle('no-scroll')
    }
}

/**
 *     @section 3. Export class
 */

export default (new ContentSidebar())

// end of content-sidebar.js
