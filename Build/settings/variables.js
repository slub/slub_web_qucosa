/**
 *    Variables
 *
 *    @tableofcontent
 *      1. Variables
 *
 */

/**
 *     @section 1. Variables
 */

export default {
    lang: document.documentElement.lang,
    prefix: 'qsa_',
    class: {
        hover: '--hover',
        focus: '--focus',
        active: '--active',
        disabled: '--disabled',
        error: '--error',
        loading: '--loading',
        loaded: '--loaded',
        sending: '--sending',
        sent: '--sent',
        open: '--open',
        opened: '--opened',
        complete: '--complete',
        horizontal: '--horizontal',
        vertical: '--vertical',
        darkMode: '--dark-mode'
    },
    transitionTime: 300,
    breakpoint: {
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
    },
    spacing: 30,
    color: {
        white: '#fff',
        black: '#000',
        primary: '#fb510e',
        secondary: '#f7f5eb',
    }
}

// end of variables.js
