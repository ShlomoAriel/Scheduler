import PropTypes from 'prop-types'
import React  from 'react'
import  AutoCompleteInput  from '../AutoCompleteInput/AutoCompleteInput'
import  SelectInput  from '../SelectInput/SelectInput'
import  TextInput  from '../TextInput/TextInput'
import  Checkbox  from '../Checkbox/Checkbox'
import  DateRangePicker  from '../DateRangePicker/DateRangePicker'
import  DateTime  from '../DateTime/DateTime'
import  NumberRange  from '../NumberRange/NumberRange'
import DateField from '../DateField/DateField'

const InputWrapper = ({ field, startField, endField, dateField, date, label, fieldClass, placeholder, value, onUpdate, onChange, onSelect, name, type, options, minLetters, fromValue, toValue, fetchOptions, clearOptions, search, onEnter, id }) => {
return (
	<div className={"input-wrapper-" + type}>
        {
         type == "auto-complete" &&
            <AutoCompleteInput
                fieldClass={fieldClass}
                field={field}
                value={value}
                label={label}
                placeholder={placeholder}
                onUpdate={onUpdate}
                onSelect={onSelect}
                clearOptions={clearOptions}
                fetchOptions={fetchOptions}
                minLetters={minLetters}
                options={options}/>
        }
        { type == "picklist" &&
            <SelectInput
                fieldClass={fieldClass}
                field={field}
                value={value}
                label={label}
                placeholder={placeholder}
                onSelect={onSelect}
                options={options}/>
        }
        { type == "input" &&
            <TextInput
                fieldClass={fieldClass}
                search={search}
                field={field}
                value={value}
                label={label}
                placeholder={placeholder}
                onSelect={onSelect}
                onKeyDownEnter={onEnter}
                onUpdate={onUpdate}/>
        }
         { type == "dateTime" &&
            <DateTime
                date={date}
                fieldClass={fieldClass}
                startField={startField}
                endField={endField}
                dateField={dateField}
                date={date}
                fromValue={fromValue}
                toValue={toValue}
                label={label}
                placeholder={placeholder}
                onUpdate={onUpdate}v/>
        }
        { type == 'date-range' &&
            <DateRangePicker
                fieldClass={fieldClass}
                field={field}
                fromValue={fromValue}
                toValue={toValue}
                label={label}
                placeholder={placeholder}
                onUpdate={onUpdate}/>
        }
        { type == 'date' &&
            <DateField
                fieldClass={fieldClass}
                field={field}
                value={value}
                label={label}
                placeholder={placeholder}
                onUpdate={onUpdate}/>
        }
        { type == 'number-range' &&
            <NumberRange
                fieldClass={fieldClass}
                field={field}
                fromValue={fromValue}
                toValue={toValue}
                label={label}
                onUpdate={onUpdate}/>
        }
        { type == 'checkbox' &&
            <Checkbox
                id={id}
                fieldClass={fieldClass}
                field={field}
                name={name}
                value={value}
                onChange={onChange}
                label={label}
                // onUpdate={onUpdate}
                />
        }
    </div>
)
}

export default InputWrapper