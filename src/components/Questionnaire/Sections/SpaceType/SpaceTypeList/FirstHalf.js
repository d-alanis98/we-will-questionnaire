import React, { useState } from 'react';
//Components
import GridArea from '../../../../Layout/Grid/GridArea';
import Checkbox from '../../../../Questions/QuestionTypes/Checkbox/Checkbox';
import ConditionalRendering from '../../../../ConditionalRendering/ConditionalRendering';

const FirstHalf = ({ selectedOption, handleOptionChange }) => (
    <GridArea
        gridArea = 'left'
    >
        <Checkbox 
            name = 'option'
            value = 'room'
            unique
            onChange = { handleOptionChange }
            labelText = 'Recámara'
            className = 'mb-2'
        />
        <ConditionalRendering
            condition = { selectedOption === 'room' }
        >
            <Checkbox 
                name = 'option__submenu'
                unique
                labelText = 'Principal'
                className = 'ml-2 mb-2 text--small'
            />
            <Checkbox 
                name = 'option__submenu'
                unique
                labelText = 'Adolescentes'
                className = 'ml-2 mb-2 text--small'
            />
            <Checkbox 
                name = 'option__submenu'
                unique
                labelText = 'Niños'
                className = 'ml-2 mb-2 text--small'
            />
            <Checkbox 
                name = 'option__submenu'
                unique
                labelText = 'Bebés'
                className = 'ml-2 mb-2 text--small'
            />
        </ConditionalRendering>
        <Checkbox 
            name = 'option'
            value = 'bathroom'
            unique
            onChange = { handleOptionChange }
            labelText = 'Baño'
            className = 'mb-2'
        />
        <ConditionalRendering
            condition = { selectedOption === 'bathroom' }
        >
            <Checkbox 
                name = 'option__submenu'
                unique
                labelText = 'Principal'
                className = 'ml-2 mb-2 text--small'
            />
            <Checkbox 
                name = 'option__submenu'
                unique
                labelText = 'Secundario'
                className = 'ml-2 mb-2 text--small'
            />
            <Checkbox 
                name = 'option__submenu'
                unique
                labelText = 'Visitas'
                className = 'ml-2 mb-2 text--small'
            />
        </ConditionalRendering>
        <Checkbox 
            name = 'option'
            value = 'dressing_room'
            unique
            onChange = { handleOptionChange }
            labelText = 'Vestidor/Closet'
            className = 'mb-2'
        />
        <ConditionalRendering
            condition = { selectedOption === 'dressing_room' }
        >
            <Checkbox 
                name = 'option__submenu'
                unique
                labelText = 'Walk In'
                className = 'ml-2 mb-2 text--small'
            />
            <Checkbox 
                name = 'option__submenu'
                unique
                labelText = 'De Muro'
                className = 'ml-2 mb-2 text--small'
            />
        </ConditionalRendering>
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Sala'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Comedor'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Estancia (Sala/Comedor)'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Antecomedor'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Cocina'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Family/Cuarto de TV'
            className = 'mb-2'
        />
    </GridArea>
);

export default FirstHalf;