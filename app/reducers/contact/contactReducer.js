import config from "app/config"


/**
 * @const initialState
 */
const initialState = {
    
}

/**
 * Layout reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function contactReducer(state = initialState, action) {
    if (!('contactMailLock' in state)) {// Init contactMailLock
        if (typeof window !== "undefined") {
            if (localStorage.getItem("contactMailLock") === null) localStorage.setItem("contactMailLock", 'false')
            state.contactMailLock = localStorage.getItem('contactMailLock') === 'false' ? false : new Date(localStorage.getItem('contactMailLock'))
        }
    }
    switch(action.type) {
        // mail
        case 'contact/lockMail': {
            const contactMailLock = new Date()
            localStorage.setItem("contactMailLock", contactMailLock)
            return {...state, contactMailLock }
        }
        // Default
        default: {
            return state
        }
    }
}