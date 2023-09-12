import React, { useState } from 'react';
import './Contact.css';
import Button from '@mui/material/Button';
import axios from 'axios'; // Import axios

function Contact(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/submit-form', formData);
      console.log(response.data); // You can show a success message to the user based on this response
      setFormData({ name: '', email: '', message: '' }); // Reset the form
    } catch (error) {
      console.error('Error submitting form:', error);
      // You can show an error message to the user here
    }
  };

  return (
    <div id={props.id}>
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <Button type="submit" id="contact-button">Send</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
