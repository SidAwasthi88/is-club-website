function About() {
    return (
        <div className="about-page-wrapper">
            <div className="container">
                {/* About Section */}
                <section className="about-section">
                    <h2>About Us</h2>
                    <p className="about-intro">
                        We are a community of innovators, builders, and creators at Kathmandu University School of Management (KUSOM).
                    </p>
                    <div className="about-grid">
                        <div className="about-card">
                            <h3>🎯 Mission</h3>
                            <p>Empower students with practical tech skills and real-world problem-solving abilities.</p>
                        </div>
                        <div className="about-card">
                            <h3>👁️ Vision</h3>
                            <p>Create a launchpad for future tech innovators and leaders.</p>
                        </div>
                        <div className="about-card">
                            <h3>💡 Values</h3>
                            <p>Innovation, Collaboration, Impact, and Continuous Learning.</p>
                        </div>
                    </div>
                </section>

                {/* Leadership Section - Executive Board with Alternating Layout */}
                <section className="leadership-section">
                    <h2>Leadership</h2>
                    <p className="section-subtitle">Executive Board — 2026</p>
                    
                    {/* Leader 1 - Serisha (Photo Left, Text Right) */}
                    <div className="leader-row leader-left">
                        <div className="leader-photo-container">
                            <img src="/Images/serisha.jpeg" alt="Serisha Awale" className="leader-photo-large" />
                        </div>
                        <div className="leader-info">
                            <h3>Serisha Awale</h3>
                            <p className="role">President</p>
                            <p>Hi, I'm Serisha. As President of the IS Club, I lead our mission to bridge technology and real-world impact. I believe in empowering students to think beyond textbooks and build solutions that matter.</p>
                        </div>
                    </div>

                    {/* Leader 2 - Luniva (Photo Right, Text Left) */}
                    <div className="leader-row leader-right">
                        <div className="leader-info">
                            <h3>Luniva Rajbhandari</h3>
                            <p className="role">Vice President</p>
                            <p>Hi, I'm Luniva. As Vice President, I work closely with all four teams to ensure our initiatives run smoothly and our members feel supported. I'm passionate about collaboration and creating spaces where every voice is heard.</p>
                        </div>
                        <div className="leader-photo-container">
                            <img src="/Images/luniva.jpg" alt="Luniva Rajbhandari" className="leader-photo-large" />
                        </div>
                    </div>

                    {/* Leader 3 - Aarika (Photo Left, Text Right) */}
                    <div className="leader-row leader-left">
                        <div className="leader-photo-container">
                            <img src="/Images/aarika.JPG" alt="Aarika Maharjan" className="leader-photo-large" style={{ objectPosition: '50% 30%' }}/>
                        </div>
                        <div className="leader-info">
                            <h3>Aarika Maharjan</h3>
                            <p className="role">Secretary</p>
                            <p>Hi, I'm Aarika. I handle the organizational backbone of the IS Club — from meeting coordination to documentation. I believe great teams are built on clear communication and structure, and I strive to keep us aligned.</p>
                        </div>
                    </div>

                    {/* Leader 4 - Surya (Photo Right, Text Left) */}
                    <div className="leader-row leader-right">
                        <div className="leader-info">
                            <h3>Surya Dahal</h3>
                            <p className="role">Treasurer</p>
                            <p>Hi, I'm Surya. As Treasurer, I manage the club's finances and ensure every initiative is resourced for success. I'm committed to transparency and making sure our budget reflects our values.</p>
                        </div>
                        <div className="leader-photo-container">
                            <img src="/Images/surya.JPG" alt="Surya Dahal" className="leader-photo-large" />
                        </div>
                    </div>

                    {/* Leader 5 - Bibhushree (Photo Left, Text Right) */}
                    <div className="leader-row leader-left">
                        <div className="leader-photo-container">
                            <img src="/Images/bibhushree.jpg" alt="Bibhushree Malla" className="leader-photo-large" />
                        </div>
                        <div className="leader-info">
                            <h3>Bibhushree Malla</h3>
                            <p className="role">Joint Treasurer</p>
                            <p>Hi, I'm Bibhushree. Working alongside our Treasurer, I help manage budgets, sponsorships, and financial planning. I'm dedicated to ensuring the club's resources are used effectively to maximize our impact.</p>
                        </div>
                    </div>
                </section>

                {/* Teams Section - New Order: Marketing, Technical, Creative, Events */}
                <section className="teams-section">
                    <h2>Our Teams — 2026</h2>
                    
                    {/* Marketing Team - First */}
                    <div className="team-section">
                        <h3 className="team-category">📢 Marketing Team</h3>
                        <p className="team-description">Promotions & social media</p>
                        <div className="team-members-grid">
                            <div className="member-card">
                                <img src="/Images/jelshi.jpg" alt="Jelshi Rai" className="member-photo" style={{ objectPosition: 'bottom center' }} />
                                <h4>Jelshi Rai</h4>
                                <p className="member-role">Lead</p>
                            </div>
                            <div className="member-card">
                                <img src="/Images/sisham.jpg" alt="Sisham Ghimire" className="member-photo" />
                                <h4>Sisham Ghimire</h4>
                                <p className="member-role">Co-Lead</p>
                            </div>
                            <div className="member-card">
                                <img src="/Images/nikita.jpg" alt="Nikita Shrestha" className="member-photo" />
                                <h4>Nikita Shrestha</h4>
                                <p className="member-role">Member</p>
                            </div>
                            <div className="member-card">
                                <img src="/Images/sekha.jpg" alt="Sekha Shrestha" className="member-photo" />
                                <h4>Sekha Shrestha</h4>
                                <p className="member-role">Member</p>
                            </div>
                            <div className="member-card">
                                <img src="/Images/krisha.jpg" alt="Krisha Manandhar" className="member-photo" />
                                <h4>Krisha Manandhar</h4>
                                <p className="member-role">Member</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Team - Second */}
                    <div className="team-section">
                        <h3 className="team-category">💻 Technical Team</h3>
                        <p className="team-description">Website, systems & tech support</p>
                        <div className="team-members-grid">
                            <div className="member-card">
                                <img src="/Images/siddhartha.jpg" alt="Siddhartha Raj Awasthi" className="member-photo" />
                                <h4>Siddhartha Raj Awasthi</h4>
                                <p className="member-role">Lead</p>
                            </div>
                            <div className="member-card">
                                <img src="/Images/sashank.jpg" alt="Shashank Ghimire" className="member-photo" />
                                <h4>Shashank Ghimire</h4>
                                <p className="member-role">Co-Lead</p>
                            </div>
                            <div className="member-card">
                                <img src="/Images/jigyasha.PNG" alt="Jigyasha Dhakal" className="member-photo" />
                                <h4>Jigyasha Dhakal</h4>
                                <p className="member-role">Member</p>
                            </div>
                            <div className="member-card">
                                <img src="/Images/samrat.jpg" alt="Samrat Karki" className="member-photo" style={{ objectPosition: 'bottom center' }}/>
                                <h4>Samrat Karki</h4>
                                <p className="member-role">Member</p>
                            </div>
                            <div className="member-card">
                                <img src="/Images/srijan.jpeg" alt="Srijan Karki" className="member-photo" style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                                <h4>Srijan Karki</h4>
                                <p className="member-role">Member</p>
                            </div>
                        </div>
                    </div>

                    {/* Creative Team - Third */}
                    <div className="team-section">
                        <h3 className="team-category">🎨 Creative Team</h3>
                        <p className="team-description">Design, graphics & visual content</p>
                        <div className="team-members-grid">
                            <div className="member-card">
                                <img src="/Images/archie.jpeg" alt="Archie Shrestha" className="member-photo" />
                                <h4>Archie Shrestha</h4>
                                <p className="member-role">Lead</p>
                            </div>
                            <div className="member-card">
                                <img src="/Images/anupa.png" alt="Anupa Pudasaini" className="member-photo" style={{ objectPosition: '50% 30%' }}/>
                                <h4>Anupa Pudasaini</h4>
                                <p className="member-role">Co-Lead</p>
                            </div>
                            <div className="member-card">
                                <img src="/Images/angel.JPG" alt="Angel Numa Rai" className="member-photo" />
                                <h4>Angel Numa Rai</h4>
                                <p className="member-role">Member</p>
                            </div>
                            <div className="member-card">
                                <img src="/Images/siran.jpg" alt="Siran Kafle" className="member-photo" style={{ objectPosition: '50% 50%' }}/>
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

                    {/* Event Team - Fourth */}
                    <div className="team-section">
                        <h3 className="team-category">🎪 Event Team</h3>
                        <p className="team-description">Planning & executing club events</p>
                        <div className="team-members-grid">
                            <div className="member-card">
                                <img src="/Images/aayush.jpeg" alt="Aayush Pradhan" className="member-photo" style={{ objectPosition: '50% 90%' }}/>
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
        </div>
    );
}
export default About;