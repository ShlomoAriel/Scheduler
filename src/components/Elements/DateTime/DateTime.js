import React from 'react'
import PropTypes from 'prop-types'
import Datetime from 'react-datetime'
import moment from 'moment'

const DateTime = ({ field, startField, endField, dateField, label, onUpdate, placeholder, fromValue, toValue, date, fieldClass }) => {
    function startFieldChange(dateTime){
        if(dateTime > toValue){
            endFieldChange(dateTime)
        }
        onUpdate(startField, dateTime)
    }
    function endFieldChange(dateTime){
        if(dateTime < fromValue){
            startFieldChange(dateTime)
        }
        onUpdate(endField, dateTime)
    }
    function dateFieldChange(dateTime){
        onUpdate(dateField, dateTime)
    }
    return(
        <div className="date-wrapper">
            <div className="time-holder">
                <Datetime 
                    defaultValue={"09:00"}
                    className={fieldClass}
                    dateFormat={false}
                    input={false}
                    onChange={startFieldChange}
                    timeConstraints={{ minutes: { step: 15 }}}
                    timeFormat={"HH:mm"}
                    value={fromValue}
                    />
                <Datetime 
                    defaultValue={"09:00"}
                    className={fieldClass}
                    dateFormat={false}
                    input={false}
                    onChange={endFieldChange}
                    timeConstraints={{ minutes: { step: 15 }}}
                    timeFormat={"HH:mm"}
                    value={toValue}
                    />
            </div>
            <div>
                <Datetime 
                    className={fieldClass}
                    input={false}
                    onChange={dateFieldChange}
                    timeFormat={false}
                    value={date}
                    />
            </div>
        </div>
  
    )
}

DateTime.propTypes = {
    field: PropTypes.string,
    label: PropTypes.string,
    onUpdate: PropTypes.func,
    placeholder: PropTypes.string
}

export default DateTime
