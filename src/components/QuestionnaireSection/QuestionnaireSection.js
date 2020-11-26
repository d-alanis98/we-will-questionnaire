import React from 'react';
//Components
import ConditionalRendering from '../ConditionalRendering/ConditionalRendering';
//Helpers
import Animations from '../../helpers/Animations';
//Styles
import './QuestionnaireSection.css';

const QuestionnaireSection = ({
    id, 
    children,
    renderIf,
    className,
    animation,
    animationOffset,
    animationDuration,
    ...extraProps
}) => (
    <ConditionalRendering
        condition = { renderIf !== undefined ? renderIf : true }
    >
        <div
            id = { id }
            className = { `questionnaire__section ${ className || '' }` }
            { ...Animations.getAnimationAttributes(animation, animationOffset, animationDuration) }
            { ...extraProps }
        >
            { children }
        </div>
    </ConditionalRendering>

);

export default QuestionnaireSection;