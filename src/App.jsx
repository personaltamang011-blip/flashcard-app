import React, { useState } from "react";
import "./App.css";

const flashcardsData = [
  { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
  { question: "What is JSX?", answer: "A syntax extension for JavaScript to write HTML in React." },
  { question: "What is a component?", answer: "Reusable building blocks in React." },
  { question: "State vs Props?", answer: "State is internal and mutable, Props are external and immutable." },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcardsData.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcardsData.length) % flashcardsData.length);
  };

  const handleFlip = () => setFlipped(!flipped);

  const { question, answer } = flashcardsData[currentIndex];

  return (
    <div className="app">
      <h1>Flashcards Demo</h1>

      <div className="flashcard-wrapper">
        <div className="flashcard-container" onClick={handleFlip}>
          <div className={`flashcard ${flipped ? "flipped" : ""}`}>
            <div className="front">{question}</div>
            <div className="back">{answer}</div>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button onClick={handlePrev}>&lt; Previous</button>
        <button onClick={handleNext}>Next &gt;</button>
      </div>

      <p className="hint">Click the card to flip</p>
    </div>
  );
}
