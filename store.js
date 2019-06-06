import {combineReducers, createStore} from 'redux'
import AuthReducer from './reducers/AuthReducer'

const rootReducer = combineReducers({
    auth: AuthReducer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore