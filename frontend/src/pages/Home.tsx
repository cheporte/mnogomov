import React from "react";

import '../styles/pages/home.sass';

import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import HowItWorks from "../components/Home/HowItWorks";
import Testimonials from "../components/Home/Testimonials";
import LanguageOptions from "../components/Home/LanguageOptions/LanguageOptions";

const Home: React.FC = () => {    
    return (
        <div id='home-page'>
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <LanguageOptions />
        </div>
    );
}

export default Home;