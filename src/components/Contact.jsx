import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5555/api/contact';
      setStatus(response.data.message);
    } catch (error) {
      setStatus('Error sending message');
    }
  };

  return (
    <section id="contact" style={styles.contact}>
      <h2 style={styles.heading}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
      {status && <p style={styles.status}>{status}</p>}
      <footer style={styles.footer}>© 2025 Digi Solutions Slns</footer>
    </section>
  );
};

const styles = {
  contact: {
    padding: '5rem 2rem',
    backgroundColor: '#1E90FF',
    color: 'white',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.5rem',
    borderRadius: '5px',
    border: 'none',
  },
  textarea: {
    padding: '0.5rem',
    borderRadius: '5px',
    border: 'none',
    minHeight: '100px',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#FF6347',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  status: {
    marginTop: '1rem',
  },
  footer: {
    marginTop: '2rem',
    fontSize: '0.9rem',
  },
};

export default Contact;