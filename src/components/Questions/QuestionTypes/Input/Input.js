import React from 'react';
//Components
import QuestionBody from '../../QuestionBody/QuestionBody';
//Style
import './Input.css';

const Input = ({ 
    id,
    name,
    type,
    unit,
    small,
    onChange,
    className,
    animation,
    placeholder,
    animationOffset, 
    animationDuration,
    ...extraProps
}) => (
    <QuestionBody
        className = 'questionnaire__question'
        animation = { animation }
        animationOffset = { animationOffset }
        animationDuration = { animationDuration }
    >
        <div 
            className = {`questionnaire__input-container ${small ? 'questionnaire__input-container--small' : ''} ${className || ''}`}
        >
            <input 
                id = { id }
                name = { name }
                type = { type }
                onChange = { onChange }
                placeholder = { placeholder } 
                { ...extraProps }
            />
            <div>
                { unit }
            </div>
        </div>
    </QuestionBody>
);

export default Input;