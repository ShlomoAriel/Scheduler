import React from 'react'
import PropTypes from 'prop-types'

const NumberRange = ({ field, label, onUpdate, fromValue, toValue }) => {

    function buildNumberRange(range, value){
        if(range == 'from' && Number(value) > Number(toValue))
            onUpdate(field + '_to', value, 'number-range')
        else if(range == 'to' && Number(value) < Number(fromValue))
            onUpdate(field + '_from', value, 'number-range')

        onUpdate(field + '_' + range, value, 'number-range')
    }

    return(
        <div>
            <div className="number-range">
                { label && <label htmlFor={field} className="number-range__label">{label}</label> }
                <div className="number-range__input">
                    <input
                        type={'number'}
                        name={field}
                        placeholder={'From'}
                        value={fromValue || undefined}
                        onChange={ event => buildNumberRange('from', event.target.value) }/>
                </div>
                <div className="number-range__input">
                    <input
                        type={'number'}
                        name={field}
                        placeholder={'To'}
                        value={toValue || undefined}
                        onChange={ event => buildNumberRange('to', event.target.value) }/>
                </div>  
            </div>
        </div>
    )
}

NumberRange.propTypes = {
    field: PropTypes.string,
    label: PropTypes.string,
    onUpdate: PropTypes.func,
}

export default NumberRange
