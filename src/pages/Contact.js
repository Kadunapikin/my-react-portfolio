import React, { useRef } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sewv1wn', 'template_pbg7qwd', form.current, 'MQaxQbrbfZJ0Ht2fG')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');
          }, (error) => {
              console.log(error.text);
          });
      };
    

  return (
    <section id='contactPage'>
    <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Kindly fill out the form bellow to discuss any job opportunity</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='from_name' />
            <input type='email' className='email' placeholder='Your Email' name='from_email' />
            <textarea className='msg' name='message'rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
        </form>
    </div>
</section>
  )
}

export default Contact