import React from 'react';
import TextInput from'../../../Elements/TextInput/TextInput'

const Signup = ({form, authenticated, userList, onInputFieldChange, addUser, removeUser, updaeUser, setEeditUser, fields, currentUserId}) => {
    
	return (
		  <div className="user-dashboard">
		  	<div className="fade-in">
			  <div className="user">
			  	<div className="user-list list-general-wrapper">
				  	<div>
			  			<h3>רשימת מתאמנים</h3>
			  			<div>
			  				<div className="custom-row">
								<div>שם פרטי</div>
								<div>שם משפחה</div>
								<div>טלפון</div>
								<div></div>
								<div></div>
								<div></div>
							</div>
		  					{ userList.map( user =>
	  						<div key={user._id} className={"custom-row" + (user._id === currentUserId ? ' active' : '')}>
	  							<div>{user.name}</div>
	  							<div>{user.email}</div>
	  							<div>{user.phone}</div>
	  							<div><i className="fa fa-trash-o" onClick={()=>removeUser(user._id)}></i></div>
	  							<div><i className="fa fa-pencil" onClick={()=>setEeditUser(user._id)}></i></div>
	  							{user._id == currentUserId &&
	  								<div><i className="fa fa-save" onClick={()=>updaeUser(user._id)}></i></div>
	  							}
	  						</div>
	  						)}
			  			</div>
				  	</div>
				  </div>
			  	<div>
				  	<form>
				  		<h3>משתמש</h3>
					  	<div className="form">
					  	{ Object.keys(fields).map( fieldName =>
				  			<div key={fieldName}>
						  		<TextInput {...fields[fieldName]}/>
					  		</div>	
				  		)}
				  		<div className="button-holder">
  						  		<input className="form-control"/>
  						  		<button className="fa fa-arrow-circle-o-right login-button" onClick={addUser}></button>
  					  		</div>
					  	</div>
				  	</form>
		  		</div>
			  </div>
		  	</div>
		  </div>
);
}
export default Signup;
