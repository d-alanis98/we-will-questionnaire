import React from 'react';
//Components
import Flex from '../../../../../Layout/Flex/Flex';
import QuestionBody from '../../../../../Questions/QuestionBody/QuestionBody';
import SelectionBox from '../../../../../Questions/QuestionTypes/SelectionBox/SelectionBox';

const YesOrNo = ({ name }) => (
    <QuestionBody>
        <Flex
            direction = 'row'
            alignItems = 'center'
            justifyContent = 'flex-start'
        >
            <SelectionBox 
                name = { name }
                unique
                labelText = 'Si'
                className = 'mb-2 text--bold text--over-the-rainbow mr-2'
            />
            <SelectionBox 
                name = { name }
                unique
                labelText = 'No'
                className = 'mb-2 text--bold text--over-the-rainbow'
            />
        </Flex>
    </QuestionBody>
);

export default YesOrNo;