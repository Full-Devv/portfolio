import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={styles.hero}>
      <h1 style={styles.headline}>Digi Solutions Slns: Full-Stack Web Development</h1>
      <p style={styles.subheadline}>I build fast, scalable, and user-friendly web apps with React & Flask.</p>
      <a href="#contact" style={styles.cta}>Get a Free Quote</a>
    </section>
  );
};

const styles = {
  hero: {
    height: '80vh',
    background: 'linear-gradient(to bottom, #1E90FF, #0047AB)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 2rem',
  },
  headline: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subheadline: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  cta: {
    backgroundColor: '#FF6347',
    color: 'white',
    padding: '1rem 2rem',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};

export default Hero;