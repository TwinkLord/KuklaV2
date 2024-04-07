import React, { useState, useEffect } from 'react';
import './IntroPage.css'; // Import CSS file
import { Link } from 'react-router-dom'; // Import Link component from React Router
import Homepage from '../HomePage/HomePage'; // Import the Homepage component

function IntroPage() {
    const [clicked, setClicked] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [textDisplayed, setTextDisplayed] = useState(false);
    const text = "Click me.";

    useEffect(() => {
        if (!textDisplayed) {
            let index = 0;
            const intervalId = setInterval(() => {
                if (index === text.length) {
                    clearInterval(intervalId);
                    setTextDisplayed(true);
                } else {
                    setDisplayText(prevText => prevText + text[index]);
                    index++;
                }
            }, 200);

            return () => clearInterval(intervalId);
        }
    }, [text, textDisplayed]);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <div className={`container ${clicked ? 'slide-up' : ''}`}>
            <div className="background"></div>
            {/* Always render the "Click me." text */}
            <div className="text" onClick={handleClick}>{textDisplayed ? text : displayText}</div>
            {/* Conditionally render the Homepage component when clicked */}
            {clicked && <Homepage />}
        </div>
    );
}

export default IntroPage;
