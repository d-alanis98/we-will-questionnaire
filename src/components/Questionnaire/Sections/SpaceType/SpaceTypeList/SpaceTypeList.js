import React from 'react';
//Components
import FirstHalf from './FirstHalf';
import SecondHalf from './SecondHalf';
import GridLayout from '../../../../Layout/Grid/GridLayout';
//Constants
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
    return (
        <GridLayout
            templateRows = '1fr 1fr'
            templateColumns = '1fr 1fr'
            templateAreas = { templateAreas }
            responsive
            breakPoints = { device.mobileLg }
            responsiveRules = { responsiveRules } 
        >
            <FirstHalf />
            <SecondHalf />
        </GridLayout>
    );
}

export default SpaceTypeList;