import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const SelectInput = ({ field, label, onSelect, defaultOption, value, options, placeholder, fieldClass }) => {

    value = value || defaultOption

    function filterOption(option, filterString) {
        return option.label ? option.label.toLowerCase().indexOf(filterString.toLowerCase()) >= 0 : false
    }

    return (
        <div>
            { label && <label htmlFor={field}>{label}</label> }
            <Select
                className={fieldClass}
                name={field}
                value={value}
                searchable={false}
                options={options}
                onChange={ option => onSelect(field, option.value) }
                filterOption={filterOption}
                noResultsText={'No results found'}
                placeholder={placeholder}
                clearable={false}
            />
        </div>
    )
}

SelectInput.propTypes = {
    field: PropTypes.string,
    label: PropTypes.string,
    onSelect: PropTypes.func,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    placeholder: PropTypes.string
}

SelectInput.defaultProps = {
    options: [],
    defaultOption: ''
}

export default SelectInput
