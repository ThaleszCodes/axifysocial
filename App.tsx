import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Trust from './components/Trust';
import AboutAxium from './components/AboutAxium';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const SectionSeparator: React.FC = () => (
  <div className="py-16 sm:py-20">
    <div className="w-24 h-px bg-purple-700/50 mx-auto"></div>
  </div>
);

const App: React.FC = () => {
  const sections = [
    <WhatWeDo key="whatwedo" />,
    <WhyChooseUs key="whychooseus" />,
    <Services key="services" />,
    <Trust key="trust" />,
    <AboutAxium key="aboutaxium" />,
    <SocialProof key="socialproof" />,
    <FAQ key="faq" />,
    <CallToAction key="cta" />,
  ];

  return (
    <div className="bg-transparent text-gray-200 min-h-screen antialiased selection:bg-purple-500 selection:text-white">
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 my-16 sm:my-20">
          <Hero />
          {sections.map((SectionComponent, index) => (
            <React.Fragment key={index}>
              <SectionSeparator />
              {SectionComponent}
            </React.Fragment>
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;