import React from 'react';

import Intro from '../../Intro/Intro';
import Contract from '../Contract/Contract';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Intro/>
            <Skills/>
            <Projects/>
            <Contract/>
            
        </div>
    );
};

export default Home;