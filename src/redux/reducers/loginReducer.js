import * as types from '../actions/actionTypes';
import * as systemUtils from 'utils/systemUtils';
import R from 'ramda';

const initialState = {
	form:{
		email:'',
		password:'',
	},
    authenticated:false,
	token:'',
    isAdmin:false,

}

export default function(state = initialState, action) {
    switch (action.type) {
    	case types.UPDATE_LOGIN_FIELD:
    		return R.assocPath(['form',action.field], action.value, state )
    	case types.SET_TOKEN:
            let newState = R.assoc('token', action.token, state )
            if(!action.token || action.token == ''){
                newState.isAdmin = false
            } else{
                newState.isAdmin = systemUtils.isAdmin()
            }
    		return R.assoc('authenticated', newState.token !== '', newState )
        default:
            return state;
    }
}

