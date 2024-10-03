import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import ServiceTime from './ServiceTime';
import OurProducts from './OurProducts';
import TeamSection from './TeamSection';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ServiceTime></ServiceTime>
            <OurProducts></OurProducts>
            <TeamSection></TeamSection>
        </div>
    );
};

export default Home;