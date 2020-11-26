import React from 'react';
//Components
import Input from '../../../../../Questions/QuestionTypes/Input/Input';
import Button from '../../../../../Layout/Button/Button';
import YesOrNo from './YesOrNo';
import Animated from '../../../../../Layout/Animated/Animated';
import QuestionBody from '../../../../../Questions/QuestionBody/QuestionBody';
import QuestionHeader from '../../../../../Questions/QuestionHeader/QuestionHeader';
//Constants
import { H4 } from '../../../../../../constants/headers';

const Design = () => (
    <Animated>
        <QuestionHeader
            type = { H4 }
        >
            ¿Te gustaría que te ayudemos a diseñar algún mueble de madera sobre medida como por ejemplo, librero, muebles empotrados, un escritorio fijo o algo por el estilo?
        </QuestionHeader>
        <YesOrNo 
            name = 'furniture'
        />
        <QuestionHeader
            type = { H4 }
        >
            ¿Te gustaría que te ayudemos a diseñar alguna estructura, puerta, mueble, o ventana de metal? 
        </QuestionHeader>
        <YesOrNo 
            name = 'structure'
        />
        <QuestionHeader
            type = { H4 }
        >
            ¿Te gustaría que consideremos en el diseño, cambio de materiales en pisos, muros o techos? 
        </QuestionHeader>
        <YesOrNo 
            name = 'materials'
        />
        <QuestionHeader
            type = { H4 }
        >
            ¿Te gustaría que te ayudemos a diseñar alguna puerta, división, ventana o detalle de cristal? 
        </QuestionHeader>
        <YesOrNo 
            name = 'door'
        />
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
        </QuestionBody>
        <QuestionHeader
            type = { H4 }
        >
            ¿Cuánto es lo que estas pensando gastar?
        </QuestionHeader>
        <QuestionBody
            className = 'project-questions'
        >
            <Input 
                type = 'number'
                unit = 'pesos'
                small
                className = 'text--over-the-rainbow text--bold mb-2'
            />
            <Button className='mt-3 mx-auto'>COTIZAR</Button>
        </QuestionBody>
    </Animated>
);

export default Design;