import React from 'react';
//Components
import Input from '../../../../../Questions/QuestionTypes/Input/Input';
import Button from '../../../../../Layout/Button/Button';
import Animated from '../../../../../Layout/Animated/Animated';
import QuestionBody from '../../../../../Questions/QuestionBody/QuestionBody';
import QuestionHeader from '../../../../../Questions/QuestionHeader/QuestionHeader';
//Constants
import { H4 } from '../../../../../../constants/headers';


const We = () => (
    <Animated>
        <QuestionHeader
            type = { H4 }
        >
            ¿Cuántos metros cuadrados tiene tu espacio aprox.?
        </QuestionHeader>
        <QuestionBody
            className = 'project-questions'
        >
            <Input 
                type = 'number'
                unit = 'm^2'
                small
                className = 'text--over-the-rainbow text--bold mb-2'
            />
            <Button className='mt-3 mx-auto'>COTIZAR</Button>
        </QuestionBody>
    </Animated>
);

export default We;