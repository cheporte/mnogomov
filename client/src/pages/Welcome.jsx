import React from "react";

import Hero from "../components/Welcome/Hero";
import Features from "../components/Welcome/Features";
import StudyMethods from "../components/Welcome/StudyMethods";
import CallToAction from "../components/Welcome/CallToAction";
import Footer from "../components/ui/Footer";

const Welcome = () => {
    return (
        <div>
            <Hero />
            <Features />
            <StudyMethods />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default Welcome;