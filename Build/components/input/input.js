/**
 *    Input
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

class Input {
    constructor () {
        this.init()
    }

    init () {
        // console.log('search loaded')
        this.triggerInput()
        this.fileUpload()
        this.countKeywords()
        this.removeFile()
        this.addFile()
    }

    triggerInput () {
        const searchInput = document.querySelectorAll('.qsa_input-group__input-text')

        searchInput.forEach(input => {
            input.addEventListener('input', e => {
                e.target.setAttribute('data-empty', !e.currentTarget.value)
            })
        })
    }

    fileUpload () {
        // trigger upload on space & enter
        // = standard button functionality
        const buttonLabel = document.querySelectorAll('.qsa_input-group-file__label span[role="button"]')
        const fileUpload = document.querySelectorAll('.qsa_input-group-file__input[type="file"]')

        buttonLabel.forEach(label => {
            label.addEventListener('keypress keyup', e => {
                if (e.which === 32 || e.which === 13) {
                    e.preventDefault()
                    label.click()
                }
            })
        })

        fileUpload.forEach(file => {
            file.addEventListener('change', e => {
                const filename = e.target.value.split('\\').pop()

                file.nextElementSibling.value = filename
                file.nextElementSibling.setAttribute('placeholder', filename)

                file.parentElement.classList.add('qsa_input-group-file--filled')
                this.removeFile()
            })
        })
    }

    countKeywords () {
        const keyWordWrapper = document.querySelectorAll('.qsa_input-group__keywords')

        keyWordWrapper.forEach(wrapper => {
            const input = wrapper.querySelector('input')
            const counter = wrapper.querySelector('.qsa_input-group__count')

            input.addEventListener('input', event => {
                const target = event.currentTarget
                const content = target.value
                const maxLength = target.dataset.maxlength
                const words = content.split(',').filter(item => item)

                if (words.length > maxLength) {
                    const lastIndex = content.lastIndexOf(',')
                    target.value = content.substring(0, lastIndex)
                    return false
                } else {
                    counter.innerHTML = words.length
                }
            })
        })
    }

    removeFile () {
        const removeFileButton = document.querySelectorAll('.qsa_input-group-file-remove')

        removeFileButton.forEach(button => {
            button.addEventListener('click', e => {
                e.stopImmediatePropagation()
                console.log('click')
                const fileInput = e.target.parentElement
                const fileInputParent = fileInput.parentElement.parentElement
                const addNewButton = fileInputParent.querySelector('.qsa_wizard__wrapper-form-element-add')

                console.log(fileInput)

                fileInput.parentElement.remove()

                if (fileInputParent.querySelectorAll('.qsa_input-group-file').length === 0) {
                    addNewButton.classList.remove('d-none')
                }

                addNewButton.addEventListener('click', e => {
                    e.stopPropagation()
                    addNewButton.classList.add('d-none')
                    this.addFileMarkup(fileInputParent)
                })
            })
        })
    }

    addFile () {
        const addFileButton = document.querySelectorAll('.qsa_input-group-file-add')

        addFileButton.forEach(button => {
            const formWrapper = button.parentElement.parentElement.parentElement

            button.addEventListener('click', e => {
                this.addFileMarkup(formWrapper)
            })
        })
    }

    addFileMarkup (formWrapper) {
        const random = Math.random()
        formWrapper.insertAdjacentHTML('beforeend', `<div class="qsa_input-group" data-input="file">
    <div class="qsa_input-group-file" data-showinsummary="true">
        <label class="qsa_input-group-file__label" for="fileupload-${random}" id="buttonlabel-${random}">
            <span role="button" aria-controls="filename" tabindex="0">
                <svg class="qsa_icon icon--upload icon--base" role="img" width="20" height="20" aria-hidden="true">
                    <title class="sr-only">Icon publish</title>
                    <desc class="sr-only">Icon um Datei hochzuladen</desc>
                    <use xlink:href="../../icon/icon.min.svg#icon-upload"></use>
                </svg>
            </span>
        </label>
        <span class="qsa_input-group-file-size">PDF | <span>23.8 MB</span></span>
        <svg class="qsa_icon icon--pdf-file icon--base" role="img" width="20" height="20" aria-hidden="true">
            <title class="sr-only">Icon pdf-file</title>
            <desc class="sr-only"></desc>
            <use xlink:href="../../icon/icon.min.svg#icon-pdf-file"></use>
        </svg>
        <button class="qsa_input-group-file-remove btn-outline__without">
            <span class="sr-only">Ausgewählte PDF löschen</span>
            <svg class="qsa_icon icon--delete-bin icon--base" role="img" width="20" height="20" aria-hidden="true">
                <title class="sr-only">Icon delete-bin</title>
                <desc class="sr-only"></desc>
                <use xlink:href="../../icon/icon.min.svg#icon-delete-bin"></use>
            </svg>
        </button>
            <button class="qsa_input-group-file-add btn-outline__without">
                <span class="sr-only">Eine Weitere Datei hinzufügen</span>
                <svg class="qsa_icon icon--add-btn icon--base" role="img" width="20" height="20" aria-hidden="true">
                    <title class="sr-only">Icon add-btn</title>
                    <desc class="sr-only"></desc>
                    <use xlink:href="../../icon/icon.min.svg#icon-add-btn"></use>
                </svg>
            </button>
                <input class="qsa_input-group-file__input" type="file" accept="application/pdf" id="fileupload-${random}">
                <input class="qsa_input-group-file__text-input" type="text" id="${random}--filename" autocomplete="off" readonly="" placeholder="Eigene Datei hochladen">
                <label class="qsa_input-group-file__text-label" for="${random}--filename">
                    Eigene Datei hochladen
        </label>
    </div>
</div>`)

        this.removeFile()
        this.fileUpload()
        this.addFile()
    }
}

/**
 *     @section 4. Export class
 */

export default (new Input())

// end of input.js
