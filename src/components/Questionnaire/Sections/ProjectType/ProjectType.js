import React from 'react';
//Components
import QuestionBody from '../../../Questions/QuestionBody/QuestionBody';
import QuestionHeader from '../../../Questions/QuestionHeader/QuestionHeader';
import QuestionnaireSection from '../../../QuestionnaireSection/QuestionnaireSection';
//Constants
import { H3 } from '../../../../constants/headers';
import { FADE_DOWN, FADE_LEFT } from '../../../../constants/animations';



const ProjectType = () => (
    <QuestionnaireSection
        id = 'project_type'
        animation = { FADE_LEFT }
    >
        <QuestionHeader
            type = { H3 }
            className = 'text--bold'
        >
            ¿YA SABES QUE TIPO DE PROYECTO QUIERES?
        </QuestionHeader>
        <QuestionBody>
            
        </QuestionBody>
    </QuestionnaireSection>
);

export default ProjectType;