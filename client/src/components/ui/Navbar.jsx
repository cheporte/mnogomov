import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">mnogomov</div>
        <div className="space-x-4">
          <a href="/flashcards" className="hover:underline">Flashcards</a>
          <a href="/dictionary" className="hover:underline">Dictionary</a>
          <a href="/dashboard" className="hover:underline">Dashboard</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
