import React from 'react';
import { Link } from 'react-router-dom';

import './Navcard.sass';

type NavcardProprs = {
    title: string;
    redirectTo: string;
}

const Navcard: React.FC<NavcardProprs> = ({
    title, redirectTo
}) => {
    return (
        <div className="navcard">
            <Link to={redirectTo}>
                <div className="navcard__element">{title}</div>
            </Link>
        </div>
    );
}

export default Navcard;