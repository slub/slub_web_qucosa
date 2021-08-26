/**
 *    Datepicker
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

import 'bootstrap-datepicker'
import 'bootstrap-datepicker/js/locales/bootstrap-datepicker.de'

/**
 *     @section 2. Configuration
 */

// nothing yet

/**
 *     @section 3. Class
 */

class Datepicker {
    constructor () {
        this.init()
    }

    init () {
        // console.log('search loaded')
        this.setDatepicker()
        this.datepicker()
    }

    datepicker () {
        const $datepicker = $('.datepicker')
        const datepicker = document.querySelectorAll('.datepicker')

        datepicker.forEach(datepicker => {
            datepicker.addEventListener('click', () => {
                const datepickerContainer = datepicker.parentNode
                const datepickerLabel = datepickerContainer.querySelector('.qsa_field__datepicker-label.sr-only')

                if (datepickerLabel) {
                    datepickerLabel.classList.remove('sr-only')
                }

                const datepickerDropdown = document.querySelectorAll('.datepicker-dropdown')
                datepickerDropdown.forEach(element => {
                    const tbody = element.querySelectorAll('tbody')
                    const thead = element.querySelectorAll('thead')
                    const tData = element.querySelectorAll('td')
                    const prev = element.querySelectorAll('.prev')
                    const next = element.querySelectorAll('.next')
                    const day = element.querySelectorAll('.day')
                    element.querySelector('table').setAttribute('aria-readonly', true)
                    element.querySelector('table').setAttribute('aria-labelledby', 'datepicker-month')

                    tbody.forEach(tbody => {
                        tbody.setAttribute('role', 'presentation')
                    })

                    prev.forEach(prev => {
                        prev.setAttribute('aria-label', 'Vorheriger Monat')
                    })

                    next.forEach(next => {
                        next.setAttribute('aria-label', 'Nächsten Monat')
                    })

                    thead.forEach(thead => {
                        thead.setAttribute('role', 'presentation')
                    })

                    tData.forEach(tData => {
                        tData.setAttribute('aria-selected', 'false')

                        if (tData.classList.contains('active')) {
                            tData.setAttribute('aria-selected', 'true')
                        }
                    })

                    day.forEach(day => {
                        day.setAttribute('role', 'button')
                    })
                })
            })
        })

        $.fn.datepicker.dates.de = {
            days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            daysShort: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
            daysMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            today: 'Heute',
            monthsTitle: 'Monate',
            clear: 'Löschen',
            weekStart: 1,
            format: 'dd.mm.yyyy'
        }

        $.fn.datepicker.defaults.autoclose = true
        // $.fn.datepicker.defaults.orientation = 'bottom auto'

        $datepicker.datepicker({
            language: 'de',
            orientation: 'auto'
        })
    }

    setDatepicker () {
        let today = new Date()
        let dd = today.getDate()
        const customDatePicker = document.querySelectorAll('.datepicker')

        let mm = today.getMonth() + 1
        const yyyy = today.getFullYear()
        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = dd + '.' + mm + '.' + yyyy

        customDatePicker.forEach(datepicker => {
            if (datepicker.getAttribute('id') === 'qsa_date-year') {
                datepicker.setAttribute('value', `${yyyy}`)
                datepicker.value = yyyy
            } else {
                datepicker.setAttribute('value', `${today}`)
                datepicker.value = today
            }
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new Datepicker())

// end of SearchHeader.js
