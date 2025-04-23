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
            <div className="navcard__element">
                <Link to={redirectTo}>{title}</Link>
            </div>
        </div>
    );
}

export default Navcard;