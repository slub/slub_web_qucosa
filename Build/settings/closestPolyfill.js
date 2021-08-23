/**
 *    Closest-Ployfill
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

class ClosestPolyfill {
    constructor () {
        this.init()
    }

    init () {
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector
        }

        if (!Element.prototype.closest) {
            Element.prototype.closest = function (s) {
                let el = this

                do {
                    if (Element.prototype.matches.call(el, s)) return el
                    el = el.parentElement || el.parentNode
                } while (el !== null && el.nodeType === 1)
                return null
            }
        }
    }
}

/**
 *     @section 4. Export class
 */

export default (new ClosestPolyfill())

// end of closestPolyfill.js
