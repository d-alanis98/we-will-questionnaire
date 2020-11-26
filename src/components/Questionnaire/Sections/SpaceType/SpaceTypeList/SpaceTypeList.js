import React, { Fragment, useState } from 'react';
//Components
import Textarea from '../../../../Questions/QuestionTypes/Textarea/Textarea';
import FirstHalf from './FirstHalf';
import SecondHalf from './SecondHalf';
import GridLayout from '../../../../Layout/Grid/GridLayout';
import QuestionHeader from '../../../../Questions/QuestionHeader/QuestionHeader';
import ConditionalRendering from '../../../../ConditionalRendering/ConditionalRendering';
//Constants
import { H4 } from '../../../../../constants/headers';
import { device } from '../../../../../constants/mediaQueries';

//Grid styles
const templateAreas = `
    "left right"
    "left right"
`;

const responsiveRules = {
    [device.mobileLg]: `
        grid-template-areas: " left left"
                             " right right"
    `
};


const SpaceTypeList = () => {
    //Hooks
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = event => {
        const { target: { checked, value } } = event;
        checked && setSelectedOption(value);
    }
    return (
        <Fragment>
            <GridLayout
                templateRows = '1fr 1fr'
                templateColumns = '1fr 1fr'
                templateAreas = { templateAreas }
                responsive
                breakPoints = { device.mobileLg }
                responsiveRules = { responsiveRules } 
            >
                <FirstHalf 
                    selectedOption = { selectedOption }
                    handleOptionChange = { handleOptionChange }
                />
                <SecondHalf 
                    handleOptionChange = { handleOptionChange }
                />
            </GridLayout>
            <ConditionalRendering
                condition = { selectedOption === 'other' }

            > 
                <QuestionHeader
                    type = { H4 }
                >
                    No es ninguno de estos? Platicanos que tipo de espacio es...
                </QuestionHeader>
                <Textarea 
                    onChange = { handleOptionChange }
                />
            </ConditionalRendering>
        </Fragment>
    );
}

export default SpaceTypeList;