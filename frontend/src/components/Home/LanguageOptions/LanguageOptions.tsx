// LanguageOptions.tsx
import React, { useState } from "react";
import LanguageCarousel, { Language } from "../../ui/LanguageCarousel";
import { Wine, Bird, Cat, Guitar, Beer } from "lucide-react";
import "./LanguageOptions.sass";

const availableLangs: Language[] = [
  { id: "fr", icon: Wine, title: "French", desc: "For romantic vibes" },
  { id: "jp", icon: Cat, title: "Japanese", desc: "When feeling UwU" },
  { id: "ua", icon: Bird, title: "Ukrainian", desc: "The language of songs" },
];

const langsToGo: Language[] = [
  { id: "sp", icon: Guitar, title: "Spanish", desc: "Tell about your siestas" },
  { id: "de", icon: Beer, title: "German", desc: "Goethe spoke it" },
];

const LanguageOptions: React.FC = () => {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  return (
    <section className="language-options">
      <h2 className="language-options__title">Pick Any Language</h2>

      <div className="language-options__carousels">
        <LanguageCarousel
          title="Languages We Have"
          subtitle="Languages We Have"
          languages={availableLangs}
          selected={currentSlide1}
          setSelected={setCurrentSlide1}
        />

        <LanguageCarousel
          title="Languages We'll Add Soon"
          subtitle="Languages We'll Add Soon"
          languages={langsToGo}
          selected={currentSlide2}
          setSelected={setCurrentSlide2}
        />
      </div>
    </section>
  );
};

export default LanguageOptions;
