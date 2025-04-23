import React from "react";

import '../styles/pages/home.sass';

import Hero from "../components/Home/Hero";
import Navcard from "../components/ui/Navcard/Navcard";
import HighlightCard from "../components/ui/HighlightCard";

const Home: React.FC = () => {
    return (
        <div id='home-page'>
            <Hero />
            <section className='lang-highlight'>
                <h2 className="section-title">Discover New Horizons</h2>
                <div className="lang-highlight__options">
                    <HighlightCard title="French" description="When you feel romantic" />
                    <HighlightCard title="Japanese" description="Something cute? UwU" />
                    <HighlightCard title="Ukrainian" description="Get what nightingales sing about" />
                </div>
            </section>
            
            <section className='home-page__navigation'>
                <h2 className="section-title">Choose Your Way Of Studying</h2>
                <div className='home-page__navigation-options'>
                    <Navcard title="Extend Dictionary" redirectTo="/dict"/>
                    <Navcard title="Master Flashcards" redirectTo="/flashcards"/>
                    <Navcard title="Read Texts" redirectTo="/reading"/>
                    <Navcard title="Watch & Listen" redirectTo="/media"/>
                </div>
            </section>
        </div>
    );
}

export default Home;