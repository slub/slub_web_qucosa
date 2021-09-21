/**
 *    Wizard
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

import Select from '../select/select'
import ProgressBar from '../progress-bar/progress-bar'

/**
 *     @section 3. Class
 */

class Wizard {
    constructor () {
        this.init()
        this.errorModalShown = false
    }

    init () {
        this.openWizard()
        this.showHintText()
        this.showSteps()
        this.copyField()
        this.removeField()
        this.copyGroup()
        this.removeGroup()
        // this.checkInputField()
    }

    openWizard () {
        const wizardBtn = document.querySelector('#openWizard')
        const wizardContainer = document.querySelector('#qucosaWizard')
        const body = document.querySelector('body')
        const closeWizardWarning = $('#wizardCloseWarning')
        const closeWizardButton = document.querySelectorAll('.qsa_wizard__header-btn')

        closeWizardButton.forEach(button => {
            button.addEventListener('click', () => {
                closeWizardWarning.modal('show')
                document.querySelector('#closeWizard').addEventListener('click', () => {
                    wizardContainer.classList.toggle('qsa_wizard--open')
                    body.classList.toggle('no-scroll')
                })
            })
        })

        wizardBtn.addEventListener('click', () => {
            wizardContainer.classList.toggle('qsa_wizard--open')
            body.classList.toggle('no-scroll')
        })

        if (window.location.hash === '#qucosaWizard') {
            wizardContainer.classList.toggle('qsa_wizard--open')
            body.classList.toggle('no-scroll')
        }
    }

    showHintText () {
        const listItem = document.querySelectorAll('.qsa_wizard__wrapper-list-item')
        const textElement = document.querySelectorAll('.qsa_wizard__wrapper-text-element')
        const defaultText = document.querySelector('.qsa_wizard__wrapper-text-default')

        window.addEventListener('mouseover', e => {
            if (e.target.getAttribute('class') !== 'qsa_wizard__wrapper-list-item-link') {
                if (defaultText.classList.contains('qsa_wizard__wrapper-text-default--hidden')) {
                    defaultText.classList.remove('qsa_wizard__wrapper-text-default--hidden')
                }
            }
        })

        listItem.forEach(item => {
            item.addEventListener('mouseover', (e) => {
                const itemID = e.target.getAttribute('id')
                const activeText = Array.from(textElement).find(el => el.dataset.id === itemID)

                if(activeText) {
                    defaultText.classList.add('qsa_wizard__wrapper-text-default--hidden')
                    activeText.classList.add('qsa_wizard__wrapper-text-element--visible')
                }
            })
        })

        listItem.forEach(item => {
            item.addEventListener('mouseout', (e) => {
                const itemID = e.target.getAttribute('id')
                const activeText = Array.from(textElement).find(el => el.dataset.id === itemID)

                if(activeText) {
                    activeText.classList.remove('qsa_wizard__wrapper-text-element--visible')
                }
            })
        })
    }

    showSteps () {
        const itemLink = document.querySelectorAll('.qsa_wizard__wrapper-list-item-link')
        const firstPage = document.querySelector('.qsa_wizard__wrapper-first')
        const secondPage = document.querySelector('.qsa_wizard__wrapper-steps')
        const progressItems = document.querySelector('.qsa_progress-bar__container-list')

        if (!document.querySelectorAll('.qsa_wizard_non-modal')) {
            itemLink.forEach(item => {
                item.addEventListener('click', e => {
                    firstPage.classList.add('d-none')
                    secondPage.classList.remove('d-none')

                    secondPage.querySelector('#tab-1').classList.remove('d-none')
                    progressItems.firstElementChild.classList.add('active')
                    progressItems.firstElementChild.setAttribute('aria-current', 'location')
                })
            })
        }
        this.checkOverflow()
    }

    checkOverflow () {
        const progressbarList = document.querySelector('.qsa_progress-bar__container-list')
        const progressbarContainer = document.querySelector('.qsa_progress-bar__container')
        const progressbar = document.querySelector('.qsa_progress-bar')
        const progressbarIndicator = document.querySelector('.qsa_progress-bar .qsa_btn--round')

        if(progressbarList) {
            if (progressbarList.clientWidth > progressbarContainer.clientWidth) {
                progressbarIndicator.style.display = 'block'
                progressbarIndicator.addEventListener('click', () => {
                    progressbar.scrollBy({
                        left: 100,
                        behavior: 'smooth'
                    })
                    progressbarIndicator.style.display = 'none'
                })
            }
        }
    }

    generateSummary () {
        const summaryPage = document.querySelector('.qsa_wizard__wrapper-steps .qsa_wizard__wrapper-content:last-child')
        const summaryPageInner = summaryPage.querySelector('.qsa_wizard__wrapper-form')
        const currentActive = document.querySelector('.qsa_progress-bar__container-item.active')
        const summary = []
        const self = this

        summaryPageInner.innerHTML = ''

        self.getPreviousSiblings(currentActive).forEach((step, idx, stepArray) => {
            if (idx < stepArray.length) {
                const stepTitle = step.querySelector('.qsa_progress-bar__container-item-title').textContent
                const stepID = step.dataset.id
                const stepWrapper = document.querySelector('#' + stepID)
                const stepFormElement = stepWrapper.querySelectorAll('.qsa_wizard__wrapper-form-element')
                const requiredInputs = stepWrapper.querySelectorAll('input[data-mandatory=\'1\']')
                const requiredSelects = stepWrapper.querySelectorAll('.qsa_select__native[data-mandatory=\'1\']')
                const requiredTextFields = stepWrapper.querySelectorAll('.qsa_text-area__field[data-mandatory=\'1\']')
                const requiredCheckBoxes = stepWrapper.querySelectorAll('.input-field-checkbox[data-mandatory=\'1\']')
                const stepElement = {}

                requiredInputs.forEach(input => {
                    console.log(input)
                    console.log(input.dataset.mandatory)
                    if (!input.value) {
                        if (!input.classList.contains('qsa_input-group__input--not-filled')) {
                            input.classList.add('qsa_input-group__input--not-filled')

                            if (!this.errorModalShown) {
                                $('#wizardErrorModal').modal('show')
                                this.errorModalShown = true
                            }
                        }
                    } else {
                        if (input.classList.contains('qsa_input-group__input--not-filled')) {
                            input.classList.remove('qsa_input-group__input--not-filled')
                        }
                    }
                })

                requiredCheckBoxes.forEach(checkbox => {
                    if (!checkbox.value) {
                        if (!checkbox.closest('.qsa_wizard__wrapper-form-element').classList.contains('qsa_input-group__input--not-filled')) {
                            checkbox.closest('.qsa_wizard__wrapper-form-element').classList.add('qsa_input-group__input--not-filled')

                            if (!this.errorModalShown) {
                                $('#wizardErrorModal').modal('show')
                                this.errorModalShown = true
                            }
                        }
                    } else {
                        if (checkbox.closest('.qsa_wizard__wrapper-form-element').classList.contains('qsa_input-group__input--not-filled')) {
                            checkbox.closest('.qsa_wizard__wrapper-form-element').classList.remove('qsa_input-group__input--not-filled')
                        }
                    }
                })

                requiredSelects.forEach(select => {
                    const customSelect = select.nextElementSibling.querySelector('.qsa_select__custom-trigger')

                    if (!select.value) {
                        if (!customSelect.classList.contains('qsa_select__custom-trigger--not-filled')) {
                            select.nextElementSibling.querySelector('.qsa_select__custom-trigger').classList.add('qsa_select__custom-trigger--not-filled')
                        }
                    } else {
                        if (customSelect.classList.contains('qsa_select__custom-trigger--not-filled')) {
                            select.nextElementSibling.querySelector('.qsa_select__custom-trigger').classList.remove('qsa_select__custom-trigger--not-filled')
                        }
                    }
                })

                requiredTextFields.forEach(textField => {
                    if (!textField.value) {
                        if (!textField.classList.contains('qsa_text-area__field--not-filled')) {
                            textField.classList.add('qsa_text-area__field--not-filled')
                        }
                    } else {
                        if (textField.classList.contains('qsa_text-area__field--not-filled')) {
                            textField.classList.remove('qsa_text-area__field--not-filled')
                        }
                    }
                })

                stepElement.title = stepTitle
                stepElement.id = stepID
                stepElement.validValues = []
                stepElement.inputs = []

                stepFormElement.forEach(element => {
                    const textInputs = element.querySelectorAll('div[data-input="text"]')
                    const selects = element.querySelectorAll('.qsa_select__wrapper')
                    const dates = element.querySelectorAll('.qsa_field__datepicker-wrap')
                    const files = element.querySelectorAll('.qsa_input-group-file')
                    const textAreas = element.querySelectorAll('.qsa_text-area')
                    const checkboxes = element.querySelectorAll('.input-field-checkbox')
                    const stepFormPart = []

                    textInputs.forEach(input => {
                        const inputGroup = input.closest('.qsa_input-group')
                        const errorMessage = inputGroup.querySelector('.qsa_input-group__error')
                        const inputFilled = {}
                        inputFilled.name = input.querySelector('.qsa_input-group__label').textContent
                        inputFilled.value = input.querySelector('.qsa_input-group__input-text').value
                        inputFilled.type = 'text'
                        inputFilled.required = input.querySelector('.qsa_input-group__input-text').hasAttribute('required')
                        inputFilled.showInSummary = input.dataset.showinsummary
                        inputFilled.pattern = input.querySelector('.qsa_input-group__input-text').getAttribute('pattern')
                        inputFilled.validPattern = true

                        if (inputFilled.pattern) {
                            if(inputFilled.value) {
                                if (!inputFilled.value.match(inputFilled.pattern)) {
                                    inputFilled.validPattern = false
                                    if (!input.querySelector('.qsa_input-group__input-text').classList.contains('qsa_input-group__input--not-filled')) {
                                        input.querySelector('.qsa_input-group__input-text').classList.add('qsa_input-group__input--not-filled')
                                    }
                                    if (errorMessage.classList.contains('d-none')) {
                                        errorMessage.classList.remove('d-none')
                                    }
                                } else {
                                    inputFilled.validPattern = true
                                    if (!errorMessage.classList.contains('d-none')) {
                                        errorMessage.classList.add('d-none')
                                    }

                                    if (input.querySelector('.qsa_input-group__input-text').classList.contains('qsa_input-group__input--not-filled')) {
                                        input.querySelector('.qsa_input-group__input-text').classList.remove('qsa_input-group__input--not-filled')
                                    }
                                }
                            }
                        }

                        if (!inputFilled.value && inputFilled.required || !inputFilled.validPattern) {
                            stepElement.validValues.push('notValid')
                        } else {
                            stepElement.validValues.push('valid')
                        }

                        stepFormPart.push(inputFilled)
                    })

                    selects.forEach(select => {
                        const selectValue = select.querySelector('.qsa_select__native')
                        const selectFilled = {}
                        selectFilled.name = select.querySelector('.qsa_select__label').textContent
                        selectFilled.value = selectValue.options[selectValue.selectedIndex].text
                        selectFilled.type = 'select'
                        selectFilled.required = selectValue.hasAttribute('required')
                        selectFilled.showInSummary = select.dataset.showinsummary

                        if (!selectFilled.value && selectFilled.required) {
                            stepElement.validValues.push('notValid')
                        } else {
                            stepElement.validValues.push('valid')
                        }

                        stepFormPart.push(selectFilled)
                    })

                    dates.forEach(date => {
                        const dateFilled = {}
                        dateFilled.name = date.querySelector('label').textContent
                        dateFilled.value = date.querySelector('input').value
                        dateFilled.type = 'date'
                        dateFilled.required = date.querySelector('input').hasAttribute('required')
                        dateFilled.showInSummary = date.dataset.showinsummary

                        if (!dateFilled.value && dateFilled.required) {
                            stepElement.validValues.push('notValid')
                        } else {
                            stepElement.validValues.push('valid')
                        }

                        stepFormPart.push(dateFilled)
                    })

                    checkboxes.forEach(checkbox => {
                        const checkboxFilled = {}
                        checkboxFilled.value = checkbox.value
                        checkboxFilled.required = checkbox.dataset.mandatory

                        if (!checkboxFilled.value && checkboxFilled.required === '1') {
                            stepElement.validValues.push('notValid')
                        } else {
                            stepElement.validValues.push('valid')
                        }

                        stepFormPart.push(checkboxFilled)
                    })

                    files.forEach(file => {
                        const fileFilled = {}
                        fileFilled.value = file.querySelector('.qsa_input-group-file__text-input').value
                        fileFilled.size = file.querySelector('.qsa_input-group-file-size span').textContent
                        fileFilled.type = 'file'
                        fileFilled.required = file.querySelector('.qsa_input-group-file__text-input').hasAttribute('required')
                        fileFilled.showInSummary = file.dataset.showinsummary

                        if (!fileFilled.value && fileFilled.required) {
                            stepElement.validValues.push('notValid')
                        } else {
                            stepElement.validValues.push('valid')
                        }

                        stepFormPart.push(fileFilled)
                    })

                    textAreas.forEach(textArea => {
                        const textAreaFilled = {}
                        textAreaFilled.value = textArea.querySelector('.qsa_text-area__field').value
                        textAreaFilled.type = 'textarea'
                        textAreaFilled.required = textArea.querySelector('.qsa_text-area__field').hasAttribute('required')
                        textAreaFilled.showInSummary = textArea.dataset.showinsummary

                        if (!textAreaFilled.value && textAreaFilled.required) {
                            stepElement.validValues.push('notValid')
                        } else {
                            stepElement.validValues.push('valid')
                        }

                        stepFormPart.push(textAreaFilled)
                    })

                    stepElement.inputs.push(stepFormPart)

                    stepElement.isValid = !stepElement.validValues.includes('notValid')
                })
                summary.push(stepElement)
            }
        })

        const finalSummary = summary.reverse()

        finalSummary.forEach(form => {
            const formElementWrapper = document.createElement('div')
            formElementWrapper.classList.add('qsa_wizard__wrapper-form-element')

            formElementWrapper.innerHTML = `<div class="qsa_wizard__wrapper-form-element-header qsa_wizard__wrapper-form-element-header-edit"><h3 class="h5">${form.title}</h3>
                <button type="button" data-step="${form.id}" class="btn qsa_wizard__wrapper-form-element-edit qsa_btn--transparent" aria-label="Bearbeiten">
                    <span data-step="${form.id}" class="qsa_wizard__wrapper-form-element-edit--invalid d-none">Unvollständig! Angaben bitte überarbeiten</span>
                    <span data-step="${form.id}" class="qsa_wizard__wrapper-form-element-edit--valid d-none">Bearbeiten</span>
                    <svg data-step="${form.id}" class="qsa_icon icon--edit icon--base" role="img" width="18" height="18" aria-hidden="true">
                        <title class="sr-only">Icon edit</title>
                        <desc class="sr-only">Ein Stift</desc>
                        <use xlink:href="../../icon/icon.min.svg#icon-edit"></use>
                    </svg>
                </button>
            </div>`

            ProgressBar.switchTabs()

            form.inputs.forEach(inputGroup => {
                let show = false
                const inputWrapper = document.createElement('div')
                inputWrapper.classList.add('qsa_wizard__wrapper-form-element')

                inputGroup.forEach(input => {
                    if (input.value && input.showInSummary) {
                        show = true

                        if (input.type === 'file') {
                            const fileWrapper = document.createElement('div')
                            const random = Math.random()
                            fileWrapper.classList.add('qsa_wizard__summary-file')
                            fileWrapper.insertAdjacentHTML('beforeend', `<div class="qsa_input-group-file qsa_input-group-file--filled">
                            <span class="qsa_input-group-file-size">PDF | <span>${input.size}</span></span>
                                <svg class="qsa_icon icon--pdf-file icon--pdf-file--absolute icon--base" role="img" width="20" height="20" aria-hidden="true">
                                    <title class="sr-only">Icon pdf-file</title>
                                    <desc class="sr-only"></desc>
                                    <use xlink:href="./assets/icons/icon.min.svg#icon-pdf-file"></use>
                                </svg>
                            <input class="qsa_input-group-file__text-input" type="text" id="${random}--filename" autocomplete="off" readonly="" placeholder="${input.value}">
                            <label class="qsa_input-group-file__text-label" for="${random}--filename">
                                Eigene Datei hochladen
                            </label>
                        </div>`)

                            inputWrapper.appendChild(fileWrapper)
                        } else {
                            const inputTitleWrapper = document.createElement('p')
                            inputTitleWrapper.classList.add('qsa_wizard__summary-title')
                            inputTitleWrapper.innerHTML = input.name ? input.name : ''

                            const inputValueWrapper = document.createElement('p')
                            inputValueWrapper.classList.add('qsa_wizard__summary-value')
                            if (input.type === 'textarea') {
                                inputValueWrapper.classList.add('qsa_wizard__summary-value--thin')
                            }
                            inputValueWrapper.innerHTML = input.value ? input.value : ''

                            inputWrapper.appendChild(inputTitleWrapper)
                            inputWrapper.appendChild(inputValueWrapper)
                        }
                    }
                })
                if (show) {
                    formElementWrapper.appendChild(inputWrapper)
                }
            })

            summaryPage.querySelector('.qsa_wizard__wrapper-form').appendChild(formElementWrapper)
            self.checkValidity(form)
        })
    }

    checkValidity (form) {
        const tab = document.querySelector('#' + form.id)
        const tabProgress = document.querySelector(`.qsa_progress-bar__container-item[data-id="${form.id}"]`)
        const editButtonInvalid = document.querySelector(`.qsa_wizard__wrapper-form-element-edit--invalid[data-step="${form.id}"]`)
        const editButtonValid = document.querySelector(`.qsa_wizard__wrapper-form-element-edit--valid[data-step="${form.id}"]`)

        if (!form.isValid) {
            if (tab.querySelector('.qsa_content-area__warning')) {
                tab.querySelector('.qsa_content-area__warning').classList.remove('qsa_content-area__warning--hidden')
                tabProgress.classList.add('qsa_progress-bar__container-item--invalid')

                if (tabProgress.classList.contains('qsa_progress-bar__container-item--valid')) {
                    tabProgress.classList.remove('qsa_progress-bar__container-item--valid')
                }

                if (editButtonInvalid.classList.contains('d-none')) {
                    editButtonInvalid.classList.remove('d-none')
                    editButtonInvalid.classList.add('active')
                }

                if (!editButtonValid.classList.contains('d-none')) {
                    editButtonValid.classList.add('d-none')
                    editButtonValid.classList.remove('active')
                }
            }
        } else {
            if (tab.querySelector('.qsa_content-area__warning')) {
                tab.querySelector('.qsa_content-area__warning').classList.add('qsa_content-area__warning--hidden')
                tabProgress.classList.add('qsa_progress-bar__container-item--valid')

                if (tabProgress.classList.contains('qsa_progress-bar__container-item--invalid')) {
                    tabProgress.classList.remove('qsa_progress-bar__container-item--invalid')
                }

                if (!editButtonInvalid.classList.contains('d-none')) {
                    editButtonInvalid.classList.add('d-none')
                    editButtonInvalid.classList.remove('active')
                }

                if (editButtonValid.classList.contains('d-none')) {
                    editButtonValid.classList.remove('d-none')
                    editButtonValid.classList.add('active')
                }
            }
        }

        if (document.querySelectorAll('.qsa_progress-bar__container-item--invalid').length === 0) {
            document.querySelector('.qsa_wizard__wrapper-button-send').classList.remove('qsa_wizard__wrapper-button--disabled')
            document.querySelector('.qsa_wizard__wrapper-button-send').addEventListener('click', () => {
                document.querySelector('.qsa_wizard__wrapper-steps').classList.add('d-none')
                document.querySelector('.qsa_wizard__wrapper-last').classList.remove('d-none')
                document.querySelector('.qsa_wizard__wrapper-last .qsa_wizard__wrapper-content').classList.remove('d-none')

                document.querySelector('.qsa_wizard__wrapper-last #reloadWizard').addEventListener('click', () => {
                    window.location.hash = '#'
                    window.location.reload()
                })
            })
        }

        // focus on the first item stay
        if (this.errorModalShown === true) {
            const wizardErrorModal = document.querySelector('#wizardErrorModal')
            const wizardErrorButton = wizardErrorModal.querySelector('.qsa_btn__submit')

            wizardErrorButton.addEventListener('click', e => {
                const tabNext = tab.nextElementSibling
                const tabNextFirstEl = tabNext.querySelectorAll('input, select, textarea')[0]

                setTimeout(() => {
                    tabNextFirstEl.focus()
                }, 1)
            })
        }
    }

    copyField () {
        const newFormField = document.querySelectorAll('button[name="add_field"]')
        const self = this
        // clonedNode.classList.add('qsa_wizard__wrapper-content-block--cloned')

        newFormField.forEach(groupButton => {
            groupButton.addEventListener('click', e => {
                const field = groupButton.previousElementSibling
                const fieldset = field.parentElement
                const clonedNode = field.cloneNode(true)
                const groupId = new Date().getTime()
                // const ajaxURL = groupButton.dataset('ajax')
                // const groupIndex = groupButton.dataset('index')
//
                // fetch(ajaxURL, {
                //     method: 'post',
                //     headers: {
                //         Accept: 'application/json, text/plain, */*',
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({ groupIndex: groupIndex })
                // }).then(res => res.json())
                //     .then(res => console.log(res))

                fieldset.insertBefore(clonedNode, groupButton)
                clonedNode.setAttribute('id', groupId)
                const clonedNodeElement = document.getElementById(`${groupId}`)

                clonedNodeElement.querySelector('button[name="remove_field"]').classList.remove('d-none')

                Select.styledSelect()
                self.removeField()
            })
        })
    }

    removeField () {
        const removeFormField = document.querySelectorAll('button[name="remove_field"]')

        removeFormField.forEach(removeButton => {
            removeButton.addEventListener('click', e => {
                removeButton.parentElement.remove()
            })
        })
    }

    copyGroup () {
        const newFormGroup = document.querySelectorAll('button[name="add_group"]')
        const self = this
        // clonedNode.classList.add('qsa_wizard__wrapper-content-block--cloned')

        newFormGroup.forEach(groupButton => {
            groupButton.addEventListener('click', e => {
                const fieldset = groupButton.previousElementSibling
                const form = fieldset.parentElement
                const clonedNode = fieldset.cloneNode(true)
                const groupId = new Date().getTime()

                form.insertBefore(clonedNode, groupButton)
                clonedNode.setAttribute('id', groupId)
                const clonedNodeElement = document.getElementById(`${groupId}`)

                clonedNodeElement.querySelector('button[name="remove_group"]').classList.remove('d-none')

                Select.styledSelect()
                self.removeGroup()
            })
        })
    }

    removeGroup () {
        const removeFormGroup = document.querySelectorAll('button[name="remove_group"]')

        removeFormGroup.forEach(removeButton => {
            removeButton.addEventListener('click', e => {
                removeButton.parentElement.remove()
            })
        })
    }

    getPreviousSiblings (elem, filter) {
        const sibs = []
        while (elem = elem.previousSibling) {
            if (elem.nodeType === 3) continue // text node
            if (!filter || filter(elem)) sibs.push(elem)
        }
        return sibs
    }
}

/**
 *     @section 4. Export class
 */

export default (new Wizard())

// end of wizard.js
