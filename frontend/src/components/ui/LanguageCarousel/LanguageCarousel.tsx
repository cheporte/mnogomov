// LanguageCarousel.tsx
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HighlightCard from "../../ui/HighlightCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LanguageCarousel.sass";

export type Language = {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
};

type Props = {
  title: string;
  subtitle: string;
  languages: Language[];
  selected: number;
  setSelected: (index: number) => void;
};

const LanguageCarousel: React.FC<Props> = ({ title, subtitle, languages, selected, setSelected }) => {
  return (
    <div className="language-carousel">
      <h3 className="subtitle">{subtitle}</h3>

      <div className="carousel-wrapper">
        <div className="carousel-controls">
          <button className="carousel-button" onClick={() => setSelected(selected > 0 ? selected - 1 : languages.length - 1)}>
            <ChevronLeft size={48} />
          </button>

          <button className="carousel-button" onClick={() => setSelected(selected < languages.length - 1 ? selected + 1 : 0)}>
            <ChevronRight size={48} />
          </button>
        </div>

        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          selectedItem={selected}
          onChange={setSelected}
        >
          {languages.map((lang) => (
            <div key={lang.id} className="carousel-item">
              <HighlightCard Icon={lang.icon} title={lang.title} description={lang.desc} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LanguageCarousel;
