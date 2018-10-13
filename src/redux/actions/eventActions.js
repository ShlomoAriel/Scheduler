import * as config from '../../utils/config'
import * as types from './actionTypes'
import * as http from '../../utils/axiosWrapper'
import axios from 'axios'
import R from 'ramda'
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

export function getEventList(){
    return (dispatch, getState) => {
        return http.get(config.currentUrl + '/api/getEvents')
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

export function getEventByTrainee(){
    return (dispatch, getState) => {
        let traineeId = getState().trainee.currentTrainee._id
        if(!traineeId){
            return
        }
        return http.get(config.currentUrl + '/api/getEventByTrainee/' + traineeId)
        .then ( 
            response => {
                console.log('Success: ' + response)
                dispatch(setEventList(response.data))
            }
        )
        .catch( 
            error => 
                console.log('getEventByTrainee in: ' + error)
        )
    }
}

export function addEvent(){
    return (dispatch, getState) => {
        let form = R.clone(getState().event.form)
        form.trainee = getState().trainee.currentTrainee._id
        form.date = Date()
        return http.post(config.currentUrl + '/api/addEvent',form)
        .then ( 
            response => {
                let newEvent = [...(getState().trainee.currentTrainee.Event), response.data]
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
                dispatch(getEventByTrainee())
                console.log('Success: ' + response)
            }
        )
        .catch( 
            error => 
                console.log('error updaeEvent: ' + error)
        )
    }
}

export function removeEvent(id){
    return (dispatch, getState) => {
        let form = getState().event.form
        const jwt = localStorage.getItem('token');
        return http.remove(config.currentUrl + '/api/deleteEvent/'+id)
        .then ( 
            response => {
                let newEvent = (getState().trainee.currentTrainee.Event).filter( item => item._id != id )
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