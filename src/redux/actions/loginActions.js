import * as config from '../../utils/config'
var traineeDataMap = [
                        {action:'SET_DIET_MAP_USER', modelList:'Diet'},
                        {action:'SET_USER_GOAL_LIST', modelList:'TraineeGoal'},
                        {action:'SET_USER_SESSION_LIST', modelList:'Session'},
                        {action:'SET_USER_SCHEDULEDEXERCISE_LIST', modelList:'ScheduledExercise'},
                        {action:'SET_PAYMENT_MAP', modelList:'Payment'},
                        {action:'SET_USER_HOMESESSION_LIST', modelList:'HomeSession'},
                        {action:'SET_USER_SESSIONNAME_LIST', modelList:'SessionName'},
                        // {action:'SET_USER_SESSION_LIST', modelList:'TrainingSession'},
                        {action:'SET_USER_TRAININGPACKAGE_LIST', modelList:'TraineeTrainingPackage'},
                        {action:'SET_USER_STATUS_LISTֹ_MAP', modelList:'TraineeStatus'},
                        ]
import * as types from './actionTypes'
import axios from 'axios';

export function updateInputField(field, value){
    return {
        type: types.UPDATE_LOGIN_FIELD,
        field: field, 
        value: value
    }
}
export function setToken(token){
    return {
        type: types.SET_TOKEN,
        token: token
    }
}
export function login(field, value){
    return (dispatch, getState) => {
        let form = getState().login.form
        dispatch({
            type: types.TOGGLE_LOADER_FIELD,
            field: 'main'
        })
        return axios.post(config.currentUrl + '/api/authenticate',form)
        .then ( 
            response => {
                dispatch( storeUserCredentials(response.data) )
                if(response.data.trainee){
                    response.data.trainee = {...response.data.trainee, ...response.data.models}
                    dispatch({
                        type: types.SET_CURRENT_USER,
                        trainee: response.data.trainee
                    })
                }
                traineeDataMap.forEach( item =>{
                    if(response.data[item.modelList]){
                        dispatch({
                            type: types[item.action],
                            list:response.data[item.modelList],
                            traineeId: response.data.trainee._id
                        })
                    }
                })
                dispatch({
                    type: types.TOGGLE_LOADER_FIELD,
                    field: 'main'
                })
                dispatch( setToken(response.data.token) )
            }
        )
        .catch( 
            error => 
                console.log('error loging in: ' + error)
        )
    }
}
function storeUserCredentials(data) {
	return dispatch =>{
	    window.localStorage.setItem('token', data.token);
	    window.localStorage.setItem('currentUser', data.user._id);
        window.localStorage.setItem('currentUserRole', data.user.role._id);
        if(data.trainee){
	       window.localStorage.setItem('currentTrainee', data.trainee._id); 
        }
	}
}
export function logout(){
    return dispatch =>{
        dispatch( setToken('') )
        dispatch( removeUserCredentials() )
        dispatch({
                    type: types.SET_CURRENT_USER,
                    trainee: {}
                })
    }
}
function removeUserCredentials() {
    return dispatch =>{
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('currentUser');
        window.localStorage.removeItem('currentUserRole');
        window.localStorage.removeItem('currentTrainee');
    }
}