import React, { useEffect, useState } from 'react';
//Components
import QuestionBody from '../../../Questions/QuestionBody/QuestionBody';
import QuestionHeader from '../../../Questions/QuestionHeader/QuestionHeader';
import ProjectQuestions from './ProjectQuestions/ProjectQuestions';
import QuestionnaireSection from '../../../QuestionnaireSection/QuestionnaireSection';
import ProjectTypeSelector from './ProjectTypeSelector/ProjectTypeSelector';
//Constants
import { H3 } from '../../../../constants/headers';
import { FADE_LEFT } from '../../../../constants/animations';




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