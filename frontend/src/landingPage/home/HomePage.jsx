import React from 'react';
import Hero from './Hero';
import Awards from './Awards.jsx';
import Stats from './Stats.jsx';
import Pricing from './Pricing.jsx';
import Education from './Education.jsx';
import OpenAccount from '../OpenAccount.jsx';
import Footer from '../Footer.jsx'
import Navbar from '../Navbar.jsx'

function HomePage() {
    return ( 
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
     );
}

export default HomePage;