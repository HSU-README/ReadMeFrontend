import {combineReducers} from 'redux'
import loginCheckReducer from './loginSuccess.js';
import RecomendBoxVisibleReducer from './RecomendBoxVisible.js';
const rootReducer = combineReducers({
    loginCheck:loginCheckReducer,
    visibleCheck:RecomendBoxVisibleReducer,
})

export default rootReducer;