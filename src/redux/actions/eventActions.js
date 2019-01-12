import * as config from '../../utils/config'
import * as types from './actionTypes'
import * as http from '../../utils/axiosWrapper'
import axios from 'axios'
import R from 'ramda'
import moment from 'moment'
export function updateInputField(field, value){
    return {
        type: types.UPDATE_EVENT_FIELD,
        field: field, 
        value: value
    }
}

export function setEventList(eventList){
    return {
        type: types.SET_EVENT_LIST,
        eventList: eventList
    }
}

export function setCurrentEvent(eventId){
    return {
        type: types.SET_CURRENT_EVENT,
        eventId: eventId
    }
}
// updateWorker(worker){
//         let testObject = {entityName:'worker2', entityData:worker}
//         return this.$http.put(url + '/api/updateEntity/' + worker._id,testObject);
//     }
export function getEventList(){
    return (dispatch, getState) => {
        let testObject = {entityName:'Event'}
        return http.get(config.currentUrl + '/api/getEntities',testObject)
        .then ( 
            response => {
                console.log('Success: ' + response)
                dispatch(setEventList(response.data))
            }
        )
        .catch( 
            error => 
                console.log('getEventList in: ' + error)
        )
    }
}

export function getEventByUser(){
    return (dispatch, getState) => {
        let userId = getState().user.currentUser._id
        if(!userId){
            return
        }
        return http.get(config.currentUrl + '/api/getEventByUser/' + userId)
        .then ( 
            response => {
                console.log('Success: ' + response)
                dispatch(setEventList(response.data))
            }
        )
        .catch( 
            error => 
                console.log('getEventByUser in: ' + error)
        )
    }
}

export function addEvent(){
    return (dispatch, getState) => {
        let form = R.clone(getState().event.form)
        form.user = getState().user.currentUser._id
        let newStart = moment(form.date);
        newStart.hour(form.start.hour());
        newStart.minutes(form.start.minute());
        form.start = newStart
        let newEnd = moment(form.date);
        newEnd.hour(form.end.hour());
        newEnd.minutes(form.end.minute());
        form.end = newEnd
        let entityObject = {
            entity:form,
            entityName:'Event'
            }
        return http.put(config.currentUrl + '/api/updateEntity', entityObject)
        .then ( 
            response => {
                let upsertedEvent = response.data
                let currentEventList = R.clone(getState().event.eventList)
                const index = R.findIndex(R.propEq('_id', upsertedEvent._id))(currentEventList);
                currentEventList[index] = upsertedEvent
                dispatch(setEventList(currentEventList))
                console.log('Success: ' + response)
            }
        )
        .catch( 
            error => 
                console.log('error addEvent: ' + error)
        )
    }
}

export function updaeEvent(id, event){
    return (dispatch, getState) => {
        let form = getState().event.form
        return http.put(config.currentUrl + '/api/deleteEvent/'+id, event)
        .then (
            response => {
                dispatch(getEventByUser())
                console.log('Success: ' + response)
            }
        )
        .catch( 
            error => 
                console.log('error updaeEvent: ' + error)
        )
    }
}

export function setEeditEvent(event){
    return (dispatch, getState) => {
        dispatch({
            type: types.SET_EDIT_EVENT,
            event: event
        })
    }
    return 
}

export function removeEvent(id){
    return (dispatch, getState) => {
        let form = getState().event.form
        const jwt = localStorage.getItem('token');
        let entityObject = {
            entity:form,
            entityName:'Event'
            }
        return http.remove(config.currentUrl + '/api/deleteEntity/'+ id + '/Event')
        .then ( 
            response => {
                let newEvent = (getState().user.currentUser.Event).filter( item => item._id != id )
                dispatch({
                    type: types.SET_CURRENT_TRAINEE_LIST,
                    listName: 'Event',
                    list: newEvent
                })
                console.log('Success: ' + newEvent)
            }
        )
        .catch( 
            error => 
                console.log('error removeEvent: ' + error)
        )
    }
}