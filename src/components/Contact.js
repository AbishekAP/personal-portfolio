import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import  {toast}  from 'react-toastify';


function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cxr9lpz', 'template_0l6ufia', form.current, {
        publicKey: 'yX6rn29uPd4hY47n9',
      })
      .then(
        () => {
          toast.success('Sended Successfully');
          form.current.reset();
        },
        () => {
          toast.error('Failed! Try again!');
        },
      );
  };
    return (
        <>
         <section class="section contact" id="contact">
              <div class="container">
        
                <div class="contact-card">
        
                  <p class="card-subtitle">Don't be shy</p>
        
                  <h2 class="h2 section-title">Drop Me a Line</h2>
        
                  <div class="wrapper">
        
                    <form ref={form} onSubmit={sendEmail} class="contact-form">
        
                      <input type="text" name="from_name" placeholder="Name" required class="contact-input" />
        
                      <input type="email" name="from_email" placeholder="Email" required class="contact-input" />

                      <input type="tel" name="from_number" inputmode="numeric" pattern='[0-9]+' placeholder="Phone Number" required class="contact-input" />
        
                      <textarea name="message" placeholder="Message" required class="contact-input"></textarea>
        
                      <button type="submit" class="btn-submit">Submit Message</button>
        
                    </form>
        
                    <ul class="contact-list">
        
                      <li class="contact-item">
        
                        <div class="contact-icon">
                          <ion-icon name="location"></ion-icon>
                        </div>
        
                        <div>
                          <h3 class="contact-item-title">Address</h3>
        
                          <address class="contact-item-link">
                            Chennai,Tamil Nadu,India
                          </address>
                        </div>
        
                      </li>
        
                      <li class="contact-item">
        
                        <div class="contact-icon">
                          <ion-icon name="mail"></ion-icon>
                        </div>
        
                        <div>
                          <h3 class="contact-item-title">Email</h3>
        
                          <a href="mailto:abishekravisangar@gamil.com" class="contact-item-link">abishekravisangar@gamil.com</a>
                        </div>
        
                      </li>
        
                      <li class="contact-item">
        
                        <div class="contact-icon">
                          <ion-icon name="call"></ion-icon>
                        </div>
        
                        <div>
                          <h3 class="contact-item-title">Phone</h3>
        
                          <a href="tel:+919751521292" class="contact-item-link">+91 9751521292</a>
                        </div>
        
                      </li>
        
                    </ul>
        
                  </div>
        
                </div>
        
              </div>
            </section>  
        </>
    )

}



export default Contact;