import React from "react";

import './Features.sass';
import HighlightCard from "../../ui/HighlightCard";

import { NotebookPenIcon, Book, PlayCircleIcon, File } from 'lucide-react';

const featuresData = [
    {
        icon: Book,
        title: "Interactive Lessons",
        desc: "Engage with interactive lessons to learn effectively."
    },
    {
        icon: File,
        title: "Flashcards",
        desc: "Practice vocabulary with customizable flashcards."
    },
    {
        icon: NotebookPenIcon,
        title: "Dictionary",
        desc: "Engage with interactive lessons to learn effectively."
    },
    {
        icon: PlayCircleIcon,
        title: "Media Playground",
        desc: "Engage with interactive lessons to learn effectively."
    }
]

const Features: React.FC = () => {
    return (
        <section className="features">
            <h2 className="features__title">Choose Your Way of Learning</h2>
            <div className="features__content">
                {featuresData.map((item) => (
                    <HighlightCard
                        Icon={item.icon}
                        title={item.title}
                        description={item.desc}
                    />
                ))}
            </div>
        </section>
    );
}

export default Features;