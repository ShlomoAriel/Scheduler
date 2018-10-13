import * as config from '../../utils/config'
import * as types from './actionTypes'
import R from 'ramda';
import axios from 'axios';
import * as http from '../../utils/axiosWrapper'

export function updateInputField(field, value){
    return {
        type: types.UPDATE_USER_FIELD,
        field: field, 
        value: value
    }
}

export function setUserList(userList){
    return {
        type: types.SET_USER_LIST,
        userList: userList
    }
}

export function setCurrentUser(userId){
    return (dispatch, getState) => {
        // let user = R.find(R.propEq('_id', userId))(getState().user.userList);
        // if(user){
        //     dispatch({
        //         type: types.SET_CURRENT_USER,
        //         user: user
        //     })
        // } else{
                dispatch(getUser(userId))
        // }
    }
}

export function setEeditUser(userId){
    return (dispatch, getState) => {
        let user = R.find(R.propEq('_id', userId))(getState().user.userList);
        if(user){
            dispatch({
                type: types.SET_EDIT_USER,
                user: user
            })
        } else{
                dispatch(getUser(userId))
        }
    }
    return 
}

export function getUser(id){
    return (dispatch, getState) => {
        if(!id){
            return
        }
        return http.get(config.currentUrl + '/api/getUser/' + id)
        .then ( 
            response => {
                console.log('Success: ' + response)
                if(response.data.user){
                    response.data.user = {...response.data.user, ...response.data.models}
                    dispatch({
                        type: types.SET_CURRENT_USER,
                        user: response.data.user
                    })
                }
            }
        )
        .catch( 
            error => 
                console.log('error loging in: ' + error)
        )
    }
}

export function getUserList(){
    return (dispatch, getState) => {
        return http.get(config.currentUrl + '/api/getUsers')
        .then ( 
            response => {
                console.log('Success: ' + response)
                dispatch(setUserList(response.data))
            }
        )
        .catch( 
            error => 
                console.log('error loging in: ' + error)
        )
    }
}

export function addUser(){
    return (dispatch, getState) => {
        let form = R.clone(getState().user.form)
        form.role = '57d2837a13d468481b1fe133'
        return http.post(config.currentUrl + '/api/addUser',form)
        .then ( 
            response => {
                dispatch(getUserList())
                console.log('Success: ' + response)
            }
        )
        .catch( 
            error => 
                console.log('error loging in: ' + error)
        )
    }
}

export function updaeUser(id){
    return (dispatch, getState) => {
        let form = getState().user.form
        return http.put(config.currentUrl + '/api/updateUser/'+id, form)
        .then (
            response => {
                dispatch(getUserList())
                dispatch({type: types.UPDATE_USER})
                console.log('Success: ' + response)
            }
        )
        .catch( 
            error => 
                console.log('error loging in: ' + error)
        )
    }
}

export function removeUser(id){
    return (dispatch, getState) => {
        let form = getState().user.form
        const jwt = localStorage.getItem('token');
        return http.remove(config.currentUrl + '/api/deleteUser/'+id)
        .then ( 
            response => {
                dispatch(getUserList())
                console.log('Success: ' + response)
            }
        )
        .catch( 
            error => 
                console.log('error loging in: ' + error)
        )
    }
}