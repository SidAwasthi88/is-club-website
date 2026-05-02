import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const slides = [
        '/Images/homeslide1.jpg',
        '/Images/homeslide2.webp',
        '/Images/homeslide3.jpg',
        '/Images/homeslide4.jpg',
        '/Images/homeslide5.jpeg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div>
            {/* ── Hero ── */}
            <section className="hero">
                <div className="slideshow-container">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${slide})` }}
                        />
                    ))}
                    <div className="slideshow-overlay" />
                </div>
                <div className="hero-content">
                    <div className="hero-logo-container">
                        <img src="/Images/club_logo.jpeg" alt="IS Club Logo" className="hero-logo" />
                    </div>
                    <h1 className="hero-kusom">KUSOM</h1>
                    <h2 className="hero-isclub">IS CLUB</h2>
                    <p className="hero-tagline">Information Systems Club — Kathmandu University School of Management</p>
                    <p className="hero-description">
                        A student-led organization dedicated to bridging the gap between technology and real-world impact.
                        We are a community of innovators, designers, developers, and thinkers who believe that information
                        systems are instruments of change.
                    </p>
                    <button className="explore-events-btn" onClick={() => navigate('/events')}>
                        Explore Events →
                    </button>
                </div>
                <div className="slide-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* ── Stats ── */}
            <section className="stats-white">
                <div className="stat"><h3>4</h3><p>Teams</p></div>
                <div className="stat"><h3>5</h3><p>Leaders</p></div>
                <div className="stat"><h3>1</h3><p>Mission</p></div>
            </section>

            {/* ── What We Do ── */}
            <section className="home-section what-we-do">
                <div className="container">
                    <p className="home-section-label">Our Focus</p>
                    <h2 className="home-section-title">What We Do</h2>
                    <p className="home-section-subtitle">
                        From hands-on workshops to real-world hackathons, we create spaces where students grow into technologists and leaders.
                    </p>
                    <div className="wwd-grid">
                        <div className="wwd-card">
                            <div className="wwd-icon">🛠️</div>
                            <h3>Workshops</h3>
                            <p>Practical sessions on web development, UI/UX, data analytics, and emerging tech — taught by students, for students.</p>
                        </div>
                        <div className="wwd-card">
                            <div className="wwd-icon">⚡</div>
                            <h3>Hackathons</h3>
                            <p>Time-bound challenges where teams build real solutions to real problems. Think fast, build faster.</p>
                        </div>
                        <div className="wwd-card">
                            <div className="wwd-icon">🎙️</div>
                            <h3>Tech Talks</h3>
                            <p>Conversations with industry professionals, alumni, and researchers bringing the outside world into the classroom.</p>
                        </div>
                        <div className="wwd-card">
                            <div className="wwd-icon">🤝</div>
                            <h3>Networking</h3>
                            <p>Building connections that outlast semesters — with peers, mentors, and organizations that share our values.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Featured Event Banner ── */}
            <section className="home-section event-banner-section">
                <div className="container">
                    <div className="event-banner">
                        <div className="event-banner-text">
                            <span className="event-banner-label">Upcoming Event</span>
                            <h2 className="event-banner-title">Digital आवाज</h2>
                            <p className="event-banner-date">📅 June 20, 2026</p>
                            <p className="event-banner-desc">
                                A 24-hour hackathon dedicated to building tech solutions for women's safety.
                                Code, create, and contribute to a cause that matters.
                            </p>
                            <button className="event-banner-btn" onClick={() => navigate('/events/digital-aawaz')}>
                                Learn More →
                            </button>
                        </div>
                        <div className="event-banner-image">
                            {/* Replace with actual event poster when ready */}
                            <div className="event-banner-placeholder">
                                <span>🗓️</span>
                                <p>Event Poster</p>
                                <small>Replace with image</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Gallery Preview ── */}
            <section className="home-section gallery-section">
                <div className="container">
                    <p className="home-section-label">Moments</p>
                    <h2 className="home-section-title">From Our Community</h2>
                    <p className="home-section-subtitle">
                        A glimpse into the events, workshops, and people that make IS Club what it is.
                    </p>
                    <div className="gallery-grid">
                        <div className="gallery-item gallery-item-large">
                            <div className="gallery-placeholder"><span>📸</span><p>Event Photo 1</p></div>
                        </div>
                        <div className="gallery-item">
                            <div className="gallery-placeholder"><span>📸</span><p>Event Photo 2</p></div>
                        </div>
                        <div className="gallery-item">
                            <div className="gallery-placeholder"><span>📸</span><p>Event Photo 3</p></div>
                        </div>
                        <div className="gallery-item">
                            <div className="gallery-placeholder"><span>📸</span><p>Event Photo 4</p></div>
                        </div>
                        <div className="gallery-item">
                            <div className="gallery-placeholder"><span>📸</span><p>Event Photo 5</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Join CTA ── */}
            <section className="home-section join-section">
                <div className="container">
                    <div className="join-card">
                        <h2 className="join-title">Be Part of Something Bigger</h2>
                        <p className="join-desc">
                            Whether you code, design, manage, or just have ideas — there's a place for you in IS Club.
                            Join a community that builds, learns, and grows together.
                        </p>
                        <div className="join-btns">
                            <button className="join-btn-primary" onClick={() => navigate('/about')}>
                                Meet the Team
                            </button>
                            <button className="join-btn-secondary" onClick={() => navigate('/contact')}>
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;