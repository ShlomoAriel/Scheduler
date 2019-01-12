import * as types from '../actions/actionTypes';
import R from 'ramda';
import moment from 'moment';
var date = new Date()
var emptyForm = {
        start:moment(date).hours(12).minutes(0),
        end:moment(date).hours(13).minutes(0),
        date:moment(date)
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
        // case types.SET_CURRENT_EVENT:
        //     return R.assoc('currentEvent', action.event, state )
        case types.SET_CURRENT_EVENT_LIST:
            return R.assocPath(['currentEvent', action.listName], action.list, state )
        case types.UPDATE_EVENT:
            var newState =  R.clone(state)
            newState.form = emptyForm;
            newState.currentEvent = {};
            return newState
        case types.SET_EDIT_EVENT:
            var newState =  R.clone(state)
            if(action.event._id){
                let event = R.find(R.propEq('_id', action.event._id))(state.eventList);
                newState.form._id = event._id
                newState.form.start = moment(event.start)
                newState.form.end = moment(event.end)
                newState.form.date = moment(event.date)
                newState.form.title = event.title
                newState.form.user = event.user
                newState.currentEvent = event
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

