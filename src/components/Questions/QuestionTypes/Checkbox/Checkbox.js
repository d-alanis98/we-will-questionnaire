import React from 'react';
//Icons
import { ReactComponent as CheckMark } from './icon/check-mark.svg';
//Styles
import './Checkbox.css';

const Checkbox = ({ 
    id,
    name,
    value,
    unique,
    className,
    labelText,
    ...extraProps
}) => (
    <label 
        className = { `checkbox ${className || ''}` } 
    >
        <span className='checkbox__input'>
            <input 
                id = { id } 
                type = { unique ? 'radio' : 'checkbox' } 
                name = { name }
                value = { value }
                { ...extraProps }
            />
            <span className='checkbox__control'>
                <CheckMark />
            </span>
        </span>
        <span>{ labelText }</span>
    </label>
);

export default Checkbox;