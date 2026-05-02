import { useNavigate } from 'react-router-dom';

function Events() {
    const navigate = useNavigate();

    return (
        <div className="events-page-wrapper">
            <div className="container">
                <section className="events">
                    <h2>Upcoming Events</h2>
                    <div className="events-grid">

                        <div className="event-card-v2 event-card-featured">
                            <div className="event-card-header">
                                <span className="event-badge">June 20, 2026</span>
                                <span className="event-tag">Hackathon</span>
                            </div>
                            <h3 className="event-title">Digital आवाज</h3>
                            <p className="event-desc">
                                A 24-hour hackathon dedicated to building tech solutions for women's safety.
                                Code, create, and contribute to a cause that matters. Open to all KUSOM students
                                across all disciplines; no prior coding experience required.
                            </p>
                            <button className="more-info-btn" onClick={() => navigate('/events/digital-aawaz')}>
                                More Info →
                            </button>
                        </div>

                        <div className="event-card-v2 event-card-soon">
                            <div className="event-card-header">
                                <span className="event-badge event-badge-soon">Coming Up</span>
                                <span className="event-tag event-tag-soon">Stay Tuned</span>
                            </div>
                            <h3 className="event-title">More Events on the Way</h3>
                            <p className="event-desc">
                                We're planning more events for the rest of 2026.
                                Follow our social media or check back here for announcements as they drop.
                            </p>
                            <button className="more-info-btn more-info-btn-soon" disabled>
                                Announcing Soon
                            </button>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}
export default Events;