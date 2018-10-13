import React from 'react'
import PropTypes from 'prop-types'

const Loader = ({message, className, isOpen}) => {
    return (
    	<div>
    	{ isOpen &&
	       <div className="showbox">
	       
	       		<div className="loader">
				  {
				  	<svg className="circular" viewBox="25 25 50 50">
				      <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10"/>
				    </svg>
				  }
				  </div>
			</div>
		}
		</div>
    )
}

Loader.propTypes = {
    message: PropTypes.string,
    className: PropTypes.string
}

export default Loader
