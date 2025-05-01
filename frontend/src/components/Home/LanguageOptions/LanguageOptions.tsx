import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Wine, Bird, Cat, Guitar, Beer } from "lucide-react";
import './LanguageOptions.sass';
import HighlightCard from "../../ui/HighlightCard";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

// Define the type for the language objects
type Language = {
    id: string; // Unique identifier
    icon: React.ComponentType<any>;
    title: string;
    desc: string;
};

// Array of available languages with unique identifiers
const availableLangs: Language[] = [
    {
        id: 'fr',
        icon: Wine,
        title: "French",
        desc: "For romantic vibes"
    },
    {
        id: 'jp',
        icon: Cat,
        title: "Japanese",
        desc: "When feeling UwU"
    },
    {
        id: 'ua',
        icon: Bird,
        title: "Ukrainian",
        desc: "The language of songs"
    },
];

const langsToGo: Language[] = [
    {
        id: 'sp',
        icon: Guitar,
        title: "Spanish",
        desc: "Tell about your siestas"
    },
    {
        id: 'de',
        icon: Beer,
        title: "German",
        desc: "Goethe spoke it"
    },
];

const LanguageOptions: React.FC = () => {
    return (
        <section className="language-options">
            <h2 className="language-options__title">Pick Any Language</h2>
            <div className="language-options__langs-carousel">
                <h3 className="subtitle">Languages We Have</h3>
                <Carousel showArrows={true} showThumbs={false} showStatus={false} showIndicators={false}>
                    {availableLangs.map((lang) => (
                        <div key={lang.id} className="carousel-item">
                            <HighlightCard Icon={lang.icon} title={lang.title} description={lang.desc} />
                        </div>
                    ))}
                </Carousel>
            </div>

            <div className="language-options__langs-to-be">
                <h3 className="subtitle">Languages We'll Add Soon</h3>
                <Carousel showArrows={true} showThumbs={false} showStatus={false} showIndicators={false}>
                    {langsToGo.map((lang) => (
                        <div key={lang.id} className="carousel-item">
                            <HighlightCard Icon={lang.icon} title={lang.title} description={lang.desc} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default LanguageOptions;
