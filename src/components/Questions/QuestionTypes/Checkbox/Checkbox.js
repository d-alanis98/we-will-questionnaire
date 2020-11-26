import React from 'react';
//Icons
import { ReactComponent as CheckMark } from 'assets/img/check-mark.svg';
//Styles
import './Checkbox.css';

const Checkbox = () => (
    <label class='checkbox'>
        <span class='checkbox__input'>
            <input type='checkbox' name='checkbox' />
            <span class='checkbox__control'>
                <CheckMark />
            </span>
        </span>
        <span>Checkbox</span>
    </label>
);

export default Checkbox;