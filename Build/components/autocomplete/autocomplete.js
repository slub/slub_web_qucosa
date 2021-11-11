/**
 *    Auto complete
 *
 *    @tableofcontent
 *      1. Dependencies
 *      2. Functions
 *       2.1 Init
 *       2.2 Auto complete
 *
 */

/**
 *     @section 1. Dependencies
 */

import 'awesomplete'

/**
 *     @section 2. Functions
 */

class Autocomplete {
    constructor () {
        this.init()
    }

    init () {
        // console.log('auto complete loaded ...')

        this.autoComplete()
    }

    // @section 2.2 Auto complete header
    autoComplete () {
        const awesomepleteInput = document.querySelectorAll('.autocomplete')

        awesomepleteInput.forEach(inputEl => {
            const input = inputEl
            const autocomplete = new Awesomplete(input, {
                autoFirst: true,
                tabSelect: true
            })
            const form = input.closest('form')

            if(form.dataset.suggest) {
                const url = form.dataset.suggest
                const lang = form.querySelector('input[name="L"]').value

                // console.log(input)

                input.addEventListener('keyup', e => {
                    const ajax = new XMLHttpRequest()
                    const key = e.which
                    const inputValue = input.value
                    const targetUrl = url + '&L=' + lang + '&tx_solr[queryString]=' + inputValue.toLowerCase() + '&tx_solr[callback]'

                    // 40 && 38 == up/down key
                    if (key === 40) {
                        // console.log('hoch runter');
                    } else if (key === 38) {
                        // console.log('hoch runter');
                    } else {
                        // fire ajax request
                        ajax.open('GET', targetUrl, true)
                        ajax.onload = function () {
                            // generate list
                            const list = []
                            let response = ajax.responseText

                            // @todo: das ist ein Risiko, wenn der User '({' eingibt dann geht der Responsive kaputt
                            // remove brackets
                            response = response.replace(/\x28{/g, '{').replace(/}\x29/g, '}')

                            for (const listKey in JSON.parse(response).suggestions) {
                                list.push(listKey)
                            }
                            autocomplete.list = list
                            autocomplete.evaluate()
                        }
                        ajax.send()
                    }
                })
            }
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new Autocomplete())

// end of autocomplete.js
