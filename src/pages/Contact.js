import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Contact() {
    return (
        <div className="contact-page-wrapper">
            <div className="container">
                <section className="contact">
                    <h2>Get in Touch</h2>
                    <div className="contact-new-layout">
                        {/* Left Side - Contact Info */}
                        <div className="contact-info-card">
                            <div className="contact-icon">📧</div>
                            <h3>Email Us</h3>
                            <p>informationsystemclub@kusom.edu.np</p>
                            
                            <div className="contact-icon">📍</div>
                            <h3>Visit Us</h3>
                            <p>Kathmandu University, Dhulikhel<br />Bagmati Province, Nepal</p>
                            
                            <div className="contact-icon">📱</div>
                            <h3>Call Us</h3>
                            <p>+977 981-3210593 (Coordinator)<br />+977 986-1447150 (Vice-Coordinator)</p>
                            
                            <div className="social-section">
                                <h3>Follow Us</h3>
                                <div className="social-icons">
                                    <a href="https://www.instagram.com/kusomisc/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                        <FaInstagram size={24} /> Instagram
                                    </a>
                                    <a href="https://www.linkedin.com/company/information-systems-club-kusom/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                        <FaLinkedin size={24} /> LinkedIn
                                    </a>
                                    <a href="https://www.facebook.com/kusomISC" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                        <FaFacebook size={24} /> Facebook
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="contact-form-card">
                            <h3>Send us a Message</h3>
                            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for reaching out! We will get back to you soon.'); }}>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Your Message" rows="5" required></textarea>
                                </div>
                                <button type="submit">Send Message →</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Contact;