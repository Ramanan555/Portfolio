import './App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p7w074h', 'template_0557cng', form.current, {
        publicKey: 'sxNVATkxYjeOSzkPH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();  
    };
  return (
    <div className="contact">
          <div className="contact-container">
            <div>
                <h1 className="contact-intro">Contact me</h1>
             </div>
             <div className="form"> 
             <form ref={form} onSubmit={sendEmail}>
                <div>
                  <label>
                      <input name="user_name" className="sample" type="text"placeholder="Name"></input>
                  </label>
                </div>
                <div>
                  <label>
                      <input name="user_email" type="text" placeholder="Mail Adress"></input>
                  </label>
                </div>
                <div>
                  <label>
                      <input name="message" className="message" type="text" placeholder="Write Your Message Here!"></input>
                  </label>
                </div>  
                <input className="button" type="submit" value="Send" />
              </form>
              
            
            </div>

            </div>


        </div>

  
  )
  }  




export default Contact