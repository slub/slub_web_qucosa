/**
 *    Select
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

class Select {
    constructor () {
        this.init()
    }

    init () {
        // console.log('select loaded')
        this.positionLabel()
        this.changeDefaultLanguage()
        this.createCustomSelects()
    }

    createCustomSelects () {
        const elSelectNative = document.getElementsByClassName('js-selectNative')
        const nativeArray = [...elSelectNative]

        nativeArray.forEach(select => {
            const elSelectCustom = select.nextElementSibling
            const selectWrapper = elSelectCustom.querySelector('.qsa_select__custom-options')
            const iconPath = selectWrapper.dataset.iconpath

            for (let i = 0; i < select.length; i++) {
                if (select.options[i].value) {
                    const optionWrapper = document.createElement('div')

                    optionWrapper.classList.add('qsa_select__custom-option')
                    optionWrapper.dataset.value = select.options[i].value
                    optionWrapper.insertAdjacentHTML('beforeend', `
                    ${select.options[i].text}
                    <svg class="qsa_icon icon--pdf-file icon--pdf-file--absolute icon--base" role="img" width="20" height="20" aria-hidden="true">
                        <title class="sr-only">Icon Check</title>
                        <desc class="sr-only"></desc>
                        <use xlink:href="${iconPath}icon-check"></use>
                    </svg>`
                    )
                    selectWrapper.appendChild(optionWrapper)
                }
            }
        })
        this.styledSelect()
    }

    styledSelect () {
        const elSelectNative = document.getElementsByClassName('js-selectNative')
        const nativeArray = [...elSelectNative]

        nativeArray.forEach(select => {
            const elSelectCustom = select.nextElementSibling
            const elSelectCustomBox = elSelectCustom.children[0]
            const elSelectCustomOpts = elSelectCustom.children[1]
            const customOptsList = Array.from(elSelectCustomOpts.children)
            const optionsCount = customOptsList.length

            let optionChecked = ''
            let optionHoveredIndex = -1

            // Toggle custom select visibility when clicking the box
            elSelectCustomBox.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                const isClosed = !elSelectCustom.classList.contains('isActive')
                if (isClosed) {
                    openSelectCustom()
                } else {
                    closeSelectCustom()
                }
            })

            function openSelectCustom () {
                elSelectCustom.classList.add('isActive')
                // Remove aria-hidden in case this was opened by a user
                elSelectCustom.setAttribute('aria-hidden', false)

                if (optionChecked) {
                    const optionCheckedIndex = customOptsList.findIndex(
                        (el) => el.getAttribute('data-value') === optionChecked
                    )
                    updateCustomSelectHovered(optionCheckedIndex)
                }

                // Add event listeners
                document.addEventListener('click', watchClickOutside)
                document.addEventListener('keydown', supportKeyboardNavigation)
            }

            // Close custom dropdown of select
            function closeSelectCustom () {
                elSelectCustom.classList.remove('isActive')

                elSelectCustom.setAttribute('aria-hidden', true)

                updateCustomSelectHovered(-1)

                // Remove event listeners
                document.removeEventListener('click', watchClickOutside)
                document.removeEventListener('keydown', supportKeyboardNavigation)
            }

            // Check which select in custom dropdown is hovered
            function updateCustomSelectHovered (newIndex) {
                const prevOption = elSelectCustomOpts.children[optionHoveredIndex]
                const option = elSelectCustomOpts.children[newIndex]

                if (prevOption) {
                    prevOption.classList.remove('isHover')
                }
                if (option) {
                    option.classList.add('isHover')
                }

                optionHoveredIndex = newIndex
            }

            // Change text im custom select box
            function updateCustomSelectChecked (value, text) {
                const prevValue = optionChecked

                let elPrevOption = elSelectCustomOpts.querySelector(`[data-value="${prevValue}"`)
                let elOption = elSelectCustomOpts.querySelector(`[data-value="${value}"`)
                const allLanguageSelects = document.querySelectorAll('.qsa_select__language')

                if (elPrevOption) {
                    elPrevOption.classList.remove('isActive')
                }

                if (elOption) {
                    elOption.classList.add('isActive')
                }

                let textElSelectCustomBox = elSelectCustomBox.querySelector('p')
                if (!textElSelectCustomBox.classList.contains('active')) {
                    textElSelectCustomBox.classList.add('active')
                }
                textElSelectCustomBox.innerText = text.trim()
                optionChecked = value

                if (elSelectCustom.isEqualNode(allLanguageSelects[0])) {
                    allLanguageSelects.forEach(languageCustom => {
                        const languageSelect = languageCustom.previousElementSibling
                        const languageSelectCustomBox = languageCustom.children[0]
                        const languageSelectCustomOpts = languageCustom.children[1]

                        elPrevOption = languageSelectCustomOpts.querySelector(`[data-value="${prevValue}"`)
                        elOption = languageSelectCustomOpts.querySelector(`[data-value="${value}"`)

                        if (elPrevOption) {
                            elPrevOption.classList.remove('isActive')
                        }

                        if (elOption) {
                            elOption.classList.add('isActive')
                        }

                        textElSelectCustomBox = languageSelectCustomBox.querySelector('p')
                        if (!textElSelectCustomBox.classList.contains('active')) {
                            textElSelectCustomBox.classList.add('active')
                        }
                        textElSelectCustomBox.innerText = text.trim()
                        languageSelect.value = optionChecked

                        languageSelect.parentElement.querySelector('label').classList.add('qsa_select__label--filled')
                    })
                }
            }

            function watchClickOutside (e) {
                const didClickedOutside = !elSelectCustom.contains(e.target)
                if (didClickedOutside) {
                    closeSelectCustom()
                }
            }

            // Keyboard navigation for custom dropdown
            function supportKeyboardNavigation (e) {
                // press down -> go next
                if (e.keyCode === 40 && optionHoveredIndex < optionsCount - 1) {
                    e.preventDefault() // prevent page scrolling
                    updateCustomSelectHovered(optionHoveredIndex + 1)
                }

                // press up -> go previous
                if (e.keyCode === 38 && optionHoveredIndex > 0) {
                    e.preventDefault() // prevent page scrolling
                    updateCustomSelectHovered(optionHoveredIndex - 1)
                }

                // press Enter or space -> select the option
                if (e.keyCode === 13 || e.keyCode === 32) {
                    e.preventDefault()

                    const option = elSelectCustomOpts.children[optionHoveredIndex]
                    const value = option && option.getAttribute('data-value')

                    if (value) {
                        select.value = value
                        updateCustomSelectChecked(value, option.innerText)
                    }
                    closeSelectCustom()
                }

                // press ESC -> close selectCustom
                if (e.keyCode === 27) {
                    closeSelectCustom()
                }
            }

            // Update selectCustom value when selectNative is changed.
            select.addEventListener('change', (e) => {
                const value = e.target.value
                const elRespectiveCustomOption = elSelectCustomOpts.querySelectorAll(
                    `[data-value="${value}"]`
                )[0]
                updateCustomSelectChecked(value, elRespectiveCustomOption.childNodes[0].nodeValue)
            })

            // Update selectCustom value when an option is clicked or hovered
            customOptsList.forEach(function (elOption, index) {
                elOption.addEventListener('click', (e) => {
                    e.stopImmediatePropagation()
                    const value = e.target.getAttribute('data-value')

                    elOption.parentElement.parentElement.parentElement.querySelector('label').classList.add('qsa_select__label--filled')
                    elOption.parentElement.parentElement.querySelector('p').classList.add('active')

                    // Sync native select to have the same value
                    select.value = value
                    updateCustomSelectChecked(value, e.target.innerText)
                    closeSelectCustom()
                })

                elOption.addEventListener('mouseenter', (e) => {
                    updateCustomSelectHovered(index)
                })
            })
        })
    }

    positionLabel () {
        const nativeInput = document.querySelectorAll('.qsa_select__native')
        const customInput = document.querySelectorAll('.qsa_select__custom-trigger')
        const self = this

        nativeInput.forEach(native => {
            native.addEventListener('focusin', e => {
                self.moveLabelOut(e.target)
            })

            native.addEventListener('change', e => {
                e.target.parentElement.querySelector('label').classList.add('qsa_select__label--filled')
            })
        })

        customInput.forEach(custom => {
            custom.addEventListener('click', e => {
                self.moveLabelOut(e.target.parentElement)
            })
        })

        nativeInput.forEach(native => {
            native.addEventListener('focusout', e => {
                self.moveLabelIn(e.target)
            })
        })

        window.onclick = function (event) {
            if (!event.target.matches('.qsa_select__custom-trigger') && !event.target.matches('.qsa_select__custom-option')) {
                customInput.forEach(custom => {
                    self.moveLabelIn(custom.parentElement)
                })
            }
        }
    }

    moveLabelOut (el) {
        const parent = el.parentElement
        const label = parent.querySelector('label')

        if (label) {
            label.classList.add('qsa_select__label--focused')
        }
    }

    moveLabelIn (el) {
        const parent = el.parentElement
        const label = parent.querySelector('label')

        if (label) {
            label.classList.remove('qsa_select__label--focused')
        }
    }

    changeDefaultLanguage () {

    }
}

/**
 *     @section 4. Export class
 */

export default (new Select())

// end of select.js
