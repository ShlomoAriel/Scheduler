import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({name, onChange, field, value, className, id}) => {
    return (
            
                <input
                    type="checkbox"
                    name={name}
                    className={className}
                    value={value}
                    id={name + '_' + value}
                    checked={value}
                    onChange={check =>onChange(field, id, !value)}/>
            
    );
};

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    error: PropTypes.string
};

export default Checkbox;
