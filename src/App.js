import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import './App.css';

function App() {
    const location = useLocation();
    
    // Page transition variants - clean, no background flash
    const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    };
    
    const pageTransition = {
        duration: 0.2,
        ease: "easeInOut"
    };
    
    return (
        <div>
            <NavBar />
            <div style={{ marginTop: '80px' }}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageVariants}
                                transition={pageTransition}
                            >
                                <Home />
                            </motion.div>
                        } />
                        <Route path="/about" element={
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageVariants}
                                transition={pageTransition}
                            >
                                <About />
                            </motion.div>
                        } />
                        <Route path="/events" element={
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageVariants}
                                transition={pageTransition}
                            >
                                <Events />
                            </motion.div>
                        } />
                        <Route path="/contact" element={
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageVariants}
                                transition={pageTransition}
                            >
                                <Contact />
                            </motion.div>
                        } />
                    </Routes>
                </AnimatePresence>
            </div>
            <footer className="footer">
                <p>© 2026 IS Club — Kathmandu University School of Management</p>
            </footer>
        </div>
    );
}

// NavBar component with active link detection
function NavBar() {
    const location = useLocation();
    
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo-link">
                    <div className="logo-section">
                        <span className="kusom-nav">KUSOM</span>
                        <img src="/Images/club_logo.jpeg" alt="IS Club Logo" className="logo-img" />
                        <span className="isclub-nav">IS Club</span>
                    </div>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

// Wrap App with Router
function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;