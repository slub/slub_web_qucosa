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

class Connections {
    constructor () {
        this.init()
    }

    init () {
        // console.log('Connections loaded')
        this.showMore()
    }

    showMore () {
        const element = document.querySelectorAll('.qsa_connections__publications-item')
        const data = Array.from(element)
        const btnMore = document.querySelector('.btn-show__more')
        const step = 4
        let item = 0

        data.slice(step).forEach((el) => { el.style.display = 'none' })
        item += step

        btnMore.addEventListener('click', function (el) {
            const moreEl = data.slice(item, item + step)
            moreEl.forEach((el) => { el.style.display = 'block' })
            item += step

            if (moreEl.length < 4) {
                this.remove()
            }
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new Connections())

// end of header.js
