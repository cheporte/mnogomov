import React, { useEffect, useState } from "react";
import axios from "axios";
import Flashcard from "./Flashcard";

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);

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

  return (
    <div className="container mx-auto p-4 bg-gray-200 rounded shadow m-8">
      <h2 className="text-2xl font-bold mb-4">Flashcards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {flashcards.map((flashcard) => (
          <Flashcard
            key={flashcard._id}
            frontText={flashcard.frontText}
            backText={flashcard.backText}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashcardList;
