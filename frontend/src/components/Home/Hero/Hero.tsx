import React from "react";

import './Hero.sass';

const Hero: React.FC = () => {
    return (
        <div id='hero'>
            <img src="/mnogomov-night.svg" alt="Site Logo" />
            <h1>Welcome to Mnogomov!</h1>
            <p>We're glad to see you surfing the world of languages. Let us help you on this fantastic journey!</p>
        </div>
    );
}

export default Hero;