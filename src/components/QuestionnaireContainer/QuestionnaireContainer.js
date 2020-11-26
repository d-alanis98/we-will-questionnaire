import React from 'react';
//Styles
import './QuestionnaireContainer.css';

const QuestionnaireContainer = ({ children }) => {
    return (
        <div className='questionnaire__container'>
            { children }
        </div>
    );
}

export default QuestionnaireContainer;