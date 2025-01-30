import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_id', 'template_id', form.current, 'public_key')
      .then(() => alert('Message sent!'))
      .catch((error) => alert('Failed to send.'));
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="message" placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
};