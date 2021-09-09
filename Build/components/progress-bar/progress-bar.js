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
import wizard from '../wizard/wizard'

/**
 *     @section 2. Configuration
 */

// nothing yet

/**
 *     @section 3. Class
 */

class ProgressBar {
    constructor () {
        this.init()
    }

    init () {
        // console.log('ProgressBar loaded')
        this.dragToScroll()
        this.switchTabs()
    }

    dragToScroll () {
        const progressBar = document.querySelectorAll('.qsa_progress-bar')

        progressBar.forEach(ele => {
            ele.style.cursor = 'grab'

            let pos = { top: 0, left: 0, x: 0, y: 0 }

            const mouseDownHandler = function (e) {
                ele.style.userSelect = 'none'

                pos = {
                    left: ele.scrollLeft,
                    top: ele.scrollTop,
                    // Get the current mouse position
                    x: e.clientX,
                    y: e.clientY
                }

                document.addEventListener('mousemove', mouseMoveHandler)
                document.addEventListener('mouseup', mouseUpHandler)
            }

            const mouseMoveHandler = function (e) {
                // How far the mouse has been moved
                const dx = e.clientX - pos.x
                const dy = e.clientY - pos.y

                document.querySelector('.qsa_progress-bar .qsa_btn--round').style.display = 'none'

                // Scroll the element
                ele.scrollTop = pos.top - dy
                ele.scrollLeft = pos.left - dx
            }

            const mouseUpHandler = function () {
                ele.style.cursor = 'grab'
                ele.style.removeProperty('user-select')

                document.removeEventListener('mousemove', mouseMoveHandler)
                document.removeEventListener('mouseup', mouseUpHandler)
            }

            // Attach the handler
            ele.addEventListener('mousedown', mouseDownHandler)
        })
    }

    switchTabs () {
        const tabItems = document.querySelectorAll('.qsa_progress-bar__container-item')
        const tabItemsLink = document.querySelectorAll('.qsa_progress-bar__container-item a')
        const wizardTabs = document.querySelectorAll('.qsa_wizard__wrapper-content')
        const wizardWrapper = document.querySelector('.qsa_wizard')
        const nextButton = document.querySelectorAll('.qsa_wizard__wrapper-button-next')
        const lastTabButton = document.querySelector('.qsa_progress-bar__container-list .qsa_progress-bar__container-item:last-child')
        const editButton = document.querySelectorAll('.qsa_wizard__wrapper-form-element-edit')

        if (lastTabButton) {
            lastTabButton.addEventListener('click', () => {
                wizard.generateSummary()
            })
        }

        editButton.forEach(editBtn => {
            editBtn.addEventListener('click', e => {
                e.stopImmediatePropagation()

                const tabId = e.target.dataset.step
                const containerProgress = Array.from(tabItems).find(el => el.dataset.id === tabId)

                tabItems.forEach(tab => {
                    if (tab.classList.contains('active')) {
                        tab.classList.remove('active')
                    }
                })

                wizardTabs.forEach(wizard => {
                    wizard.classList.add('d-none')
                })

                containerProgress.classList.add('active')

                const wizzardTab = wizardWrapper.querySelector('#' + tabId)
                const firstField = wizzardTab.querySelectorAll('input, select, textarea')[0] // find the first element

                wizzardTab.classList.remove('d-none')
                firstField.focus() // focus the first element
            })
        })

        tabItems.forEach(tab => {
            tab.addEventListener('click', e => {
                e.stopImmediatePropagation()
                const tabId = e.target.dataset.id

                tabItems.forEach(tab => {
                    if (tab.classList.contains('active')) {
                        tab.classList.remove('active')
                    }
                })

                if (!e.target.classList.contains('active')) {
                    console.log('add class to progressbar step')
                    e.target.classList.add('active')
                }

                wizardTabs.forEach(wizard => {
                    wizard.classList.add('d-none')
                })

                console.log(wizardWrapper)
                console.log(wizardWrapper.querySelector('#' + tabId))
                wizardWrapper.querySelector('#' + tabId).classList.remove('d-none')
                wizard.generateSummary()
            })
        })

        tabItemsLink.forEach(link => {
            link.addEventListener('click', e => {
                e.stopImmediatePropagation()
                const tabId = e.target.parentElement.dataset.id

                tabItems.forEach(tab => {
                    if (tab.classList.contains('active')) {
                        tab.classList.remove('active')
                    }
                })

                if (!e.target.parentElement.classList.contains('active')) {
                    e.target.parentElement.classList.add('active')
                }

                wizardTabs.forEach(wizard => {
                    wizard.classList.add('d-none')
                })

                wizardWrapper.querySelector('#' + tabId).classList.remove('d-none')
                wizard.generateSummary()
            })
        })

        nextButton.forEach(btn => {
            btn.addEventListener('click', e => {
                e.stopImmediatePropagation()
                const container = e.target.parentElement
                const nextElementId = container.nextElementSibling.getAttribute('id')
                const containerProgress = Array.from(tabItems).find(el => el.dataset.id === nextElementId)

                tabItems.forEach(tab => {
                    if (tab.classList.contains('active')) {
                        tab.classList.remove('active')
                    }
                })

                wizardTabs.forEach(wizard => {
                    wizard.classList.add('d-none')
                })

                containerProgress.classList.add('active')
                container.nextElementSibling.classList.remove('d-none')
                wizard.generateSummary()
            })
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new ProgressBar())

// end of ProgressBar.js
