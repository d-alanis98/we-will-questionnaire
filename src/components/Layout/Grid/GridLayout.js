import React from 'react';
import styled from 'styled-components';
import MediaQueries from '../../../helpers/MediaQueries';

//Default styles
const defaultTemplateRows = 'auto';
const defaultTemplateColumns = 'auto';
//Styled div container
const GridContainer = styled.div`
    display: grid;
    grid-template-rows: ${ props => props.templateRows || defaultTemplateRows };
    grid-template-columns: ${ props => props.templateColumns || defaultTemplateColumns };
    ${ props => props.templateAreas ? `grid-template-areas: ${ props.templateAreas };`: '' }

    //Media queries
    ${ props => props.responsive && MediaQueries.getMediaQueries(props.breakPoints, props.responsiveRules) }
`

const GridLayout = ({ 
    children,
    responsive,
    breakPoints,
    templateRows,
    templateAreas,
    templateColumns,
    responsiveRules, 
    ...extraProps
}) => {


    return (
        <GridContainer 
            responsive = { responsive }
            breakPoints = { breakPoints }
            templateRows = { templateRows }
            templateAreas = { templateAreas }
            templateColumns = { templateColumns }
            responsiveRules = { responsiveRules }
            { ...extraProps }
        >
            { children }
        </GridContainer>
    )


}

export default GridLayout;