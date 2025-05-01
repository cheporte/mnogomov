import React from "react";

import '../styles/pages/home.sass';

import Navbar from "../components/ui/Navbar";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import HowItWorks from "../components/Home/HowItWorks";
import Testimonials from "../components/Home/Testimonials";
import LanguageOptions from "../components/Home/LanguageOptions/LanguageOptions";
import CallToActions from "../components/Home/CallToActions";
import Footer from "../components/ui/Footer";

const Home: React.FC = () => {    
    return (
        <div id='home-page'>
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <LanguageOptions />
            <CallToActions />
            <Footer />
        </div>
    );
}

export default Home;