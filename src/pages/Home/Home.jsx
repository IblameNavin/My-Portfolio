import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';

function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default Home;
