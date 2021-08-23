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

class Abstract {
    constructor () {
        this.init()
    }

    init () {
        // console.log('Abstract loaded')
        this.showMore()
    }

    showMore () {
        const abstract = document.querySelector('.qsa_abstract')
        const block = document.querySelector('.qsa_abstract__text')
        const blockParagraphs = block.querySelectorAll('p')
        let characterSum = 0
        const moreText = document.querySelector('.qsa_abstract__text--shadow')
        const btnMore = document.querySelector('.btn-show__more-text')
        const maxCharacter = 1500
        const characterTolerance = maxCharacter + 150

        blockParagraphs.forEach(paragraph => {
            characterSum += paragraph.textContent.length

            return characterSum
        })

        if (!this.checkCharacterAmount(maxCharacter, characterSum, characterTolerance)) {
            btnMore.remove()
        }

        btnMore.addEventListener('click', function () {
            abstract.parentElement.style.maxHeight = 'unset'
            moreText.classList.add('more')
            block.classList.add('active')
            this.remove()
        })
    }

    checkCharacterAmount (maxCharacter, characterSum, characterTolerance) {
        return characterSum !== characterTolerance && characterSum > maxCharacter
    }
}

/**
 *     @section 4. Export class
 */

export default (new Abstract())

// end of header.js
