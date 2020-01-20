import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import app from "./application/reducer"
import something from "./something/reducer"
import {nav ,navigationMiddleware} from "./navigation/reducer"
 
/**
 * Creating root reducer via combineReducers() method for react-redux
 */
const rootReducer = combineReducers({
    app,
    something,
    nav
})

/**
 * apply middleware for intercept dispatch actions
 */
const enhancer = compose(
    applyMiddleware(thunk, navigationMiddleware)
)

/**
 * Creating store for aplication
 */
const store = createStore(rootReducer, enhancer)

/**
 * export store for use into Provider
 */
export default store