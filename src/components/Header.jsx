import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Digi Solutions Slns</div>
      <nav>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#about" style={styles.navLink}>About</a>
        <a href="#services" style={styles.navLink}>Services</a>
        <a href="#portfolio" style={styles.navLink}>Portfolio</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#1E90FF',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    zIndex: 1000,
  },
  logo: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLink: {
    color: 'white',
    margin: '0 1rem',
    textDecoration: 'none',
  },
};

export default Header;