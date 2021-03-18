import React from 'react';
import Covid from './Covid';

class Home extends React.Component {
    render() {
        return (
            <div className="page-container" id="home-container">
                <section className="home-weekly-ad">
                    <a href="/weekly-ad" className="home-weekly-ad-inner"><p><span>Check out our awesome savings!</span></p></a>
                </section>
                < Covid />
            </div>
        )
    }
}

export default Home;
