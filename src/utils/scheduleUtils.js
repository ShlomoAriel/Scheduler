import * as modelUtils from 'utils/modelUtils'

export function getScheduleSessions(sessionList, currentUser, sessionType, isAdmin, viewAll){
    let homeSessions = modelUtils.populateModelList(currentUser.HomeSesssion, 'sessionName', currentUser.SessionName)
    let sessions = sessionList
    if(sessions && sessionType == 'session'){
        sessions = sessions.map(session =>{
            if(!viewAll && session.user._id != currentUser._id){
                return{}
            }
            let title = 'תפוס'
            if(isAdmin || session.user._id == currentUser._id){
                title = session.user ? session.user.firstName + ' ' + session.user.lastName : ''
            }
            return {
            start:new Date(session.start),
            end:new Date(session.end),
            date:new Date(session.date),
            title: title,
            allDay:session.allDay,
            text:session.text,
            firstName:session.user ? session.user.firstName : '',
            lastName:session.user ? session.user.lastName : '',
            _id:session._id,
            user:{_id:session.user._id},
            allDay:false,
            type:'session',
        }})
    }
    
    if(homeSessions && sessionType == 'homeSession'){
        sessions = homeSessions.map(homeSession =>{ return {
            start:new Date(homeSession.date),
            end:new Date(homeSession.date),
            date:new Date(homeSession.date),
            user:{_id:currentUser._id},
            sessionName:{_id:homeSession.sessionName._id},
            _id:homeSession._id,
            title:(homeSession.sessionName ? homeSession.sessionName.name: '') + ' ' + currentUser.firstName + ' ' + currentUser.lastName,
            allDay:true,
            type:'homeSession',
        }})
    }
    return sessions
}

export function getScheduleUserList(state){
    let userOptions = []
    if(state.login.isAdmin){
        userOptions = state.user.userList.map( user => {
            return { value:user._id, label: user.firstName }
        })   
    } else{
        userOptions.push({value:state.user.currentUser._id, label: state.user.currentUser.firstName})
    }
    
    userOptions.push({value:'all', label: 'בולם'})
    return userOptions
}
        
    