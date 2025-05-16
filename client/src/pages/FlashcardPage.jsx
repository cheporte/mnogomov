import React from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/ui/Navbar';
import FlashcardReview from '../components/Flashcards/FlashcardReview';
import FlashcardList from '../components/Flashcards/FlashcardList';

const FlashcardPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/add-flashcard');
    } 

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <FlashcardList />
                <FlashcardReview />
                <button
                    onClick={handleClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add New Flashcard
                </button>
            </div>
        </>
    );
}

export default FlashcardPage;