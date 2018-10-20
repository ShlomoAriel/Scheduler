import React from 'react'
import {connect} from 'react-redux';
import R from 'ramda';
import * as eventActions from 'redux/actions/eventActions'
import Event from '../display/Event';

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
            'nameInput': {type: 'input', fieldClass:'form-control',field: 'name', name:'name', placeholder: 'שם', value: this.props.form.name, onUpdate: this.props.onInputFieldChange },
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
        },
        removeEvent(id){
            dispatch( eventActions.removeEvent(id) )
        },
        onSelectEvent(event){
            console.log('onSelectEvent');
            // dispatch( eventActions.updateEvent(id) )
        },
        selectSlot(slot){
            console.log('selectSlot');
            // dispatch( eventActions.updateEvent(id) )
        },
        saveEvent(id){
            dispatch( eventActions.updateEvent(id) )
        },
        getEventList(){
            dispatch( eventActions.getEventList() )
        },
        setEeditEvent(id){
            dispatch( eventActions.setEeditEvent(id) )
        },
        updateEvent(id){
            dispatch( eventActions.updateEvent(id) )
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(EventContainer)

