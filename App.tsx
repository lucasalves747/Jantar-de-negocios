import React from 'react';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Features from './components/Features';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-gold selection:text-black">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Features />
        <EventDetails />
      </main>
      <Footer />
    </div>
  );
};

export default App;