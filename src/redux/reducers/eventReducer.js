import * as types from '../actions/actionTypes';
import R from 'ramda';
const emptyForm = {
        email:'',
        name:'',
        email:'',
        password:'',
        passwordConfirm:'',
    }
const initialState = {
	form:emptyForm,
    eventList:[],
    eventPackageMap:{},
    currentEvent:{}
}

export default function(state = initialState, action) {
    switch (action.type) {
    	case types.UPDATE_EVENT_FIELD:
    		return R.assocPath(['form',action.field], action.value, state )
        case types.SET_CURRENT_EVENT:
            return R.assoc('currentEvent', action.event, state )
        case types.SET_CURRENT_EVENT_LIST:
            return R.assocPath(['currentEvent', action.listName], action.list, state )
        case types.UPDATE_EVENT:
            var newState =  R.clone(state)
            newState.form = emptyForm;
            newState.currentEvent = {};
            return newState
        case types.SET_EDIT_EVENT:
            var newState =  R.clone(state)
            if(state.currentEvent._id != action.event._id){
                newState.form = R.mergeDeepRight(emptyForm,action.event)
                delete newState.form.password
                newState.currentEvent = action.event
            } else{
                newState.form = emptyForm
                newState.currentEvent = {}
            }
            return newState
        case types.SET_EVENT_LIST:
            return R.assoc('eventList', action.eventList, state )
        default:
            return state;
    }
}

