/**
 *    Bookmarks
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
import tippy from 'tippy.js'
import helper from '../../settings/helper'

/**
 *     @section 2. Configuration
 */

// nothing yet

/**
 *     @section 3. Class
 */

class Bookmarks {
    constructor () {
        this.init()
    }

    init () {
        this.checkAllBookmarks()
        this.removeMultiple()
        this.toggleBookmarkSidebar()
        this.printBookmarks()
        this.addBookmarks()
    }

    checkAllBookmarks () {
        const toggleAll = document.querySelector('#markAllBookmarks')
        const bookMarkToggles = document.querySelectorAll('.qsa_bookmarks__sidebar-list-item__mark input')
        const removeMultipleButton = document.querySelector('.qsa_bookmarks__sidebar-operations--remove button')

        toggleAll.addEventListener('click', (e) => {
            const self = e.target
            bookMarkToggles.forEach(bookmarkToggle => {
                bookmarkToggle.checked = self.checked

                if (self.checked) {
                    removeMultipleButton.classList.remove('d-none')
                } else {
                    removeMultipleButton.classList.add('d-none')
                }
            })
        })
    }

    removeMultiple () {
        const bookMarkToggles = document.querySelectorAll('.qsa_bookmarks__sidebar-list-item__mark input')
        const removeMultipleButton = document.querySelector('.qsa_bookmarks__sidebar-operations--remove button')

        bookMarkToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                const bookMarkTogglesChecked = document.querySelectorAll('.qsa_bookmarks__sidebar-list-item__mark input[type="checkbox"]:checked')

                if (bookMarkTogglesChecked.length >= 2) {
                    removeMultipleButton.classList.remove('d-none')
                } else {
                    removeMultipleButton.classList.add('d-none')
                }
            })
        })

        removeMultipleButton.addEventListener('click', e => {
            const bookMarkTogglesChecked = document.querySelectorAll('.qsa_bookmarks__sidebar-list-item__mark input[type="checkbox"]:checked')

            bookMarkTogglesChecked.forEach(toggle => {
                const bookMarkId = toggle.parentElement.parentElement.dataset.id

                this.removeBookmark(bookMarkId)

                if (bookMarkToggles.length === 0) {
                    removeMultipleButton.classList.add('d-none')
                }
            })
        })
    }

    toggleBookmarkSidebar () {
        const bookmarkSliderButton = document.querySelector('#bookmarkSlider')
        const bookmarkSidebar = document.querySelector('.qsa_bookmarks__sidebar')
        const closeBookmarks = document.querySelector('#bookmarksClose')

        bookmarkSliderButton.addEventListener('click', () => {
            bookmarkSliderButton.setAttribute('aria-expanded', 'true')
            bookmarkSidebar.setAttribute('aria-hidden', 'false')
            bookmarkSidebar.classList.add('qsa_bookmarks__sidebar--expanded')

            // focus trap
            helper.focusTrap(bookmarkSidebar, true)

            // close the bookmarkSiderbar through the ESC
            if (bookmarkSidebar.classList.contains('qsa_bookmarks__sidebar--expanded')) {
                document.addEventListener('keydown', e => {
                    // ESC
                    if (e.keyCode === 27) {
                        bookmarkSidebar.classList.remove('qsa_bookmarks__sidebar--expanded')
                        bookmarkSliderButton.setAttribute('aria-expanded', 'false')
                        bookmarkSidebar.setAttribute('aria-hidden', 'true')
                        bookmarkSliderButton.focus() // leave focus on the button
                    }
                })
            }
        })

        closeBookmarks.addEventListener('click', () => {
            bookmarkSidebar.classList.remove('qsa_bookmarks__sidebar--expanded')
            bookmarkSliderButton.setAttribute('aria-expanded', 'false')
            bookmarkSidebar.setAttribute('aria-hidden', 'true')
        })


        let prevClassState = bookmarkSliderButton.classList.contains('');
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if(mutation.attributeName === 'class'){
                    let currentClassState = mutation.target.classList.contains('qsa_bookmarks__sidebar--expanded');
                    if(prevClassState !== currentClassState)    {
                        prevClassState = currentClassState;
                        if(!currentClassState) {
                            bookmarkSliderButton.focus()
                        }
                    }
                }
            });
        });
        observer.observe(bookmarkSidebar, {attributes: true});

        bookmarkSidebar.addEventListener('click', e => {
            e.stopPropagation()
        })
    }

    printBookmarks () {
        const list = document.querySelector('.qsa_bookmarks__sidebar-list')
        const printBtn = document.querySelector('.qsa_bookmarks__sidebar-operations--print button')
        const title = 'Favoritenliste'
        const currentUrl = window.location.origin + '/typo3conf/ext/slub_web_qucosa/Resources/Public/Css/qsa.min.css'

        printBtn.addEventListener('click', () => {
            const bookmarkWindow = window.open('', 'PRINT', 'height=400,width=600')
            bookmarkWindow.document.write('<html><head><title>' + title + '</title>')
            bookmarkWindow.document.write(`<link href=${currentUrl} rel="stylesheet"></head><body class="no-flex">`)
            bookmarkWindow.document.write('<h1>' + title + '</h1>')
            bookmarkWindow.document.write(list.innerHTML)
            bookmarkWindow.document.write('</body></html>')

            bookmarkWindow.document.close() // necessary for IE >= 10
            bookmarkWindow.focus() // necessary for IE >= 10*/

            bookmarkWindow.onload = function () {
                setTimeout(function () {
                    bookmarkWindow.print()
                    bookmarkWindow.close()
                }, 700)
            }
            return true
        })
    }

    addBookmarks () {
        const addBookmarkButtons = document.querySelectorAll('.qsa_search__wrapper button[data-id="bookmark"]')
        const bookmarkCounter = document.querySelector('.qsa_bookmarks__counter')

        if (!localStorage.getItem('myBookmarks')) {
            localStorage.setItem('myBookmarks', JSON.stringify([]))
        }

        bookmarkCounter.innerHTML = JSON.parse(localStorage.getItem('myBookmarks')).length
        const bookmarkStorage = JSON.parse(localStorage.getItem('myBookmarks'))

        if (bookmarkStorage.length === 0) {
            document.querySelector('.qsa_bookmarks__sidebar-list-wrapper').classList.add('qsa_bookmarks__sidebar-list-wrapper--empty')
            document.querySelector('.qsa_bookmarks__sidebar').classList.add('empty')
            bookmarkCounter.setAttribute('aria-label', 'Kein Dokument wurde hinzugefügt')
        } else {
            document.querySelector('.qsa_bookmarks__sidebar').classList.remove('empty')
            bookmarkCounter.removeAttribute('aria-label')
        }

        bookmarkStorage.forEach(bookmark => {
            this.createBookmark(bookmark)
        })

        addBookmarkButtons.forEach(button => {
            const id = button.getAttribute('id')
            const bookmarksToChek = JSON.parse(localStorage.getItem('myBookmarks'))

            if (bookmarksToChek.filter(function (e) { return e.id === id }).length > 0) {
                button.classList.add('active-icon')
                button.closest('.qsa_search__wrapper').classList.add('qsa_search__wrapper--active')
            }

            button.addEventListener('click', (e) => {
                const buttonId = e.target.getAttribute('id')
                const resultItem = button.parentElement.previousElementSibling
                const title = resultItem.querySelector('.qsa_search-result__item-title-link').innerHTML
                const link = resultItem.querySelector('.qsa_search-result__item-title-link').getAttribute('href')
                const meta = resultItem.querySelectorAll('.qsa_search-result__item-footer__item')
                const allBookmarks = JSON.parse(localStorage.getItem('myBookmarks'))

                if (allBookmarks.filter(function (e) { return e.id === buttonId }).length > 0) {
                    const index = allBookmarks.findIndex(x => x.id === buttonId)
                    if (index > -1) {
                        this.removeBookmark(buttonId)
                    }
                } else {
                    const bookmarkObject = {}
                    bookmarkObject.title = title
                    bookmarkObject.meta = []
                    bookmarkObject.id = buttonId
                    bookmarkObject.href = link

                    meta.forEach(metaItem => {
                        bookmarkObject.meta.push(metaItem.innerHTML)
                    })

                    allBookmarks.push(bookmarkObject)
                    this.createBookmark(bookmarkObject)
                    localStorage.setItem('myBookmarks', JSON.stringify(allBookmarks))
                    bookmarkCounter.innerHTML = JSON.parse(localStorage.getItem('myBookmarks')).length
                }
            })
        })
    }

    createBookmark (bookmark) {
        const bookmarkList = document.querySelector('.qsa_bookmarks__sidebar-list')
        const iconPath = bookmarkList.dataset.iconpath
        const iconTitle = bookmarkList.dataset.icontitle
        const iconDesc = bookmarkList.dataset.icondesc
        const tippyDesc = bookmarkList.dataset.tippydesc

        const bookmarkItem = document.createElement('li')
        bookmarkItem.classList.add('qsa_bookmarks__sidebar-list-item')
        bookmarkItem.dataset.id = bookmark.id

        const bookMarkMarker = document.createElement('div')
        bookMarkMarker.classList.add('qsa_bookmarks__sidebar-list-item__mark')
        bookMarkMarker.insertAdjacentHTML('beforeend', `<input id="${bookmark.id}-input" data-id="${bookmark.id}" type="checkbox"/><label class="sr-only" for="${bookmark.id}-input">Eintrag markieren</label>`)

        bookmarkItem.append(bookMarkMarker)

        const bookmarkData = document.createElement('div')
        bookmarkData.classList.add('qsa_bookmarks__sidebar-list-item__data')
        bookmarkData.insertAdjacentHTML('beforeend', `<h2 class="h6"><a class="qsa_bookmarks__sidebar-list-item__data-link" href="${bookmark.href}">${bookmark.title}</a></h2>`)

        bookmarkItem.append(bookmarkData)

        const bookmarkFooter = document.createElement('div')
        bookmarkFooter.classList.add('qsa_bookmarks__sidebar-list-item__data-footer')

        bookmark.meta.forEach(meta => {
            const bookmarkFooterMeta = document.createElement('span')
            bookmarkFooterMeta.classList.add('qsa_bookmarks__sidebar-list__data-footer-item')
            bookmarkFooterMeta.classList.add('btn-round')
            bookmarkFooterMeta.innerHTML = meta

            bookmarkFooter.append(bookmarkFooterMeta)
        })

        bookmarkData.append(bookmarkFooter)

        const removeBookmark = document.createElement('button')

        removeBookmark.classList.add('qsa_bookmarks__sidebar-list-item__remove')
        removeBookmark.setAttribute('data-id', bookmark.id)
        removeBookmark.setAttribute('aria-label', tippyDesc)
        removeBookmark.setAttribute('data-tippy-content', tippyDesc)
        removeBookmark.innerHTML = '<svg class="qsa_icon icon--bookmark-minus icon--base" role="img" width="20" height="20" aria-hidden="true">\n' +
                `<title class="sr-only">${iconTitle}</title>\n` +
                `<desc class="sr-only">${iconDesc}</desc>\n` +
                `<use xlink:href="${iconPath}icon-bookmark-minus"></use>\n` +
            '</svg>'
        bookmarkItem.append(removeBookmark)

        bookmarkList.append(bookmarkItem)

        this.removeBookmarkByRemoveButton()
        this.checkAllBookmarks()
        this.removeMultiple()

        if (document.querySelector('.qsa_bookmarks__sidebar-list-wrapper').classList.contains('qsa_bookmarks__sidebar-list-wrapper--empty')) {
            document.querySelector('.qsa_bookmarks__sidebar-list-wrapper').classList.remove('qsa_bookmarks__sidebar-list-wrapper--empty')
            document.querySelector('.qsa_bookmarks__sidebar').classList.remove('empty')
        }

        tippy('[data-tippy-content]', {
            interactive: true,
            allowHTML: true
        })
    }

    removeBookmark (id) {
        const allBookmarks = JSON.parse(localStorage.getItem('myBookmarks'))
        const bookmarkList = document.querySelector('.qsa_bookmarks__sidebar-list')
        const bookmarkToDelete = bookmarkList.querySelector(`.qsa_bookmarks__sidebar-list-item[data-id="${id}"]`)
        const index = allBookmarks.findIndex(x => x.id === id)
        const bookmarkCounter = document.querySelector('.qsa_bookmarks__counter')
        const addBookmarkButtons = document.querySelectorAll('.qsa_search__wrapper button[data-id="bookmark"]')

        allBookmarks.splice(index, 1)
        localStorage.setItem('myBookmarks', JSON.stringify(allBookmarks))
        bookmarkCounter.innerHTML = JSON.parse(localStorage.getItem('myBookmarks')).length

        addBookmarkButtons.forEach(button => {
            const id = button.getAttribute('id')
            if (allBookmarks.filter(function (e) { return e.id === id }).length === 0) {
                button.classList.remove('active-icon')
                button.closest('.qsa_search__wrapper').classList.remove('qsa_search__wrapper--active')
            }
        })

        bookmarkToDelete.remove()

        if (allBookmarks.length === 0 && !document.querySelector('.qsa_bookmarks__sidebar-list-wrapper').classList.contains('qsa_bookmarks__sidebar-list-wrapper--empty')) {
            document.querySelector('.qsa_bookmarks__sidebar-list-wrapper').classList.add('qsa_bookmarks__sidebar-list-wrapper--empty')
            document.querySelector('.qsa_bookmarks__sidebar').classList.add('empty')
            document.querySelector('#bookmarksClose').focus()
        } else {
            document.querySelector('.qsa_bookmarks__sidebar').classList.remove('empty')
        }
    }

    removeBookmarkByRemoveButton () {
        const removeBookmarkButtons = document.querySelectorAll('.qsa_bookmarks__sidebar-list-item__remove')

        removeBookmarkButtons.forEach(button => {
            button.addEventListener('click', e => {
                e.stopImmediatePropagation()
                this.removeBookmark(e.target.dataset.id)

                // focus trap
                if (document.querySelector('.qsa_bookmarks__sidebar').classList.contains('qsa_bookmarks__sidebar--expanded')) {
                    document.querySelector('#bookmarksClose').focus()
                }
            })
        })
    }
}

/**
 *     @section 4. Export class
 */

export default (new Bookmarks())

// end of bookmarks.js
