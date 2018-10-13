import * as types from '../actions/actionTypes';
import R from 'ramda';

const initialState = {
	menuOpen:false,
	currentTab:'',
    modalOpen:{},
    personalInfoExpanded:false,
    appData:{
        appName:'React template',
        tabs:[
            {route:'',name:'בית'},
            {route:'user',name:'משתמשים'},
        ],
    },
}

export default function(state = initialState, action) {
    switch (action.type) {
    	case types.TOGGLE_MENU:
    		return R.assoc('menuOpen', !state.menuOpen, state )
        case types.TOGGLE_EXPAND:
            return R.assoc('personalInfoExpanded', !state.personalInfoExpanded, state )
        case types.TOGGLE_MODAL:
            let newModalState = R.clone(state.modalOpen)
            if (!newModalState[action.modalName]){
                newModalState[action.modalName] = false
            }
            // newModalState[action.modalName] = !newModalState[action.modalName]
            return R.assocPath(['modalOpen',action.modalName], !newModalState[action.modalName], state )
    	case types.SET_CURRENT_TAB:
    		return R.assoc('currentTab', action.tab, state )
        default:
            return state;
    }
}

