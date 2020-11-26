import React from 'react';
//Components
import GridArea from '../../../../Layout/Grid/GridArea';
import Checkbox from '../../../../Questions/QuestionTypes/Checkbox/Checkbox';

const SecondHalf = ({ handleOptionChange }) => (
    <GridArea
        gridArea = 'right'
    >
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Home Office'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Vestíbulo'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Terraza'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Exterior'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Cuarto de juegos'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Ludoteca'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Adultos'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Cuarto de lavado'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            unique
            onChange = { handleOptionChange }
            labelText = 'Oficina'
            className = 'mb-2'
        />
        <Checkbox 
            name = 'option'
            value = 'other'
            unique
            onChange = { handleOptionChange }
            labelText = 'Otro tipo de espacio'
            className = 'mb-2'
        />
    </GridArea>
);

export default SecondHalf;