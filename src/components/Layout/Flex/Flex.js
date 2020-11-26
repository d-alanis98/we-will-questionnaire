import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    ${ props => props.alignItems ? `align-items: ${props.alignItems};` : ''}
    ${ props => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
    ${ props => props.flexWrap ? `flex-wrap: ${props.flexWrap};` : ''}
`;

const Flex = ({ 
    children,
    flexWrap,
    direction,
    alignItems,
    justifyContent,

}) => (
    <FlexContainer
        flexWrap = { flexWrap }
        direction = { direction }
        alignItems = { alignItems }
        justifyContent = { justifyContent }
    >
        { children }
    </FlexContainer>
);

export default Flex;

