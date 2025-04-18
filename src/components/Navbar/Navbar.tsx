import './Navbar.sass';

import { Link } from 'react-router-dom';

import CustomButton from '@components/CustomButton';

const Navbar = () => {
    return (
        <header className='header'>
            <img className='logo' src="/mnogomov-logo.png" alt="Site Logo" />
            <nav>
                <Link to="/learn">
                    <CustomButton variant="primary" size="lg">Learn</CustomButton>
                </Link>
                <Link to="/dictionary">
                    <CustomButton variant="primary" size="lg">Dictionary</CustomButton>
                </Link>
                <Link to="/profile">
                    <CustomButton variant="primary" size="lg">Profile</CustomButton>
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;