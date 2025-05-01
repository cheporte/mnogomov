import React from 'react';
import './Navbar.sass';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/courses">
                    <Button variant="primary" size="md">Courses</Button>
                </Link>
                <Link to="/flashcards">
                    <Button variant="primary" size="md">Flashcards</Button>
                </Link>
                <Link to="/dictionary">
                    <Button variant="primary" size="md">Dictionary</Button>
                </Link>
                <Link to="/texts">
                    <Button variant="primary" size="md">Texts</Button>
                </Link>
                <Link to="/media">
                    <Button variant="primary" size="md">Media</Button>
                </Link>
                <Link to="/about">
                    <Button variant="primary" size="md">About</Button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
