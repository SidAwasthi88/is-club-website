function Events() {
    return (
        <div className="events-page-wrapper">
            <div className="container">
                <section className="events">
                    <h2>Upcoming Events</h2>
                    <div className="events-list">
                        <div className="event-card">
                            <div className="event-date">May 15</div>
                            <div className="event-info">
                                <h3>Web Development Workshop</h3>
                                <p>Learn modern web development with React</p>
                            </div>
                        </div>
                        <div className="event-card">
                            <div className="event-date">May 22</div>
                            <div className="event-info">
                                <h3>Hackathon 2026</h3>
                                <p>24-hour coding competition</p>
                            </div>
                        </div>
                        <div className="event-card">
                            <div className="event-date">June 20</div>
                            <div className="event-info">
                                <h3>Digital आवाज</h3>
                                <p>Code. Create. Contribute to Women’s Safety.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Events;