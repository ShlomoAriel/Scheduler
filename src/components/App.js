import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import * as systemActions from 'redux/actions/systemActions'
import * as loginActions from 'redux/actions/loginActions'
import * as userActions from 'redux/actions/userActions'
import HeaderComponent from 'components/common/Header/container/HeaderComponent'
import Loader from 'components/common//Loader/Loader'


class App extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    componentWillMount(){
        var test = this.props.location.pathname ? this.props.location.pathname :''
      if( !(this.props.authenticated)){
          const jwt = localStorage.getItem('token')
          if(!jwt){
            this.props.history.push('/login')
            this.props.goTo('login') 
          } else{
            this.props.setToken(jwt)
          }
      }  
    }
    componentDidUpdate(prevProps, prevState) {
      if( !(this.props.authenticated) && !(this.props.location.pathname === '/login')) {
         this.props.history.push('/login')
         this.props.goTo('login')
      }
    }

    render() {
        return (
            <div>
                <Loader isOpen={this.props.isOpen}/>
                <div>
                  <HeaderComponent />
                    <div className="container">
                      {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

}
App.propTypes = {

}

function mapStateToProps(state, ownProps) {
    return {
        authenticated:state.login.authenticated,
        isOpen: state.webUI.isOpen['main']
    }
}

function mapDispatchToProps(dispatch) {
    return {
       goTo(tab){
            dispatch(systemActions.setCurrentTab(tab))
        },
        setToken(token){
            dispatch(loginActions.setToken(token))
            dispatch(userActions.getUserList())
        }
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(App))
