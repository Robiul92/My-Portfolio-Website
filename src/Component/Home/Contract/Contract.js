import React, { useContext, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import {themeContext } from '../../../Context'
import './Contract.css'

const Contract = () => {
    const theme = useContext(themeContext);
  
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c9i7c8o",
        "template_52zo93a",
        form.current,
        "Uzd7PJle3K0Wssy_w"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
    <div>
      <h1 id='contract' className='text-center text-warning fw-bolder p-5 m-2'>Contact me</h1>
      <div className="  contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome text-center">
          {/* darkMode */}
          
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
    </div>
    );
};

export default Contract;