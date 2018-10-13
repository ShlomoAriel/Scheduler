import {combineReducers} from 'redux';
import system from './systemReducer'
import login from './loginReducer'
import user from './userReducer'
import webUI from './webUIReducer'

export default combineReducers({
    system,
    user,
    login,
    webUI
});
