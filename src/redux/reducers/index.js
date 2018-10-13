import {combineReducers} from 'redux';
import system from './systemReducer'
import login from './loginReducer'
import user from './userReducer'
import event from './eventReducer'
import webUI from './webUIReducer'

export default combineReducers({
    system,
    user,
    event,
    login,
    webUI
});
