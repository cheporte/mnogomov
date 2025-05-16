import React from 'react';
import { Lightbulb, BarChart2, Users, Globe } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded shadow text-center">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
            <p>Engage with interactive flashcards and quizzes to enhance your learning experience.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <BarChart2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
            <p>Track your learning progress and see your improvement over time.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Community Support</h3>
            <p>Join a community of learners and share your progress and tips.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Multi-Language Support</h3>
            <p>Learn multiple languages with our extensive resource library.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
