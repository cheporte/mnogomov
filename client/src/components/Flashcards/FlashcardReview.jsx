import React, { useState, useEffect } from "react";
import axios from "axios";
import Flashcard from "./Flashcard";

const FlashcardReview = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token
        const response = await axios.get("http://localhost:5000/api/flashcards", {
          headers: {
            'x-auth-token': token // Include the token in the headers
          }
        });
        setFlashcards(response.data);
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };

    fetchFlashcards();
  }, []);

  const handleReview = async (userPerformance) => {
    try {
      const flashcard = flashcards[currentIndex];
      const token = localStorage.getItem('token');
      await axios.post(`http://localhost:5000/api/flashcards/${flashcard._id}/review`, {
        userPerformance,
      }, {
        headers: {
          'x-auth-token': token // Include the token in the headers
        }
      });

      // Move to the next flashcard
      setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    } catch (error) {
      console.error("Error reviewing flashcard:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-200 rounded shadow m-8">
      <h2 className="text-2xl font-bold mb-4">Review Flashcards</h2>
      {flashcards.length > 0 ? (
        <div>
          <Flashcard
            frontText={flashcards[currentIndex].frontText}
            backText={flashcards[currentIndex].backText}
          />
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={() => handleReview("easy")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Easy
            </button>
            <button
              onClick={() => handleReview("medium")}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            >
              Medium
            </button>
            <button
              onClick={() => handleReview("hard")}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Hard
            </button>
          </div>
        </div>
      ) : (
        <p>No flashcards available. Add some flashcards to start reviewing!</p>
      )}
    </div>
  );
};

export default FlashcardReview;
