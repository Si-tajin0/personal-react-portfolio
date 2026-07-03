import React, { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../Context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_a19thbg",
        "template_w06suif",
        formRef.current,
        "user_2F8J6Z6rbi6veI1p57CbU",
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setLoading(false);
          e.target.reset();
          setTimeout(() => setDone(false), 5000); // ৫ সেকেন্ড পর মেসেজ হাইড হবে
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        },
      );
  };

  return (
    <section
      className={`py-24 px-6 md:px-16 lg:px-28 relative overflow-hidden transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
      id="contact"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10 dark:opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-[150px] opacity-10 dark:opacity-20"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        {/* Left Side: Contact Info */}
        <div className="flex-1 space-y-10">
          <div className="space-y-4">
            <h4 className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600"></span> Let's Connect
            </h4>
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              Got a project? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Let's talk.
              </span>
            </h1>
            <p
              className={`text-lg leading-relaxed max-w-md pt-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Whether you have a question, a project idea, or just want to say
              hi, my inbox is always open.
            </p>
          </div>

          {/* Modern Contact Cards */}
          <div className="space-y-4 pt-4">
            {/* Email Card */}
            <div
              className={`flex items-center gap-6 p-4 rounded-2xl border transition-transform hover:-translate-y-1 cursor-pointer ${darkMode ? "bg-gray-800 border-gray-700 hover:border-gray-600" : "bg-white border-gray-100 shadow-sm hover:shadow-md"}`}
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center rounded-xl text-xl">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Email Me
                </p>
                <h3
                  className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  saiful.tajin@gmail.com
                </h3>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className={`flex items-center gap-6 p-4 rounded-2xl border transition-transform hover:-translate-y-1 cursor-pointer ${darkMode ? "bg-gray-800 border-gray-700 hover:border-gray-600" : "bg-white border-gray-100 shadow-sm hover:shadow-md"}`}
            >
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center rounded-xl text-xl">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Call Me
                </p>
                <h3
                  className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  +8801827900521
                </h3>
              </div>
            </div>

            {/* Location Card */}
            <div
              className={`flex items-center gap-6 p-4 rounded-2xl border transition-transform hover:-translate-y-1 cursor-pointer ${darkMode ? "bg-gray-800 border-gray-700 hover:border-gray-600" : "bg-white border-gray-100 shadow-sm hover:shadow-md"}`}
            >
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center rounded-xl text-xl">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Location
                </p>
                <h3
                  className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  Noakhali, Bangladesh
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphism Contact Form */}
        <div className="flex-1">
          <div
            className={`p-8 md:p-10 rounded-3xl border shadow-2xl ${darkMode ? "bg-gray-800/80 border-gray-700 backdrop-blur-xl" : "bg-white border-gray-100"}`}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className={`text-sm font-bold ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Your Name
                  </label>
                  <input
                    className={`w-full p-4 rounded-xl outline-none border transition-all ${darkMode ? "bg-gray-900 border-gray-700 focus:border-blue-500 text-white" : "bg-gray-50 border-gray-200 focus:border-blue-600 text-gray-900 focus:bg-white"}`}
                    type="text"
                    name="user_name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className={`text-sm font-bold ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Subject
                  </label>
                  <input
                    className={`w-full p-4 rounded-xl outline-none border transition-all ${darkMode ? "bg-gray-900 border-gray-700 focus:border-blue-500 text-white" : "bg-gray-50 border-gray-200 focus:border-blue-600 text-gray-900 focus:bg-white"}`}
                    type="text"
                    name="user_subject"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className={`text-sm font-bold ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Email Address
                </label>
                <input
                  className={`w-full p-4 rounded-xl outline-none border transition-all ${darkMode ? "bg-gray-900 border-gray-700 focus:border-blue-500 text-white" : "bg-gray-50 border-gray-200 focus:border-blue-600 text-gray-900 focus:bg-white"}`}
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className={`text-sm font-bold ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Your Message
                </label>
                <textarea
                  className={`w-full p-4 rounded-xl outline-none border transition-all resize-none ${darkMode ? "bg-gray-900 border-gray-700 focus:border-blue-500 text-white" : "bg-gray-50 border-gray-200 focus:border-blue-600 text-gray-900 focus:bg-white"}`}
                  rows="5"
                  placeholder="Tell me about your project..."
                  name="message"
                  required
                />
              </div>

              {/* Submit Button & Status */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 text-white"}`}
                >
                  {loading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <i className="fas fa-paper-plane"></i>
                    </>
                  )}
                </button>

                {done && (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl text-center animate-fade-in">
                    <span className="text-green-600 dark:text-green-400 font-bold flex items-center justify-center gap-2">
                      <i className="fas fa-check-circle"></i> Message sent
                      successfully! I will reply soon.
                    </span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modern Footer Section */}
      <footer
        className={`mt-32 pt-12 pb-8 border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left space-y-2">
            <p
              className={`font-black text-2xl tracking-tighter ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              SI<span className="text-blue-600">TAJIN</span>
            </p>
            <p
              className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}
            >
              Copyright &copy; {new Date().getFullYear()} | Crafted with{" "}
              <i className="fas fa-heart text-red-500 mx-1"></i>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              {
                icon: "fab fa-linkedin-in",
                link: "https://www.linkedin.com/in/syful-islam-29882a180/",
              },
              { icon: "fab fa-github", link: "https://github.com/Si-tajin0" },
              {
                icon: "fab fa-instagram",
                link: "https://www.instagram.com/si_tajin",
              },
              {
                icon: "fab fa-facebook-f",
                link: "https://www.facebook.com/saiful.tajin/",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform hover:-translate-y-1 ${darkMode ? "bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white border border-gray-700" : "bg-white text-gray-600 hover:bg-blue-600 hover:text-white border border-gray-200 shadow-sm"}`}
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
