import {combineReducers} from 'redux'
import loginCheckReducer from './loginSuccess.js';
const rootReducer = combineReducers({
    loginCheck:loginCheckReducer,
})

export default rootReducer;