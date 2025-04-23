import React from "react";

// import '../styles/pages/home.sass';

import Navcard from "../components/ui/Navcard/Navcard";

const Home: React.FC = () => {
    return (
        <div id='home-page'>
            <Navcard title="Dictionary" redirectTo="/dict"/>
            <Navcard title="Fleshcards" redirectTo="/fleshcards"/>
        </div>
    );
}

export default Home;