import React from 'react';
//Constants
import { H1 } from '../../../constants/headers';


const QuestionHeader = ({ type = H1, children, ...extraProps }) => (
React.createElement(
    type,
    extraProps,
    children
));

export default QuestionHeader;