import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" style={styles.portfolio}>
      <h2 style={styles.heading}>Portfolio</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Project 1</h3>
          <p>Built a dashboard with React and Flask for real-time data.</p>
        </div>
        <div style={styles.card}>
          <h3>Project 2</h3>
          <p>E-commerce app with React UI and Flask API.</p>
        </div>
        <div style={styles.card}>
          <h3>Project 3</h3>
          <p>Task manager with user auth using Flask.</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  portfolio: {
    padding: '5rem 2rem',
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
};

export default Portfolio;