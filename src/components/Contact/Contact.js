import React from 'react';
import './Contact.css';
import Button from '@mui/material/Button';

function Contact(props) {
  return (
    <div id={props.id}>
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <Button type="submit" id="contact-button">Send</Button>
      </form>
    </div>
    </div>
  );
}

export default Contact;
