import React from 'react'
import {connect} from 'react-redux';
import R from 'ramda';
import * as eventActions from 'redux/actions/eventActions'
import Event from '../display/Event';
import * as systemActions from 'redux/actions/systemActions'
import moment from 'moment';

class EventContainer extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    componentWillMount(){
        this.props.getEventList()
    }
    componentDidUpdate(prevProps, prevState) {}
    getFields() {
        return { 
            'dateInput': { type: 'dateTime', fieldClass:'inline',startField: 'start', endField:'end', dateField:'date', name:'start', 
                                 placeholder: 'start', value: this.props.form.start, onUpdate: this.props.onInputFieldChange ,
                                 fromValue:this.props.form.start, toValue: this.props.form.end, date: this.props.form.date},
            'titleInput': {type: 'input', fieldClass:'form-control',field: 'title', name:'title', placeholder: 'שם', value: this.props.form.title, onUpdate: this.props.onInputFieldChange },
        }
    }
    render() {
        return <Event
                {...this.props}
                fields={this.getFields()}
        />
    }

}

function mapStateToProps(state) {
    let eventList = state.event.eventList.map( event => {
        let newEvent = R.clone(event)
        // newEvent.start = moment(event.start)
        // newEvent.end = moment(event.end)
        // newEvent.date = moment(event.date)
        return newEvent
    })
    return {
    	form: state.event.form,
        eventList: state.event.eventList,
        authenticated: state.event.authenticated,
        isAdmin: state.login.isAdmin,
        currentEventId: state.event.currentEvent._id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onInputFieldChange(field, value){
            dispatch( eventActions.updateInputField(field, value) )
        },
        addEvent(e){
            e.preventDefault();
            dispatch( eventActions.addEvent() )
            dispatch(systemActions.toggleModal())
        },
        removeEvent(id){
            dispatch( eventActions.removeEvent(id) )
        },
        onSelectEvent(event){
            let eventId = event ? event._id : undefined
            dispatch(eventActions.setEeditEvent(event) )
            dispatch( eventActions.updateInputField('date', moment(event.start)) )
            dispatch(systemActions.toggleModal())
        },
        selectSlot(slot){
            console.log('selectSlot');
        },
        saveEvent(id){
            dispatch( eventActions.updateEvent(id) )
        },
        getEventList(){
            dispatch( eventActions.getEventList() )
        },
        setEeditEvent(id){
            dispatch( eventActions.setEeditEvent(id) )
            toggleModal()
        },
        toggleModal(){
            dispatch(systemActions.toggleModal())
        },
        updateEvent(id){
            dispatch( eventActions.addEvent(id) )
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(EventContainer)

