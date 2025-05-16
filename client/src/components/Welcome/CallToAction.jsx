import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/register');
    };
    return (
    <div className="bg-blue-600 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-xl mb-8">Join now and unlock the full potential of your language learning journey.</p>
        <button onClick={handleClick} className="bg-white text-blue-600 font-bold py-2 px-4 rounded flex items-center mx-auto cursor-pointer">
          Get Started <ArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
