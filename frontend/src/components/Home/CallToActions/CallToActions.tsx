import React from "react";

import './CallToActions.sass';

import Button from "../../ui/Button";

const CallToActions: React.FC = () => {
    return (
        <section className="cta">
            <h2 className="cta__title">Got Your Interest?</h2>
            <div className="cta__btns">
                <Button variant='primary' size='lg'>Start Exploring</Button>
                <Button variant='primary' size='lg'>Explore Courses</Button>
            </div>
        </section>
    );
}

export default CallToActions;