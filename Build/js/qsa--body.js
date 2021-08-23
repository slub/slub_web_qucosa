/**
 *    SLUB - Qucosa (qsa.js)
 *
 *    @tableofcontent
 *      1. Default dependencies
 *       1.1 Global variables
 *      2. Components
 *       2.1 Header
 *       2.9 List
 *       2.10 Select
 *       2.11 List-author
 *       2.12 Connections
 *       2.13 Abstract
 *       2.14 Download
 *       2.15 Contents-head-area
 *       2.16 Table-of-contents
 *       2.19 Progress-Bar
 *      3. Extensions JavaScript
 *     99. Prototype
 *
 */

// use strict mode
/**
 *     @section 1. Dependencies
 */

import $ from 'jquery'
// eslint-disable-next-line no-unused-vars
import carousel from 'bootstrap/js/src/carousel'
// eslint-disable-next-line no-unused-vars
import SimpleLightbox from 'simplelightbox'
import modal from 'bootstrap/js/src/modal'

(function () {
    'use strict'
}())

window.jQuery = $
window.$ = $

/** @section 1.1 Global variables */
// import GLOBAL from './settings/variables'

/**
 *     @section 2. Components
 */

/** @section 2.1 Header */
if (document.querySelectorAll('.qsa_header').length) {
    import(/* webpackChunkName: "header" */ '../components/header/header')
}

/** @section 2.2 Headline */
if (document.querySelectorAll('.qsa_headline').length) {
    import(/* webpackChunkName: "headline" */ '../components/headline/headline')
}

/** @section 2.2 Page */
import(/* webpackChunkName: "page" */ '../components/page/page')

/** @section 2.3 Logo */
if (document.querySelectorAll('.qsa_logo').length) {
    import(/* webpackChunkName: "logo" */ '../components/logo/logo')
}

/** @section 2.4 Icon */
if (document.querySelectorAll('.qsa_icon').length) {
    import(/* webpackChunkName: "icon" */ '../components/icon/icon')
}

/** @section 2.5 Dropdown */
if (document.querySelectorAll('.qsa_dropdown').length) {
    import(/* webpackChunkName: "dropdown" */ '../components/dropdown/dropdown')
}

/** @section 2.6 Footer */
if (document.querySelectorAll('.qsa_footer').length) {
    import(/* webpackChunkName: "footer" */ '../components/footer/footer')
}

/** @section 2.7 Teaser */
if (document.querySelectorAll('.qsa_teaser').length) {
    import(/* webpackChunkName: "teaser" */ '../components/teaser/teaser')
}

/** @section 2.7 Carousel */
if (document.querySelectorAll('.qsa_carousel').length) {
    import(/* webpackChunkName: "carousel" */ '../components/carousel/carousel')
}

/** @section 2.5 Hero */
if (document.querySelectorAll('.qsa_hero').length) {
    import(/* webpackChunkName: "hero" */ '../components/hero/hero')
}

/** @section 2.5 openingTeaser */
if (document.querySelectorAll('.qsa_opening-teaser').length) {
    import(/* webpackChunkName: "openingTeaser" */ '../components/openingTeaser/openingTeaser')
}

/** @section 2.6 Accordion */
if (document.querySelectorAll('.qsa_accordion').length) {
    import(/* webpackChunkName: "accordion" */ '../components/accordion/accordion')
}

/** @section 2.6 Content-Area */
if (document.querySelectorAll('.qsa_content-area').length) {
    import(/* webpackChunkName: "content-area" */ '../components/content/content-area')
}

/** @section 2.6 Content-Item */
if (document.querySelectorAll('.qsa_content-item').length) {
    import(/* webpackChunkName: "content-item" */ '../components/content/content-item')
}

/** @section 2.7 Content-Sidebar */
if (document.querySelectorAll('.qsa_content-area__sidebar').length) {
    import(/* webpackChunkName: "content-sidebar" */ '../components/content/content-sidebar')
}

/** @section 2.7 Flip-Card */
if (document.querySelectorAll('.qsa_flip-card').length) {
    import(/* webpackChunkName: "flip-card" */ '../components/flip-card/flip-card')
}

/** @section 2.8 Breadcrumb */
if (document.querySelectorAll('.qsa_breadcrumb').length) {
    import(/* webpackChunkName: "breadcrumb" */ '../components/breadcrumb/breadcrumb')
}

/** @section 2.9 List */
if (document.querySelectorAll('.qsa_search-result').length || document.querySelectorAll('.qsa_search-result__item').length) {
    import(/* webpackChunkName: "list" */ '../components/search-result/search-result')
}

/** @section 2.10 Select */
if (document.querySelectorAll('.qsa_select').length) {
    import(/* webpackChunkName: "select" */ '../components/select/select')
}

/** @section 2.11 List-author */
if (document.querySelectorAll('.qsa_list-author').length) {
    import(/* webpackChunkName: "list-author" */ '../components/list-author/list-author')
}

/** @section 2.12 Connections */
if (document.querySelectorAll('.qsa_connections__publications').length) {
    import(/* webpackChunkName: "connections" */ '../components/connections/connections')
}

/** @section 2.13 Abstract */
if (document.querySelectorAll('.qsa_abstract').length) {
    import(/* webpackChunkName: "abstract" */ '../components/abstract/abstract')
}

/** @section 2.14 Download */
if (document.querySelectorAll('.qsa_download').length) {
    import(/* webpackChunkName: "download" */ '../components/download/download')
}

/** @section 2.15 Contents-head-area */
if (document.querySelectorAll('.qsa_contents-head-area').length) {
    import(/* webpackChunkName: "detail-head-area" */ '../components/contents-head-area/contents-head-area')
}

/** @section 2.16 Table-of-contents */
if (document.querySelectorAll('.qsa_table-contents').length) {
    import(/* webpackChunkName: "detail-page-contents" */ '../components/table-of-contents/table-of-contents')
}

/** @section 2.14 Search-Header */
if (document.querySelectorAll('.qsa_search-header').length) {
    import(/* webpackChunkName: "search-header" */ '../components/search-header/search-header')
}

/** @section 2.15 Input */
if (document.querySelectorAll('.qsa_input-group').length || document.querySelectorAll('.qsa_input').length) {
    import(/* webpackChunkName: "input" */ '../components/input/input')
}

/** @section 2.16 Datepicker */
if (document.querySelectorAll('.datepicker').length) {
    import(/* webpackChunkName: "datepicker" */ '../components/datepicker/datepicker')
}

/** @section 2.17 Bookmarks */
if (document.querySelectorAll('.qsa_bookmarks__sidebar').length) {
    import(/* webpackChunkName: "bookmarks" */ '../components/bookmarks/bookmarks')
}

/** @section 2.18 Sidebar-Links */
if (document.querySelectorAll('.qsa_sidebar-links').length) {
    import(/* webpackChunkName: "sidebar-links" */ '../components/sidebar-links/sidebar-links')
}

/** @section 2.19 Progress-Bar */
if (document.querySelectorAll('.qsa_progress-bar').length) {
    import(/* webpackChunkName: "progress-bar" */ '../components/progress-bar/progress-bar')
}

/** @section 2.20 Progress-Bar */
if (document.querySelectorAll('.qsa_wizard').length) {
    import(/* webpackChunkName: "wizard" */ '../components/wizard/wizard')
}

/** @section 2.21 Autocomplete */
if (document.querySelectorAll('.autocomplete').length) {
    import(/* webpackChunkName: "autocomplete" */ '../components/autocomplete/autocomplete')
}

/** @section 2.22 Textarea */
if (document.querySelectorAll('.qsa_text-area').length) {
    import(/* webpackChunkName: "autocomplete" */ '../components/textarea/textarea')
}

/**
 *     @section 99. Prototype
 */

import(/* webpackChunkName: "prototype" */ '../components/prototype/prototype')

// end of qsa.js file
