import React from 'react';

const Services = () => {
  return (
    <section id="services" style={styles.services}>
      <h2 style={styles.heading}>Services</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Custom Web Apps</h3>
          <p>From React front-ends to Flask APIs, I build apps that scale.</p>
        </div>
        <div style={styles.card}>
          <h3>Responsive Design</h3>
          <p>Pixel-perfect UIs that work on any device.</p>
        </div>
        <div style={styles.card}>
          <h3>API Development</h3>
          <p>Secure, fast Flask back-ends for your data needs.</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  services: {
    padding: '5rem 2rem',
    backgroundColor: 'white',
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
    backgroundColor: '#F5F5F5',
    borderRadius: '5px',
  },
};

export default Services;