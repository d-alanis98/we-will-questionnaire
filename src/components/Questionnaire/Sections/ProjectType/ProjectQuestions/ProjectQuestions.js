import React, { Fragment } from 'react';
//Components
import We from './We/We';
import Will from './Will/Will';
import Design from './Design/Design';
import ConditionalRendering from '../../../../ConditionalRendering/ConditionalRendering';
//Styles
import './ProjectQuestions.css';

const ProjectQuestions = ({ projectType }) => {

    return (
        <Fragment>
            <ConditionalRendering
                condition = { projectType === 'we' }
            >
                <We 
                />
            </ConditionalRendering>
            <ConditionalRendering
                condition = { projectType === 'will' }
            >
                <Will 
                />
            </ConditionalRendering>
            <ConditionalRendering
                condition = { projectType === 'design' }
            >
                <Design 
                />
            </ConditionalRendering>
        </Fragment>
    );
}

export default ProjectQuestions;