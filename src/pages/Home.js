import { useState, useEffect } from 'react';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

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
                    <p className="hero-tagline">Information Systems Club — Kathmandu University</p>
                    <p className="hero-description">
                        A student-led organization dedicated to bridging the gap between technology and real-world impact.
                        We are a community of innovators, designers, developers, and thinkers who believe that information
                        systems are instruments of change.
                    </p>
                    <button className="explore-events-btn" onClick={() => window.location.href = '/events'}>
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

            <section className="stats-white">
                <div className="stat"><h3>4</h3><p>Teams</p></div>
                <div className="stat"><h3>5</h3><p>Leaders</p></div>
                <div className="stat"><h3>1</h3><p>Mission</p></div>
            </section>
        </div>
    );
}

export default Home;