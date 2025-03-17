import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaShareAlt, FaGithub, FaLinkedin, FaInstagram, FaClipboard } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [copied, setCopied] = useState(false);

  // Function to Copy Email to Clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText("yeswanth1809@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide "Copied!" after 2 seconds
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">CONTACT ME</h2>

        {/* Contact Info Cards - Center Aligned */}
        <div className="contact-info">
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-details">
              <h3>My Address</h3>
              <p>MoreHead Ave, Boulder, 80305, CO</p>
            </div>
          </div>

          <div className="contact-card">
            <FaShareAlt className="contact-icon" />
            <div className="contact-details">
              <h3>Social Profiles</h3>
              <div className="social-icons">
                <a href="https://github.com/yeswanthsai18" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/yeswanth-sai-tirumalasetty/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/yeswanthbobby18/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div className="contact-details">
              <h3>Email Me</h3>
              <p className="email-text">
                yeswanth1809@gmail.com
                <FaClipboard className="clipboard-icon" onClick={copyToClipboard} />
              </p>
              {copied && <span className="copied-popup">Copied!</span>}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {/* Portfolio Project Link Section */}
        <div className="portfolio-project">
          <p>Check out my <span className="highlight">React & Node Portfolio</span> project on GitHub:</p>
          <a href="https://github.com/yeswanthsai18/portfolio-website" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
