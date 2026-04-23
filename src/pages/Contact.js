function Contact() {
    return (
        <div className="contact-page-wrapper">
            <div className="container">
                <section className="contact">
                    <h2>Get in Touch</h2>
                    <div className="contact-container">
                        <div className="contact-info">
                            <h3>Reach Out</h3>
                            <p>📍 Kathmandu University, Dhulikhel, Bagmati Province, Nepal</p>
                            <div className="social-links">
                                <p><strong>INSTAGRAM</strong><br />@kusomic</p>
                                <p><strong>LINKEDIN</strong><br />IS Club KUSOM</p>
                                <p><strong>FACEBOOK</strong><br />IS Club KUSOM</p>
                            </div>
                        </div>
                        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for reaching out! We will get back to you soon.'); }}>
                            <h3>Send a Message</h3>
                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                            <textarea placeholder="Message" rows="5" required></textarea>
                            <button type="submit">SEND MESSAGE →</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Contact;