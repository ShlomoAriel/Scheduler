import React from 'react';
import TextInput from'../../Elements/TextInput/TextInput'

const Login = ({email, password, authenticated, onInputFieldChange, login}) => {
    const emailInput = { fieldClass:'form-control',field: 'email', name:'email', placeholder: 'email', value: email, onUpdate: onInputFieldChange }
    const passwordInput = { type:'password', fieldClass:'form-control',field: 'password', name:'password', placeholder: 'password', value: password, onUpdate: onInputFieldChange }

	return (
		  <div className="login">
		  { !authenticated ?
		  	<form onSubmit={login} method="post">
		  		
			  	<div className="form">
				  	<div>
				  		<TextInput {...emailInput}/>
				  	</div>
				  	<div>
				  		<TextInput {...passwordInput}/>
				  	</div>
				  	<div className="button-holder">
				  		<input className="form-control"/>
				  		<button className="fa fa-arrow-circle-o-right login-button"></button>
				  	</div>
			  	</div>
		  	</form>
		  	:
		  	<h3> {email} You are logged in</h3>
		  }
			 </div>
);
}
export default Login;
