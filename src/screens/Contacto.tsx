import { Formik } from "formik";
import { SMTPClient } from "emailjs";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8u7v4mi', 'template_c9c9c7d', form.current, '66lqtMz5UFDeg7XFw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit" value="Send">send</button>
    </form>
  );
}
