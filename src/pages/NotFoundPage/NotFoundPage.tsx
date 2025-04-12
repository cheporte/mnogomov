import styles from './NotFoundPage.module.scss';

import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';

const NotFoundPage = () => {
    return (
        <div className={styles.notFoundPage}>
            <img className={styles.logo} src="/mnogomov-logo.png" alt="Mnogomov Logo" />
            <h1>Oh...</h1>
            <p>It seems this page hasn't been made yet. Don't worry, we'll make it soon!</p>
            <Link to="/">
                <CustomButton variant="primary" size="lg">Go Back</CustomButton>
            </Link>
            <img className={styles.mascot} src="/mnogomov-gif.gif" alt="Dancing Mnogomov" />
        </div>
    );
}

export default NotFoundPage;