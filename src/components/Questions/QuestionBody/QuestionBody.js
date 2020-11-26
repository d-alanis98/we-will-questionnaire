import React from 'react';
//Helpers
import Animations from '../../../helpers/Animations';


const QuestionBody = ({ 
    children,
    animation,
    animationOffset, 
    animationDuration,
    ...extraProps 
}) => (
    <div 
        { ...Animations.getAnimationAttributes(animation, animationOffset, animationDuration) }
        { ...extraProps }
    >
        { children }
    </div>
);

export default QuestionBody;