import React, { useState } from "react";
import "./TextFormatter.css";

function TextFormatter() {
  const [inputText, setInputText] = useState("");
  const [formattedText, setFormattedText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    const upperCaseText = inputText.toUpperCase();
    setFormattedText(upperCaseText);
  };

  return (
    <div className="text-formatter-container">
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        className="text-formatter-input"
      />
      <button onClick={handleClick} className="text-formatter-button">
        Format Text
      </button>
      <div className="text-formatter-output">{formattedText}</div>
    </div>
  );
}

export default TextFormatter;
