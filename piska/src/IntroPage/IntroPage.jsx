import React, { useState, useEffect } from "react";
import "./IntroPage.css"; // Import CSS file
import Homepage from "../HomePage/HomePage"; // Import the Homepage component

function IntroPage() {
  const [clicked, setClicked] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);
  const text = "Click me.";

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (displayIndex < text.length) {
        setDisplayIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 250);

    return () => clearInterval(intervalId);
  }, [text, displayIndex]); // Include text and displayIndex in useEffect

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className={`container ${clicked ? "slide-up" : ""}`}>
      <div className="background"></div>
      {/* Always render the "Click me." text */}
      <div className="text" onClick={handleClick}>
        {text.substring(0, displayIndex)}
      </div>
      {/* Conditionally render the Homepage component when clicked */}
      {clicked && <Homepage />}
    </div>
  );
}

export default IntroPage;
