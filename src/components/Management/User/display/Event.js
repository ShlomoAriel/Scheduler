import React from 'react';
import InputWrapper from'../../../Elements/InputWrapper/InputWrapper'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
BigCalendar.momentLocalizer(moment);

const Event = ({form, authenticated, eventList, isAdmin,
				selectSlot, onSelectEvent, onInputFieldChange, addEvent, removeEvent, updateEvent, setEeditEvent, fields, currentEventId}) => {
    
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
									<InputWrapper {...fields[fieldName]}/>
								</div>	
								)}
								<div className="button-holder">
									<input className="form-control"/>
									<button className="fa fa-arrow-circle-o-right login-button" onClick={addEvent}></button>
								</div>
							</div>
						</form>
					</div>
					{
					<BigCalendar
						min={new Date(2018, 1, 1, 8, 0, 0)}
						max={new Date(2018, 1, 1, 23, 0, 0)}
						events={eventList}
						timeslots={1}
						step={60}
						titleAccessor='name'
						onSelectEvent={isAdmin ? onSelectEvent : null}
						onSelectSlot={isAdmin ? selectSlot : null}
						selectable={isAdmin}
						eventPropGetter={
							(event, start, end, isSelected) => {
								let newStyle = {
								backgroundColor: "lightgreen",
								color: 'black',
								borderRadius: "0px",
								border: "none"
								};
								if (event.title == 'תפוס'){
									newStyle.backgroundColor = "lightgray"
								}
								return {
									className: "",
									style: newStyle
								};
							}
						}
					/>
					}
				</div>
			</div>
		</div>
);
}
export default Event;
