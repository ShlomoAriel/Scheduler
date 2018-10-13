import * as modelUtils from 'utils/modelUtils'

export function getScheduleSessions(sessionList, currentTrainee, sessionType, isAdmin, viewAll){
    let homeSessions = modelUtils.populateModelList(currentTrainee.HomeSesssion, 'sessionName', currentTrainee.SessionName)
    let sessions = sessionList
    if(sessions && sessionType == 'session'){
        sessions = sessions.map(session =>{
            if(!viewAll && session.trainee._id != currentTrainee._id){
                return{}
            }
            let title = 'תפוס'
            if(isAdmin || session.trainee._id == currentTrainee._id){
                title = session.trainee ? session.trainee.firstName + ' ' + session.trainee.lastName : ''
            }
            return {
            start:new Date(session.start),
            end:new Date(session.end),
            date:new Date(session.date),
            title: title,
            allDay:session.allDay,
            text:session.text,
            firstName:session.trainee ? session.trainee.firstName : '',
            lastName:session.trainee ? session.trainee.lastName : '',
            _id:session._id,
            trainee:{_id:session.trainee._id},
            allDay:false,
            type:'session',
        }})
    }
    
    if(homeSessions && sessionType == 'homeSession'){
        sessions = homeSessions.map(homeSession =>{ return {
            start:new Date(homeSession.date),
            end:new Date(homeSession.date),
            date:new Date(homeSession.date),
            trainee:{_id:currentTrainee._id},
            sessionName:{_id:homeSession.sessionName._id},
            _id:homeSession._id,
            title:(homeSession.sessionName ? homeSession.sessionName.name: '') + ' ' + currentTrainee.firstName + ' ' + currentTrainee.lastName,
            allDay:true,
            type:'homeSession',
        }})
    }
    return sessions
}

export function getScheduleTraineeList(state){
    let traineeOptions = []
    if(state.login.isAdmin){
        traineeOptions = state.trainee.traineeList.map( trainee => {
            return { value:trainee._id, label: trainee.firstName }
        })   
    } else{
        traineeOptions.push({value:state.trainee.currentTrainee._id, label: state.trainee.currentTrainee.firstName})
    }
    
    traineeOptions.push({value:'all', label: 'בולם'})
    return traineeOptions
}
        
    