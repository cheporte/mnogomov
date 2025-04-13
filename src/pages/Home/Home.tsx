import './Home.sass';

import Navbar from '@components/Navbar';
import Toolbar from '@components/Toolbar';

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar/>
            <Toolbar/>
            <main className='main-content'>
                <div className='home'>
                    <section className='hero'>
                        <h1>Welcome to Mnogomov</h1>
                        <p>Learn languages by heart, not memory.</p>
                        <button className='cta'>Start Learning</button>
                    </section>

                    <section className='features'>
                        <div className='feature'>
                            <h2>Words Book</h2>
                            <p>Track, revise, and explore your vocabulary in one place.</p>
                        </div>
                        <div className='feature'>
                            <h2>Progress</h2>
                            <p>See how far you’ve come and where you’re heading.</p>
                        </div>
                        <div className='feature'>
                            <h2>Guides</h2>
                            <p>Read grammar tips, pronunciation help, and more.</p>
                        </div>
                    </section>
                    <img className='dancing-logo' src="/mnogomov-gif.gif" alt="Dancing Mnogomov" />
                </div>
            </main>
        </div>
    );
}

export default Home;