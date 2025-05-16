import React, { useState } from "react";

const Flashcard = ({ frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flashcard w-full h-48 perspective-1000 cursor-pointer`}
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden bg-white p-4 rounded shadow flex items-center justify-center">
          {frontText}
        </div>
        <div className="absolute w-full h-full backface-hidden bg-white p-4 rounded shadow flex items-center justify-center rotate-y-180">
          {backText}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
