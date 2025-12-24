import React, { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
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
        emailjs.sendForm(
            'service_a19thbg', 
            'template_w06suif', 
            formRef.current, 
            'user_2F8J6Z6rbi6veI1p57CbU'
        )
        .then((result) => {
            console.log(result.text);
            setDone(true);
            e.target.reset(); // ফর্ম ক্লিয়ার করার জন্য
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <section className={`py-20 px-6 md:px-16 lg:px-28 relative overflow-hidden ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`} id="contact">
            
            {/* Background Decorative Shape */}
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                
                {/* Left Side: Contact Info */}
                <div className="flex-1 space-y-10">
                    <h1 className="text-4xl md:text-6xl font-black leading-tight">
                        Let's discuss <br /> 
                        <span className="text-blue-600 underline">your project</span>
                    </h1>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-5 group">
                            <img src={phone} alt="Phone" className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            <span className="text-lg md:text-xl font-medium">+8801827900521</span>
                        </div>
                        <div className="flex items-center gap-5 group">
                            <img src={email} alt="Email" className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            <span className="text-lg md:text-xl font-medium">saiful.tajin@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-5 group">
                            <img src={address} alt="Address" className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            <span className="text-lg md:text-xl font-medium">Noakhali, Bangladesh.</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="flex-1 space-y-8">
                    <p className="text-lg md:text-xl leading-relaxed">
                        <span className="font-bold text-blue-600 italic">What's your story?</span> Get in touch. Always freelancing if the right project comes along.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input 
                                className={`border-b-2 py-3 px-1 outline-none focus:border-blue-600 transition-colors bg-transparent ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
                                type="text" name="user_name" placeholder="Name" required 
                            />
                            <input 
                                className={`border-b-2 py-3 px-1 outline-none focus:border-blue-600 transition-colors bg-transparent ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
                                type="text" name="user_subject" placeholder="Subject" 
                            />
                        </div>
                        <input 
                            className={`border-b-2 py-3 px-1 outline-none focus:border-blue-600 transition-colors bg-transparent ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
                            type="email" name="user_email" placeholder="Email" required 
                        />
                        <textarea 
                            className={`border-b-2 py-3 px-1 outline-none focus:border-blue-600 transition-colors bg-transparent ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
                            rows="4" placeholder="How can I help you?" name="message" required 
                        />
                        
                        <div className="flex items-center gap-6">
                            <button className="bg-blue-600 text-white px-10 py-3 rounded-lg font-bold hover:bg-gray-900 transition-all shadow-lg hover:shadow-blue-200 transform hover:-translate-y-1">
                                Submit
                            </button>
                            {done && (
                                <span className="text-green-500 font-medium animate-pulse">
                                    Message sent successfully!
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer Section */}
            <footer className={`mt-32 pt-10 border-t ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
                <div className="flex flex-col items-center gap-6">
                    <div className="text-center space-y-2">
                        <p className="font-bold text-xl tracking-widest uppercase">SI TAJIN</p>
                        <p className="text-gray-400 text-sm italic">Noakhali, Bangladesh</p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {[
                            { icon: "fab fa-linkedin-in", link: "https://www.linkedin.com/in/syful-islam-29882a180/", color: "hover:text-blue-700" },
                            { icon: "fab fa-github", link: "https://github.com/Si-tajin0", color: "hover:text-gray-600" },
                            { icon: "fab fa-instagram", link: "https://www.instagram.com/si_tajin", color: "hover:text-pink-500" },
                            { icon: "fab fa-facebook-square", link: "https://www.facebook.com/saiful.tajin/", color: "hover:text-blue-600" }
                        ].map((social, index) => (
                            <a 
                                key={index}
                                href={social.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 transition-all duration-300 ${social.color} hover:border-transparent hover:bg-gray-50`}
                            >
                                <i className={`${social.icon} text-lg`}></i>
                            </a>
                        ))}
                    </div>

                    <p className="text-gray-400 text-xs mt-4">
                        Copyright &copy; {new Date().getFullYear()} | Designed & Built by SI TAJIN
                    </p>
                </div>
            </footer>
        </section>
    );
};

export default Contact;