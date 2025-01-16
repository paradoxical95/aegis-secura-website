import React, { useEffect } from 'react';
import { FaLightbulb, FaMoon } from 'react-icons/fa';

const SwitcherHeader = () => {
    // Add the "active-dark-mode" class to body by default
    useEffect(() => {
        document.querySelector('body').classList.add('active-dark-mode');
    }, []);

    //below this is same code as before
    const switchColor = () => {
        document.querySelector('body').classList.toggle("active-dark-mode");
    };

    return (
        <button onClick={switchColor}>
            <span className="setColor dark"><FaLightbulb /></span>
            <span className="setColor light"><FaMoon /></span>
        </button>
    );
};

export default SwitcherHeader;
