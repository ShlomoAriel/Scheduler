import React from 'react';
import {connect} from 'react-redux';
import R from 'ramda';
import Modal from '../display/Modal';
import * as systemActions from 'redux/actions/systemActions'

class ModalComponent extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
	state = { show: false };
    componentWillMount(){}
    componentDidUpdate(prevProps, prevState) {}
    render() {
        return <Modal
                {...this.props}
                {...this.props.children}
        />
    }

}
function mapStateToProps(state) {
    return {
    	show: state.system.modalOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
		toggleModal(){
	        dispatch(systemActions.toggleModal())
	    }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(ModalComponent)

