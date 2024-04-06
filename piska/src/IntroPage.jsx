import React, { useEffect } from 'react';
import './IntroPage.css'; // Import CSS file

function TypedBackground() {
    const word = "Click me."; // Change this to the desired word

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            const newText = word.substring(0, index + 1);
            document.getElementById('background-text').textContent = newText;
            index++;
            if (index === word.length) clearInterval(intervalId);
        }, 200); // Adjust the interval time (milliseconds) as needed

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return <div id="background-text" className="background-text"></div>;
}

export default TypedBackground;