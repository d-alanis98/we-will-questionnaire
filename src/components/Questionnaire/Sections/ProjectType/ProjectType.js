import React, { useEffect, useState } from 'react';
//Components
import QuestionBody from '../../../Questions/QuestionBody/QuestionBody';
import QuestionHeader from '../../../Questions/QuestionHeader/QuestionHeader';
import QuestionnaireSection from '../../../QuestionnaireSection/QuestionnaireSection';
//Constants
import { H3 } from '../../../../constants/headers';
import { FADE_DOWN, FADE_LEFT } from '../../../../constants/animations';
import ProjectTypeSelector from './ProjectTypeSelector/ProjectTypeSelector';
import ProjectQuestions from './ProjectQuestions/ProjectQuestions';



const ProjectType = () => {
    const [projectType, setProjectType] = useState(null);

    useEffect(() => {
        console.log({ projectType })
    }, [projectType])

    return (
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
                <ProjectTypeSelector 
                    projectType = { projectType }
                    handleProjectTypeSelection = { setProjectType }
                />
            </QuestionBody>
            <ProjectQuestions 
                projectType = { projectType }
            />
        </QuestionnaireSection>
    );
}

export default ProjectType;