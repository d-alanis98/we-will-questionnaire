import React from 'react';
//Styles
import './SelectionBox.css';

const SelectionBox = ({ 
    id,
    name,
    value,
    unique,
    onChange,
    labelText,
    className,
    ...extraProps
}) => (
    <label
        className = {`selection-box ${className || ''}` }
    >
        <span className='selection-box__input'>
            <input 
                id = { id }
                name = { name }
                value = { value }
                type = { unique ? 'radio' : 'checkbox' }
                onChange = { onChange }
                { ...extraProps }
            />
            <span className='selection-box__control'>
                { labelText }
            </span>
        </span>
    </label>
);

export default SelectionBox;