import React from 'react';
import styled from 'styled-components';

const GridAreaContainer = styled.div`
    grid-area: ${ props => props.gridArea }
`;

const GridArea = ({ children, gridArea, ...extraProps }) => {


    return (
        <GridAreaContainer
            gridArea = { gridArea }
            { ...extraProps }
        >
            { children }
        </GridAreaContainer>
    )
}

export default GridArea;