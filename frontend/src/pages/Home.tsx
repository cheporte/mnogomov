import React from "react";

import '../styles/pages/home.sass';

import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";

const Home: React.FC = () => {    
    return (
        <div id='home-page'>
            <Hero />
            <Features/>
        </div>
    );
}

export default Home;