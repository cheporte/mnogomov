import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { frenchCards, japaneseCards, ukrainianCards } from '../data/mockFlashcardsData';

import Button from '../components/ui/Button';
import Flashcard from '../components/ui/Flashcard';
import { FlashcardType } from '../data/types/FlashcardTypes';

import '../styles/pages/flashcards.sass';

const cardDecks: Record<string, FlashcardType[]> = {
    fr: frenchCards,
    jp: japaneseCards,
    ua: ukrainianCards
}
  
const FlashcardsPage: React.FC = () => {
    const chosenLang = useLocation().pathname.split('/').pop() || 'all';
    const cardsData = cardDecks[chosenLang] || [];
    
    return (
        <div id='flashcards-page'>
            <Link to='/'>
                <Button variant='ghost' size='lg'>Go Back</Button>
            </Link>
            <div className='flashcards-page__list'>
                {cardsData.map((card, index) => (
                    <Flashcard key={index} {...card}/>
                ))}
            </div>
        </div>
    );
}

export default FlashcardsPage;