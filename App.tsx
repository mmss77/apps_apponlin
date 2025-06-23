import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeOffer from './components/WhatWeOffer';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <WhatWeOffer />
          <Features />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;