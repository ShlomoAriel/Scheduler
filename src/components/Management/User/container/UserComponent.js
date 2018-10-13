import React from 'react'
import {connect} from 'react-redux';
import R from 'ramda';
import * as systemActions from 'redux/actions/systemActions'
import * as userActions from 'redux/actions/userActions'
import User from '../display/User';

class UserContainer extends React.Component {
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
        return <User
                {...this.props}
                fields={this.getFields()}
        />
    }

}

function mapStateToProps(state) {
    return {
    	form: state.user.form,
        userList: state.user.userList,
        authenticated: state.user.authenticated,
        currentUserId: state.user.currentUser._id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onInputFieldChange(field, value){
            dispatch( userActions.updateInputField(field, value) )
        },
        addUser(e){
            e.preventDefault();
            dispatch( userActions.addUser() )
        },
        removeUser(id){
            dispatch( userActions.removeUser(id) )
        },
        saveUser(id){
            dispatch( userActions.updateUser(id) )
        },
        setEeditUser(id){
            dispatch( userActions.setEeditUser(id) )
        },
        updaeUser(id){
            dispatch( userActions.updaeUser(id) )
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(UserContainer)

