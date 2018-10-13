import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const AutoCompleteInput = ({ field, label, onSelect, defaultOption, value, options, onUpdate, minLetters, clearable, placeholder, fetchOptions, clearOptions }) => {
    value = value || defaultOption

    function filterOption(option, filterString) {
        return option.label ? option.label.toLowerCase().indexOf(filterString.toLowerCase()) >= 0 : false
    }

    function checkInput(field, text){
        if(text.length == minLetters)
            fetchOptions(field, text)
        if(text.length == 0)
            clearOptions(field)

        onUpdate(field, text)
    }

    return (
        <div>
            { label && <label htmlFor={field}>{label}</label> }
            <Select
                name={field}
                value={value}
                options={options}
                onChange={ option => onSelect(field, option.value) }
                onInputChange={ text => checkInput(field, text) }
                filterOption={filterOption}
                noResultsText={'No results found'}
                placeholder={placeholder}
                clearable={clearable}
            />
        </div>
    )
}

AutoCompleteInput.propTypes = {
    field: PropTypes.string,
    label: PropTypes.string,
    onSelect: PropTypes.func,
    onUpdate: PropTypes.func,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    clearable: PropTypes.bool,
    placeholder: PropTypes.string
}

AutoCompleteInput.defaultProps = {
    options: [],
    defaultOption: '',
    minLetters: 0,
    clearable: false
}

export default AutoCompleteInput
