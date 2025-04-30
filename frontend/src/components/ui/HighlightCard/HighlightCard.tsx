import React from 'react';
import { LucideProps } from 'lucide-react';
import './HighlightCard.sass';

type CardProps = {
    title: string;
    Icon: React.ComponentType<LucideProps>;
    description?: string;
};

const HighlightCard: React.FC<CardProps> = ({
    title,
    Icon,
    description,
}) => {
    return (
        <div className="card-container">
            <div className="card-container__icon">
                <Icon size={48} />
            </div>
            <h2 className="card-container__title">{title}</h2>
            {description && <p className="card-container__description">{description}</p>}
        </div>
    );
};

export default HighlightCard;
