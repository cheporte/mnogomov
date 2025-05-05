import React from "react";
import { Link } from "react-router-dom";

import './CallToActions.sass';

import Button from "../../ui/Button";

const CallToActions: React.FC = () => {
    return (
        <section className="cta">
            <h2 className="cta__title">Got Your Interest?</h2>
            <div className="cta__btns">
                <Link to="/mnogomov/register">
                    <Button variant='primary' size='lg'>Start Exploring</Button>
                </Link>
                <Link to="about">
                    <Button variant='primary' size='lg'>Explore Courses</Button>
                </Link>
            </div>
        </section>
    );
}

export default CallToActions;