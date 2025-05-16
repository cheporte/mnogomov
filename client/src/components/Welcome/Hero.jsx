import React from 'react';
import { BookOpen, Bookmark, FileText, Film } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Mnogomov</h1>
        <p className="text-xl mb-8">Master new languages with our comprehensive tools and resources.</p>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <BookOpen className="w-12 h-12 mb-2" />
            <span>Flashcards</span>
          </div>
          <div className="flex flex-col items-center">
            <Bookmark className="w-12 h-12 mb-2" />
            <span>Dictionary</span>
          </div>
          <div className="flex flex-col items-center">
            <FileText className="w-12 h-12 mb-2" />
            <span>Texts</span>
          </div>
          <div className="flex flex-col items-center">
            <Film className="w-12 h-12 mb-2" />
            <span>Media</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
