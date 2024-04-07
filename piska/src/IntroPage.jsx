import React, { useEffect, useRef } from 'react';
import './IntroPage.css'; // Import CSS file

function TypedBackground() {
    const word = "Click me."; // Change this to the desired word
    const textRef = useRef(null);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (textRef.current) {
                const newText = word.substring(0, index + 1);
                textRef.current.textContent = newText;
                index++;
                if (index === word.length) clearInterval(intervalId);
            }
        }, 200); // Adjust the interval time (milliseconds) as needed

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [word]);

    return (
        <div className="container">
            <div className="background"></div>
            <a href="/HomePage" ref={textRef} className="text">Click me.</a>
        </div>
    );
}

export default TypedBackground;