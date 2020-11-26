import React from 'react';
//Components
import QuestionBody from '../../QuestionBody/QuestionBody';
//Styles
import './Textarea.css';

const Textarea = ({ 
    id,
    name,
    onChange,
    animation,
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
        <textarea
            id = { id }
            name = { name }
            onChange = { onChange }
            { ...extraProps }
        >
        </textarea>
    </QuestionBody>
);

export default Textarea;