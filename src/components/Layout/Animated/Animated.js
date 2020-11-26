import React, { useEffect, useRef } from 'react';
//Styles
import './Animated.css';

const Animated = ({ children }) => {
    const container = useRef();

    useEffect(() => {
        container.current.classList.remove('animated-element');
        container.current.classList.add('animated-element--active');
    }, []);

    return (
        <div
            ref = { container }
            className = 'animated-element'
        >
            { children }
        </div>
    );
}

export default Animated;