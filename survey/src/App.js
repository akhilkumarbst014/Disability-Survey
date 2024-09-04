

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/navbar';
import Login from './components/Login/login';
import Register from './components/Register/register';
import Sidebar from './components/Sidebar/sidebar';
import './App.css'; 
import Dashboard from './components/Dashboard/Dashboard';
import Support from './components/Support/Support';
import FAQ from './components/FAQ/FAQ';
import Feedback from 'react-bootstrap/esm/Feedback';
import Feedbackform from './components/Feedbackform/Feedbackform';
// import Footer from './components/Footer/footer';

function App() {
    const [user, setUser] = useState(null);

    // Check if user data is stored in localStorage on initial load
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Save user data to localStorage on login
    const handleLogin = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    // Handle logout and clear user data from localStorage
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <Router>
            {!user ? (
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login setUser={handleLogin} />} />
                    {/* Redirect to login if not authenticated */}
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            ) : (
                <>
                    <Navbar setUser={handleLogout} user={user} />
                    <div className="wrapper">
                        <Sidebar userName={user.Username} user={user} />
                        <div className="main-content">
                            <Routes>
                                {/* Dashboard Route */}
                                <Route path="/Dashboard" element={<Dashboard user={user} />} />
                                {/* Default Route */}
                                <Route path="/" element={<Navigate to="/Dashboard" />} />
                                {/* Redirect any unmatched route to dashboard */}
                                {/* <Route path="*" element={<Navigate to="/Dashboard" />} /> */}
                                <Route exact path="/HomePage" element={<HomePage />} />
                                <Route exact path="/Support" element={<Support />} />
                                <Route exact path="/FAQ" element={<FAQ />} />
                                <Route exact path="/Feedbackform" element={<Feedbackform />} />

                            </Routes>
                        </div>
                    </div>
                    {/* <Footer /> */}
                </>
            )}
        </Router>
    );
}

export default App;
