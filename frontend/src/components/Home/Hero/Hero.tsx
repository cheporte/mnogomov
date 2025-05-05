import React from "react";
import { Link } from "react-router-dom";

import './Hero.sass';
import Button from "../../ui/Button";

const Hero: React.FC = () => {
    return (
        <div className='hero'>
            <img className="hero__logo" src="/mnogomov/mnogomov-night.svg" alt="Site Logo" />
            <div className="hero__content">
                <h1 className="hero__content__title">Unlock the World with Mnogomov!</h1>
                <p className="hero__content__subtitle">Dive into a new language and explore endless possibilities. Your journey to fluency starts here!</p>
                <Link to="/mnogomov/register">
                    <Button variant="primary" size="lg" aria-label="Start Your Journey!">Start Your Journey!</Button>            
                </Link>
            </div>
        </div>
    );
}

export default Hero;