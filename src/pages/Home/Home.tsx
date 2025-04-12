import './Home.sass';

import Navbar from '@components/Navbar';
import Toolbar from '@components/Toolbar';
import LessonModule from '@components/LessonModule';

const Home = () => {
    return (
        <div className='home'>
            <div className='navbar'>
                <Navbar></Navbar>
            </div>

            <div className='content'>
                <LessonModule />
                <LessonModule />
                <LessonModule />
            </div>

            <div className='toolbar'>
                <Toolbar />
            </div>
        </div>
    );
}

export default Home;