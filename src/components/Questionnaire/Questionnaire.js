import React from 'react';
//Components
import SpaceType from './Sections/SpaceType/SpaceType';
import ProjectType from './Sections/ProjectType/ProjectType';
import QuestionnaireContainer from '../QuestionnaireContainer/QuestionnaireContainer';

const Questionnaire = () => {
    return (
        <div className='container'>
            <QuestionnaireContainer>
                <SpaceType />
                <ProjectType />
            </QuestionnaireContainer>
        </div>
    );
}

export default Questionnaire;