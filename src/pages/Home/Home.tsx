import styles from './Home.module.scss';

import Navbar from '../../components/Navbar/Navbar.tsx';
import Toolbar from '../../components/Toolbar/Toolbar.tsx';
import LessonModule from '../../components/LessonModule/LessonModule.tsx';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.navbar}>
                <Navbar></Navbar>
            </div>

            <div className={styles.content}>
                <LessonModule />
                <LessonModule />
                <LessonModule />
            </div>

            <div className={styles.toolbar}>
                <Toolbar />
            </div>
        </div>
    );
}

export default Home;