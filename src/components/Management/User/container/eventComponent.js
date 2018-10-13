import React from 'react'
import {connect} from 'react-redux';
import R from 'ramda';
import * as eventActions from 'redux/actions/eventActions'
import Event from '../display/Event';

class EventContainer extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    componentWillMount(){}
    componentDidUpdate(prevProps, prevState) {}
    getFields() {
        return { 
            'emailInput': { fieldClass:'form-control',field: 'email', name:'email', placeholder: 'דואר אלקטרוני', value: this.props.form.email, onUpdate: this.props.onInputFieldChange },
            'passwordInput': { type:'password', fieldClass:'form-control',field: 'password', name:'password', placeholder: 'סיסמה', value: this.props.form.password, onUpdate: this.props.onInputFieldChange },
            'passwordConfirmInput': { type:'password', fieldClass:'form-control',field: 'passwordConfirm', name:'passwordConfirm', placeholder: 'וידוא סיסמה', value: this.props.form.passwordConfirm, onUpdate: this.props.onInputFieldChange },
            'nameInput': {fieldClass:'form-control',field: 'name', name:'name', placeholder: 'שם', value: this.props.form.name, onUpdate: this.props.onInputFieldChange },
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
        saveEvent(id){
            dispatch( eventActions.updateEvent(id) )
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

