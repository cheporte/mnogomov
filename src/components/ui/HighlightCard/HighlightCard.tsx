import React from 'react';

import './HighlightCard.sass';

type CardProps = {
    title: string;
    image?: string;
    description?: string
}

const HighlightCard: React.FC<CardProps> = ({
    title,
    image,
    description
}) => {
    return (
        <div className='card-container'>
            {image && <img src={image} alt={title} />}
            <h2 className='card-container__title'>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
};

export default HighlightCard;