function Teams() {
    return (
        <div className="container">
            <section className="teams">
                <h2>Our Teams</h2>

                {/* Marketing Team */}
                <div className="team-section">
                    <h3 className="team-category">📢 Marketing Team</h3>
                    <div className="team-members-grid">
                        <div className="member-card">
                            <img src="/Images/jelshi.jpg" alt="Jelshi Rai" className="member-photo" />
                            <h4>Jelshi Rai</h4>
                            <p className="member-role">Lead</p>
                        </div>
                        <div className="member-card">
                            <img src="/Images/sisham.jpg" alt="Sisham Ghimire" className="member-photo" />
                            <h4>Sisham Ghimire</h4>
                            <p className="member-role">Co-Lead</p>
                        </div>
                        <div className="member-card">
                            <img src="/Images/sekha.jpg" alt="Sekha Shrestha" className="member-photo" />
                            <h4>Sekha Shrestha</h4>
                            <p className="member-role">Member</p>
                        </div>
                        <div className="member-card">
                            <img src="/Images/nikita.jpg" alt="Nikita Shrestha" className="member-photo" />
                            <h4>Nikita Shrestha</h4>
                            <p className="member-role">Member</p>
                        </div>
                        <div className="member-card">
                            <img src="/Images/krisha.jpg" alt="Krisha Maharjan" className="member-photo" />
                            <h4>Krisha Maharjan</h4>
                            <p className="member-role">Member</p>
                        </div>
                    </div>
                </div>

                {/* Creative Team */}
                <div className="team-section">
                    <h3 className="team-category">🎨 Creative Team</h3>
                    <div className="team-members-grid">
                        <div className="member-card">
                            <img src="/Images/archie.jpg" alt="Archie Shrestha" className="member-photo" />
                            <h4>Archie Shrestha</h4>
                            <p className="member-role">Lead</p>
                        </div>
                        <div className="member-card">
                            <img src="/Images/anupa.png" alt="Anupa Pudasaini" className="member-photo" />
                            <h4>Anupa Pudasaini</h4>
                            <p className="member-role">Co-Lead</p>
                        </div>
                        <div className="member-card">
                            <img src="/Images/angel.JPG" alt="Angel Numa Rai" className="member-photo" />
                            <h4>Angel Numa Rai</h4>
                            <p className="member-role">Member</p>
                        </div>
                        <div className="member-card">
                            <img src="/Images/siran.jpg" alt="Siran Kafle" className="member-photo" />
                            <h4>Siran Kafle</h4>
                            <p className="member-role">Member</p>
                        </div>
                        <div className="member-card">
                            <img src="/Images/prajina.jpeg" alt="Prajina Thapa" className="member-photo" />
                            <h4>Prajina Thapa</h4>
                            <p className="member-role">Member</p>
                        </div>
                        <div className="member-card">
                            <img src="/Images/salina.jpg" alt="Salina Humagain" className="member-photo" />
                            <h4>Salina Humagain</h4>
                            <p className="member-role">Member</p>
                        </div>
                    </div>
                </div>

                {/* Technical Team */}
                <div className="team-section">
                    <h3 className="team-category">💻 Technical Team</h3>
                    <div className="team-members-grid">
                        <div className="member-card">
                            <img src="/Images/siddhartha.jpg" alt="Siddhartha Awasthi" className="member-photo" />
                            <h4>Siddhartha Awasthi</h4>
                            <p className="member-role">Lead</p>
                        </div>
                        <div className="member-card">
                            <img src="/Images/sashank.jpg" alt="Sashank Ghimire" className="member-photo" />
                            <h4>Sashank Ghimire</h4>
                            <p className="member-role">Co-Lead</p>
                        </div>
                        <div className="member-card">
                            <img src="/Images/samrat.jpg" alt="Samrat Karki" className="member-photo" />
                            <h4>Samrat Karki</h4>
                            <p className="member-role">Member</p>
                        </div>
                        <div className="member-card">
                            <img 
                                src="/Images/srijan.jpeg" 
                                alt="Srijan Karki" 
                                className="member-photo" 
                                style={{ objectFit: 'cover', objectPosition: 'top center' }} 
                            />
                            <h4>Srijan Karki</h4>
                            <p className="member-role">Member</p>
                        </div>
                        <div className="member-card">
                            <img src="/Images/jigyasha.PNG" alt="Jigyasha Dhakal" className="member-photo" />
                            <h4>Jigyasha Dhakal</h4>
                            <p className="member-role">Member</p>
                        </div>
                    </div>
                </div>

                {/* Events Team - Ishika removed */}
                <div className="team-section">
                    <h3 className="team-category">🎪 Events Team</h3>
                    <div className="team-members-grid">
                        <div className="member-card">
                            <img src="/Images/aayush.jpeg" alt="Aayush Pradhan" className="member-photo" />
                            <h4>Aayush Pradhan</h4>
                            <p className="member-role">Member</p>
                        </div>
                        <div className="member-card">
                            <img src="/Images/sundar.jpg" alt="Sundar Suwal" className="member-photo" />
                            <h4>Sundar Suwal</h4>
                            <p className="member-role">Member</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Teams;
