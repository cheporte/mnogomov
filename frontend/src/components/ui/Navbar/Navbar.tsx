import React, { useState } from 'react';
import './Navbar.sass';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__menu-icon" onClick={toggleMenu}>
                    <Menu size={24} color="#fff" />
                </div>
                <div className={`navbar__links ${isOpen ? 'open' : ''}`}>
                    <Link to="/mnogomov/courses" onClick={() => setIsOpen(false)}>
                        <Button className="nav-btn" variant="primary" size="md">Courses</Button>
                    </Link>
                    <Link to="/mnogomov/flashcards" onClick={() => setIsOpen(false)}>
                        <Button className="nav-btn" variant="primary" size="md">Flashcards</Button>
                    </Link>
                    <Link to="/mnogomov/dictionary" onClick={() => setIsOpen(false)}>
                        <Button className="nav-btn" variant="primary" size="md">Dictionary</Button>
                    </Link>
                    <Link to="/mnogomov/texts" onClick={() => setIsOpen(false)}>
                        <Button className="nav-btn" variant="primary" size="md">Texts</Button>
                    </Link>
                    <Link to="/mnogomov/media" onClick={() => setIsOpen(false)}>
                        <Button className="nav-btn" variant="primary" size="md">Media</Button>
                    </Link>
                    <Link to="/mnogomov/about" onClick={() => setIsOpen(false)}>
                        <Button className="nav-btn" variant="primary" size="md">About</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
