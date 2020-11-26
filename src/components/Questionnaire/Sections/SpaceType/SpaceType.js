import React from 'react';
//Components
import QuestionBody from '../../../Questions/QuestionBody/QuestionBody';
import SpaceTypeList from './SpaceTypeList/SpaceTypeList';
import QuestionHeader from '../../../Questions/QuestionHeader/QuestionHeader';
import QuestionnaireSection from '../../../QuestionnaireSection/QuestionnaireSection';
//Constants
import { H1, H3 } from '../../../../constants/headers';
import { FADE_DOWN } from '../../../../constants/animations';


const SpaceType = () => (
    <QuestionnaireSection
        id = 'section_1'
        animation = { FADE_DOWN }
    >
        <QuestionHeader
            type = { H1 }
            className = 'text--over-the-rainbow'
        >
            Ayudanos con los datos del espacio
        </QuestionHeader>
        <QuestionHeader
            type = { H3 }
            className = 'text--bold'
        >
            ¿QUÉ TIPO DE ESPACIO QUIERES RENOVAR?
        </QuestionHeader>
        <QuestionBody>
            <SpaceTypeList />
        </QuestionBody>
    </QuestionnaireSection>
);

export default SpaceType;