import * as types from '../actions/actionTypes';
import R from 'ramda';

const initialState = {
	isOpen:{
	},
}

export default function(state = initialState, action) {
    switch (action.type) {
    	case types.TOGGLE_LOADER_FIELD:
            let newState = R.clone(state)
            newState.isOpen[action.field] = newState.isOpen[action.field] ? !newState.isOpen[action.field] : true
    		return newState
        default:
            return state;
    }
}

