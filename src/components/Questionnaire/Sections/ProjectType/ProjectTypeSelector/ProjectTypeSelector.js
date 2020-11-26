import React from 'react';
//Components
import QuestionBody from '../../../../Questions/QuestionBody/QuestionBody';
//Styles
import './ProjectTypeSelector.css';

const ProjectTypeSelector = ({ projectType, handleProjectTypeSelection }) => (
    <QuestionBody>
        <div
            className = 'project-type-selector'
        >
            <img
                src = 'assets/img/we.png'
                alt = 'We'
                height = '100px'
                onClick = { event => handleProjectTypeSelection('we') }
                className = { projectType === 'we' ? 'project-type-selector--active' : '' }
            />
            <img
                src = 'assets/img/will.png'
                alt = 'Will'
                height = '100px'
                onClick = { event => handleProjectTypeSelection('will') }
                className = { projectType === 'will' ? 'project-type-selector--active' : '' }
            />
            <img
                src = 'assets/img/design.png'
                alt = 'Design'
                height = '100px'
                onClick = { event => handleProjectTypeSelection('design') }
                className = { projectType === 'design' ? 'project-type-selector--active' : '' }
            />
        </div>
    </QuestionBody>
);

export default ProjectTypeSelector;