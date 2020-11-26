import React from 'react';

const ConditionalRendering = ({ condition, children }) => (
    condition ? children : null
);

export default ConditionalRendering;