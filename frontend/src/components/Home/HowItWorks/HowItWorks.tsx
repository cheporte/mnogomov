import React from "react";
import { Link } from "react-router-dom";

import './HowItWorks.sass';

import Button from "../../ui/Button";

const HowItWorks: React.FC = () => {
    return (
        <section className="how-it-works">
            <h2 className="how-it-works__title">How It Works</h2>
            <p className="how-it-works__subtitle">
                We try to make the learning process as easy as possible, so you can just limit yourself to 4 simple steps.
            </p>
            <ul className="how-it-works__steps">
                <li>Step 1: Pick a Language</li>
                <li>Step 2: Start Lessons</li>
                <li>Step 3: Practice With Flashcards, Texts and Media</li>
                <li>Step 4: Track Your Progress</li>
            </ul>
            <Link to="/mnogomov/about">
                <Button className="how-it-works__cta-btn" variant="primary" size="lg">Read More</Button>
            </Link>
        </section>
    );
}

export default HowItWorks;