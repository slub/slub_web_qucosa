/**
 *    Textarea
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

class Textarea {
    constructor () {
        this.init()
    }

    init () {
        this.countCharacters()
    }

    countCharacters () {
        const textareas = document.querySelectorAll('.qsa_text-area')

        textareas.forEach(textarea => {
            const textAreaInput = textarea.querySelector('.qsa_text-area__field')
            const textAreaCounter = textarea.querySelector('.qsa_text-area__count')

            textAreaInput.addEventListener('input', event => {
                const target = event.currentTarget
                const maxLength = target.getAttribute('maxlength')
                const currentLength = target.value.length

                if (currentLength >= maxLength) {
                    return console.log('You have reached the maximum number of characters.')
                }

                textAreaCounter.innerHTML = currentLength
            })
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new Textarea())

// end of input.js
