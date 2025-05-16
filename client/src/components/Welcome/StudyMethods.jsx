import React from 'react';
import { BookOpen, Bookmark, FileText, Film } from 'lucide-react';

const StudyMethods = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Study Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded shadow text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Flashcards</h3>
            <p>Use flashcards to memorize vocabulary and phrases effectively.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <Bookmark className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Dictionary</h3>
            <p>Access a comprehensive dictionary to look up words and phrases.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <FileText className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Texts</h3>
            <p>Read and analyze texts to improve your comprehension and language skills.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <Film className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Media</h3>
            <p>Watch and listen to media content to enhance your listening skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMethods;
