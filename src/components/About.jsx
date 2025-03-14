import React from 'react';

const About = () => {
  return (
    <section id="about" style={styles.about}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>
        I'm [Your Name], a full-stack developer with expertise in React for stunning front-ends and Flask for lightweight, powerful back-ends. With [X years] of experience, I build web solutions for startups, small businesses, and entrepreneurs.
      </p>
    </section>
  );
};

const styles = {
  about: {
    padding: '5rem 2rem',
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export default About;