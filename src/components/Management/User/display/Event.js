import React from 'react';
import TextInput from'../../../Elements/TextInput/TextInput'

const Event = ({form, authenticated, eventList, onInputFieldChange, addEvent, removeEvent, updateEvent, setEeditEvent, fields, currentEventId}) => {
    
	return (
		  <div className="event-dashboard">
		  	<div className="fade-in">
			  <div className="event">
			  	<div className="event-list list-general-wrapper">
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
		  					{ eventList.map( event =>
	  						<div key={event._id} className={"custom-row" + (event._id === currentEventId ? ' active' : '')}>
	  							<div>{event.name}</div>
	  							<div>{event.email}</div>
	  							<div>{event.phone}</div>
	  							<div><i className="fa fa-trash-o" onClick={()=>removeEvent(event._id)}></i></div>
	  							<div><i className="fa fa-pencil" onClick={()=>setEeditEvent(event._id)}></i></div>
	  							{event._id == currentEventId &&
	  								<div><i className="fa fa-save" onClick={()=>updaeEvent(event._id)}></i></div>
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
  						  		<button className="fa fa-arrow-circle-o-right login-button" onClick={addEvent}></button>
  					  		</div>
					  	</div>
				  	</form>
		  		</div>
			  </div>
		  	</div>
		  </div>
);
}
export default Event;
