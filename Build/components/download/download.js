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

class Downloads {
    constructor () {
        this.init()
    }

    init () {
        // console.log('Downloads loaded')
        this.show()
        this.download()
    }

    show () {
        const downTriggerExpand = document.querySelector('.qsa_download-zip')
        const downTrigger = document.querySelector('.qsa_download__trigger')
        const downList = document.querySelector('.qsa_download__list')
        const bgGradientU = document.querySelector('.qsa_download__bg-gradient--upper')
        const bgGradientL = document.querySelector('.qsa_download__bg-gradient--lower')
        const downloadFile = document.querySelectorAll('.qsa_download__file')

        // List of File are not at first available for tab
        if (!downList.classList.contains('active')) {
            downloadFile.forEach(file => {
                file.setAttribute('tabindex', '-1')
            })
        }

        if (downloadFile.length === 1) {
            downloadFile.forEach(file => {
                file.setAttribute('tabindex', '0')
            })
        }

        downTriggerExpand.addEventListener('click', function () {
            downTrigger.classList.toggle('active')
            downList.classList.toggle('active')
            bgGradientU.classList.toggle('active')
            bgGradientL.classList.toggle('active')
            downloadFile.forEach(file => {
                file.setAttribute('tabindex', '0')
            })
        })
    }

    download () {
        const downloadTrigger = document.querySelectorAll('.qsa_download__trigger-link')

        downloadTrigger.forEach(trigger => {
            trigger.addEventListener('click', e => {
                e.stopPropagation()
            })
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new Downloads())

// end of downloads.js
