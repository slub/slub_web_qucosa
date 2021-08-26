/**
 *    SearchHeader
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

import datepicker from '../datepicker/datepicker'

/**
 *     @section 2. Configuration
 */

// nothing yet

/**
 *     @section 3. Class
 */

class SearchHeader {
    constructor () {
        this.init()
        this.resetSearch()
        this.resetHeaderForms()
        this.styleOnFocus()
    }

    init () {
        // console.log('search loaded')

        const advancedSearch = document.querySelector('.qsa_search-header__advanced-search')
        const advSearchFooter = document.querySelector('.qsa_search-header__advanced-search .qsa_search-header__advanced-search-footer')
        const resetBtn = advSearchFooter ? advSearchFooter.querySelector('.qsa_search-header__advanced-search .reset') : null
        const inputs = document.querySelectorAll('.qsa_search-header__advanced-search .qsa_search-header__advanced-search-inputs .qsa_input-group__input-text')
        const selects = document.querySelectorAll('.qsa_search-header__advanced-search .qsa_select__native')
        const customSelectsText = document.querySelectorAll('.qsa_search-header__advanced-search .qsa_select__custom-trigger p')
        const customSelectsLabel = document.querySelectorAll('.qsa_search-header__advanced-search .qsa_select__label-header')
        const openAdvancedSearch = document.getElementById('openAdvanced')
        const searchBar = document.querySelector('.qsa_search-header__search-wrapper')
        const advancedSearchContainer = document.querySelectorAll('.qsa_search-header__advanced-search__container')
        const amountResults = document.querySelector('.qsa_search-header__results')
        const searchFooter = document.querySelector('.qsa_search-header__footer')
        const searchContainer = document.querySelector('.qsa_search-header__container')
        const closeAdvancedSearch = document.getElementById('closeAdvanced')

        if(openAdvancedSearch) {
            openAdvancedSearch.addEventListener('click', () => {
                this.expandSearch(searchBar, advancedSearch, amountResults, searchFooter, advancedSearchContainer, searchContainer)
            })

            if (localStorage.getItem('advancedSearch')) {
                this.expandSearch(searchBar, advancedSearch, amountResults, searchFooter, advancedSearchContainer, searchContainer)
                localStorage.removeItem('advancedSearch')
            }

            closeAdvancedSearch.addEventListener('click', () => {
                window.scrollTo(0, 0)
                advancedSearch.classList.remove('qsa_search-header__advanced-search--expanded')

                advancedSearchContainer.forEach(container => {
                    container.classList.remove('qsa_search-header__advanced-search__container--expanded')
                })

                openAdvancedSearch.focus() // after closing, focus on the button

                setTimeout(() => {
                    searchBar.classList.remove('qsa_search-header__search-wrapper--hidden')
                    amountResults.classList.remove('d-none')
                    searchFooter.classList.remove('d-none')
                    searchContainer.classList.remove('qsa_search-header__container--expanded')
                }, 800)
            })
        }

        if(resetBtn) {
            resetBtn.addEventListener('click', () => {
                datepicker.setDatepicker()

                inputs.forEach(input => {
                    input.setAttribute('data-empty', true)
                })

                selects.forEach(select => {
                    select.selectedIndex = 0
                })

                customSelectsText.forEach(customSelectText => {
                    customSelectText.textContent = ''
                })

                customSelectsLabel.forEach(customSelectLabel => {
                    customSelectLabel.classList.remove('qsa_select__label--filled')
                })
            })
        }
    }

    expandSearch (searchBar, advancedSearch, amountResults, searchFooter, advancedSearchContainer, searchContainer) {
        searchBar.classList.add('qsa_search-header__search-wrapper--hidden')
        advancedSearch.classList.add('qsa_search-header__advanced-search--expanded')
        if(amountResults) {
            amountResults.classList.add('d-none')
        }
        searchFooter.classList.add('d-none')

        setTimeout(() => {
            advancedSearchContainer.forEach(container => {
                container.classList.add('qsa_search-header__advanced-search__container--expanded')
            })

            // focus the first Input element
            advancedSearch.querySelector('.qsa_input-group__input').focus()
        }, 800)

        setTimeout(() => {
            searchContainer.classList.add('qsa_search-header__container--expanded')
        }, 700)
    }

    styleOnFocus () {
        const headerSearch = document.querySelector('.qsa_search-header__search input[type="text"]')
        const submitButton = document.querySelector('.qsa_search-header__search button[type="submit"]')

        headerSearch.addEventListener('focus', e => {
            submitButton.classList.add('isFocus')
        })

        headerSearch.addEventListener('blur', e => {
            submitButton.classList.remove('isFocus')
        })
    }

    resetSearch () {
        const headerSearch = document.querySelector('.qsa_search-header__search input[type="text"]')
        const headerSearchResetButton = document.querySelector('.qsa_search-header__search__reset')
        headerSearch.addEventListener('input', e => {
            if (e.target.value) {
                headerSearchResetButton.style.display = 'inline-block'
            } else {
                headerSearchResetButton.style.display = 'none'
            }
        })

        headerSearchResetButton.addEventListener('click', e => {
            headerSearch.value = ''
            headerSearchResetButton.style.display = 'none'
        })
    }

    resetHeaderForms () {
        const sortingSelect = document.querySelector('select[name="tx_find_find[sort]"]')


        sortingSelect.onchange = (e) => {
            console.log('change')
        }
        sortingSelect.addEventListener('change',  () => {
            console.log('select changed')
            sortingSelect.closest('form').submit()
        })
        const headerReset = document.querySelector('#resetSimpleSearch')

        if (headerReset) {
            headerReset.addEventListener('click', () => {
                window.location = window.location.href.split('?')[0];
            })
        }
    }
}

/**
 *     @section 4. Export class
 */

export default (new SearchHeader())

// end of SearchHeader.js
