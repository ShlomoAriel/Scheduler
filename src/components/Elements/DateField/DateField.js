import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

const DateField = ({...props, className, field, value, onUpdate, placeholder, max, min}) => {
    return (
        <DatePicker
            {...props}
            className={"date-field" + (className ? (' ' + className) : '')}
            dateFormat="YYYY-MM-DD"
            name={field}
            value={value}
            selected={value}
            onChange={date => onUpdate(field, date)}
            placeholderText={placeholder}
            maxDate={max}
            minDate={min}
        />
    )
};

DateField.propTypes = {
    field: PropTypes.string,
    label: PropTypes.string,
    onUpdate: PropTypes.func,
    placeholder: PropTypes.string
}

export default DateField
