import * as types from './actionTypes'

export function toggleMenu(){
    return {
        type: types.TOGGLE_MENU
    }
}

export function toggleModal(modalName){
    return {
        type: types.TOGGLE_MODAL,
        modalName:modalName
    }
}

export function toggleExpand(){
    return {
        type: types.TOGGLE_EXPAND
    }
}

export function setCurrentTab(tab){
    return {
        type: types.SET_CURRENT_TAB,
        tab: tab
    }
}

export function updateInputField(state, field, value){
    return {
        type: types.UPDATE_INPUT_FIELD,
        field: field, 
        value: value
    }
}

// export function getobjectList(objectName){
//     return (dispatch, getState) => {
//         return http.get('https://get-fit-server.herokuapp.com/api/get' + objectName + 's')
//         .then ( 
//             response => {
//                 console.log('Success: ' + response)
//                 dispatch(setUserList(response.data))
//             }
//         )
//         .catch( 
//             error => 
//                 console.log('error loging in: ' + error)
//         )
//     }
// }
// export function addObject(objectName){
//     return (dispatch, getState) => {
//         let form = getState().user.form
//         return http.post('https://get-fit-server.herokuapp.com/api/add' + objectName ,form)
//         .then ( 
//             response => {
//                 dispatch(getUserList())
//                 console.log('Success: ' + response)
//             }
//         )
//         .catch( 
//             error => 
//                 console.log('error loging in: ' + error)
//         )
//     }
// }

// export function updaeObject(id, user, objectName){
//     return (dispatch, getState) => {
//         let form = getState().user.form
//         return http.put('https://get-fit-server.herokuapp.com/api/update' + objectName + '/' + id, user)
//         .then (
//             response => {
//                 dispatch(getUserList())
//                 console.log('Success: ' + response)
//             }
//         )
//         .catch( 
//             error => 
//                 console.log('error loging in: ' + error)
//         )
//     }
// }

// export function removeObject(id, objectName){
//     return (dispatch, getState) => {
//         let form = getState().user.form
//         const jwt = localStorage.getItem('token');
//         return axios.delete('https://get-fit-server.herokuapp.com/api/delete' + objectName + '/' + id,{
//             headers:{
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': jwt
//             }
//         })
//         .then ( 
//             response => {
//                 dispatch(getUserList())
//                 console.log('Success: ' + response)
//             }
//         )
//         .catch( 
//             error => 
//                 console.log('error loging in: ' + error)
//         )
//     }
// }