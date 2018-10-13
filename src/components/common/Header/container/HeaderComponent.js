import React from 'react'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import R from 'ramda';
import * as systemActions from 'redux/actions/systemActions'
import * as loginActions from 'redux/actions/loginActions'
import Header from '../display/Header';
import { hashHistory } from 'react-router-dom'

class HeaderCointainer extends React.Component {
    componentDidMount(){
        var test = this.props.match ? this.props.match.params:''
    }
    componentDidUpdate(prevProps, prevState) {}

    render() {
        return <Header 
                    {...this.props}/>
    }

}

function mapStateToProps(state, ownProps) {
    let location = ownProps.match ?ownProps.match.params : ''
    return {
        authenticated:state.login.authenticated,
        isAdmin: state.login.isAdmin,
    	menuOpen:state.system.menuOpen,
    	currentTab:state.system.currentTab,
        appData:state.system.appData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleMenu(){
            dispatch(systemActions.toggleMenu())
        },
        goTo(tab){
        	dispatch(systemActions.setCurrentTab(tab))
        },
        logout(){   
            dispatch(loginActions.logout())
        },
    }
}

export default withRouter((connect( mapStateToProps, mapDispatchToProps )(HeaderCointainer)))