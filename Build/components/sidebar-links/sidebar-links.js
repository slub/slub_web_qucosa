/**
 *    SidebarLinks
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

class SidebarLinks {
    constructor () {
        this.init()
    }

    init () {
        this.toggleShareSidebar()
    }

    toggleShareSidebar () {
        const shareSliderButton = document.querySelector('#shareSlider')
        const shareSidebar = document.querySelector('.qsa_sidebar-links__share')
        const mailLink = document.querySelector('#mailLink')
        const twitterLink = document.querySelector('#twitterLink')
        const facebookLink = document.querySelector('#facebookLink')
        const title = document.querySelector('.qsa_contents-head-area__title').innerHTML

        // href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkatalog.slub-dresden.de%2Fid%2F0-1098133692%2F%23detail"

        mailLink.setAttribute('href', 'mailto:?subject=' + title + '&body=' + window.location)
        twitterLink.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + title + '&url=' + window.location)
        facebookLink.setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location)

        shareSliderButton.addEventListener('click', () => {
            shareSidebar.classList.toggle('qsa_sidebar-links__share--expanded')
            shareSliderButton.classList.toggle('active')
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new SidebarLinks())

// end of sidebar-links.js
