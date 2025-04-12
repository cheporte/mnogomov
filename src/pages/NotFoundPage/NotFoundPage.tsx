import './NotFoundPage.sass';

import { Link } from 'react-router-dom';
import CustomButton from '@components/CustomButton';

const NotFoundPage = () => {
    return (
        <div className='notFoundPage'>
            <img className='logo' src="/mnogomov-logo.png" alt="Mnogomov Logo" />
            <h1>Oh...</h1>
            <p>It seems this page hasn't been made yet. Don't worry, we'll make it soon!</p>
            <Link to="/">
                <CustomButton variant="primary" size="lg">Go Back</CustomButton>
            </Link>
            <img className='mascot' src="/mnogomov-gif.gif" alt="Dancing Mnogomov" />
        </div>
    );
}

export default NotFoundPage;