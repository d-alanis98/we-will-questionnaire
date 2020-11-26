import React from 'react';
//Components
import SpaceType from './Sections/SpaceType/SpaceType';
import QuestionnaireContainer from '../QuestionnaireContainer/QuestionnaireContainer';

const Questionnaire = () => {
    return (
        <QuestionnaireContainer>
            <SpaceType />
        </QuestionnaireContainer>
    );
}

export default Questionnaire;