import React, { useState } from 'react';

import './HighlightCard.sass';

type CardProps = {
    title: string;
    image?: string;
    description?: string;
    onclick?: () => void;
}

const HighlightCard: React.FC<CardProps> = ({
    title,
    image,
    description,
    onclick
}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 150)
        onclick?.();
    }

    return (
        <div 
            className={`card-container ${isClicked ? 'card-container__clicked' : ''}`}
            onClick={handleClick}
        >
            {image && <img src={image} alt={title} />}
            <h2 className='card-container__title'>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
};

export default HighlightCard;