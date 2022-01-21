import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import layoutReducer from './layout/layoutReducer'
import translationReducer from './translation/translationReducer'
import contactReducer from './contact/contactReducer'

/**
 * Conbine reducers
 */
const rootReducer = combineReducers({
    layoutReducer,
    translationReducer,
    contactReducer,
})

/**
 * Create store
 */
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),// Defered dispatch
        //typeof window !== 'undefined' && window.navigator.userAgent.includes('Chrome') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose
    )
)
export default store






