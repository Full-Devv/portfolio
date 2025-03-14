import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portofolio';
import Contact from './components/Contact';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </ErrorBoundary>
  );
};

export default App;