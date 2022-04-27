import {combineReducers} from 'redux'
import loginSuccess from './loginSuccess.js'

const rootReducer = combineReducers({
    loginCheck:loginSuccess
})

export default rootReducer;