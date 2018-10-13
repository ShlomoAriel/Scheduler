import React from 'react'
import {connect} from 'react-redux';
import R from 'ramda';
import * as systemActions from 'redux/actions/systemActions'
import * as loginActions from 'redux/actions/loginActions'
import * as webUIActions from 'redux/actions/webUIActions'
import Login from '../display/Login';

class LoginComponent extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    componentWillMount(){}
      
    componentDidUpdate(prevProps, prevState) {
        if( (this.props.authenticated)){
          const jwt = localStorage.getItem('token')
          if(jwt){
            this.props.history.push('/')
          } 
      }  
    }

    render() {
        return (
            <Login{...this.props}/>
        )
    }

}

function mapStateToProps(state) {
    return {
    	username:state.login.username,
        password:state.login.password,
    	authenticated:state.login.authenticated,
    	menuOpen:state.system.menuOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleMenu(){
            dispatch(systemActions.toggleMenu())
        },
        onInputFieldChange(field, value){
            dispatch( loginActions.updateInputField(field, value) )
        },
        login(e){
            e.preventDefault();
            dispatch( loginActions.login() )
        },
        toggleLoader(){
            dispatch(webUIActions.toggleLoaderAt('main'))
        }

    }
}

export default connect( mapStateToProps, mapDispatchToProps )(LoginComponent)

