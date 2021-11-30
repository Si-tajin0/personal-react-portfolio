import React, { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import { ThemeContext } from '../../Context';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_a19thbg', 'template_w06suif', formRef.current, 'user_2F8J6Z6rbi6veI1p57CbU')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <>
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's Discuss your Project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            +8801827900521
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />
                            saiful.tajin@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="" className="c-icon" />
                            Noakhali, Bangladesh.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always freelancing if the right project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" name="user_name" id="" placeholder="Name" />
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" name="user_subject" id="" placeholder="Subject" />
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" name="user_email" id="" placeholder="Email" />
                        <textarea style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you ... "}
                    </form>
                </div>
            </div>
        </div>
        <div className="footer">
            <div style={{textAlign: "center"}}>
                <p>
                    <small>Copyright &copy; 2021 | SI TAJIN</small>
                </p>
                <p>
          <address>Noakhali, Bangladesh</address>
        </p>
        <div>
          <button className="icon-button">
            <a  target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/syful-islam-29882a180/">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </button>
          <button className="icon-button">
            <a  target="_blank" rel="noreferrer" className="icon-button"  href="https://github.com/Si-tajin0">
             
            <i class="fab fa-github"></i>
            </a>
          </button>
          <button className="icon-button">
            <a  target="_blank" rel="noreferrer" className="icon-button" href="https://www.instagram.com/si_tajin">
            
            <i class="fab fa-instagram"></i>
            </a>
          </button>
          <button className="icon-button">
            <a  target="_blank" rel="noreferrer" className="icon-button"  href="https://www.facebook.com/saiful.tajin/">
            <i class="fab fa-facebook-square"></i>
            </a>
          </button>
        </div>
            </div>
        </div>
        </>
    );
};

export default Contact;