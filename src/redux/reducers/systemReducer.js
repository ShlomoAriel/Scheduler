import * as types from '../actions/actionTypes';
import R from 'ramda';

const initialState = {
	menuOpen:false,
	currentTab:'',
    modalOpen:false,
    personalInfoExpanded:false,
    appData:{
        appName:'React template',
        tabs:[
            {route:'',name:'בית'},
            {route:'user',name:'משתמשים'},
            {route:'event',name:'ארוע'},
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
            return R.assoc('modalOpen', !state.modalOpen, state )
    	case types.SET_CURRENT_TAB:
    		return R.assoc('currentTab', action.tab, state )
        default:
            return state;
    }
}

