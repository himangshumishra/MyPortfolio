import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

function Contact() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      setMessage("Please enter a valid email.");
      setMessageType("error");
      return;
    }

    emailjs.sendForm('service_2nf4wc6', 'template_r5bcl49', event.target, 'Z-d4y6iZpf8J2jRm2')
      .then((result) => {
          console.log("Message sent: ", result.text);
          setMessage("Your message has been sent to Himangshu Mishra.");
          setMessageType("success");
      }, (error) => {
          console.log(error.text);
          setMessage("An error occurred while sending your message.");
          setMessageType("error");
      });
    event.target.reset();
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {message && <h2 className={styles[messageType]}>{message}</h2>}
    </section>
  );
}

export default Contact;