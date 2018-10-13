import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

const DateRangePicker = ({ field, label, onUpdate, placeholder, fromValue, toValue }) => {

    function buildDateRange(range, date){
        if(range == 'from' && date > toValue)
            onUpdate(field + '_to', date, 'date-range')
        else if(range == 'to' && date < fromValue)
            onUpdate(field + '_from', date, 'date-range')

        onUpdate(field + '_' + range, date, 'date-range')
    }

    return(
        <div>
            { label && <label htmlFor={field} className="label">{label}</label> }
            <div className="date-range-picker">
                <div className="date-range-picker__label">From</div>
                <DatePicker
                    className="date-range-picker__picker"
                    dateFormat="DD-MMM-YYYY"
                    name={field}
                    selected={fromValue}
                    onChange={ date => buildDateRange('from', date) }/>

                <div className="date-range-picker__label">To</div>
                <DatePicker
                    className="date-range-picker__picker"
                    dateFormat="DD-MMM-YYYY"
                    name={'To'}
                    selected={toValue}
                    onChange={ date => buildDateRange('to', date) }/>
                    
            </div>
        </div>
    )
}

DateRangePicker.propTypes = {
    field: PropTypes.string,
    label: PropTypes.string,
    onUpdate: PropTypes.func,
    placeholder: PropTypes.string
}

export default DateRangePicker
