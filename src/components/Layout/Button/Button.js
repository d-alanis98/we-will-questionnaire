import React from 'react';
//Styles
import './Button.css';

const Button = ({ 
    id, 
    name, 
    onClick,
    children,  
    className,
    ...extraProps 
}) => (
    <button
        id = { id }
        name = { name }
        onClick = { onClick }
        className = {`questionnaire-button ${className || ''}`}
        { ...extraProps }
    >
        { children }
    </button>
);

export default Button;