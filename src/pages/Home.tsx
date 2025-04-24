import React, { useState } from "react";

import '../styles/pages/home.sass';

import Hero from "../components/Home/Hero";
import Navcard from "../components/ui/Navcard/Navcard";
import HighlightCard from "../components/ui/HighlightCard";

const Home: React.FC = () => {
    const [selectedLang, setSelectedLang] = useState('')
    
    return (
        <div id='home-page'>
            <Hero />
            <section className='lang-highlight'>
                <h2 className="section-title">Discover New Horizons</h2>
                <div className="lang-highlight__options">
                    <div onClick={() => {setSelectedLang('fr')}}>
                        <HighlightCard title="French" description="When you feel romantic" />
                    </div>
                    <div onClick={() => {setSelectedLang('jp')}}>
                        <HighlightCard title="Japanese" description="Something cute? UwU" />
                    </div>
                    <div onClick={() => {setSelectedLang('ua')}}>
                        <HighlightCard title="Ukrainian" description="Get what nightingales sing about" />
                    </div>
                </div>
            </section>
            
            <section className='home-page__navigation'>
                <h2 className="section-title">Choose Your Way Of Studying</h2>
                <div className='home-page__navigation-options'>
                    <Navcard title="Extend Dictionary" redirectTo={`/dict/${selectedLang}`}/>
                    <Navcard title="Master Flashcards" redirectTo={`/flashcards/${selectedLang}`}/>
                    <Navcard title="Read Texts" redirectTo={`/reading/${selectedLang}`}/>
                    <Navcard title="Watch & Listen" redirectTo={`/media/${selectedLang}`}/>
                </div>
            </section>
        </div>
    );
}

export default Home;