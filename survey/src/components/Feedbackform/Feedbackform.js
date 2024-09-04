import React, { useState, useEffect } from 'react';
import './Feedbackform.css';
import { FaUser, FaEnvelope, FaAccessibleIcon, FaSyncAlt } from 'react-icons/fa';
import gifimage from '../../assets/Attached files.gif';

const Feedbackform = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        disabilityType: '',
        feedback: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add further logic 
    };

    const handleRefreshFeedback = () => {
        setFormData({ ...formData, feedback: '' });
    };

    const handleRefreshForm = () => {
        setFormData({
            name: '',
            email: '',
            disabilityType: '',
            feedback: '',
        });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

    return (
        <div className="container mt-3 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#fafeff' }}>
            <div className="page-navigation mt-3 mb-2">
                <p className="mb-0 fw-bold">
                    <a href="/" className="d-inline-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 1 .292.708L1 9.293V15.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3h2v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9.293l-7.646-7.439a.5.5 0 0 1-.708-.708L8 1.5l.354-.354z" />
                            <path d="M2.5 14.5v-6.293l5.5-5.439 5.5 5.439V14.5h-3v-3a1 1 0 0 0-1-1H6.5a1 1 0 0 0-1 1v3h-3z" />
                        </svg>
                        Support
                    </a>
                    <span>&gt;</span>
                    <a href="/feedback" className="d-inline-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                            <path d="M3 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7.414l-2.707 2.707A1 1 0 0 1 3 11.707V3zm11 2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8.5a.5.5 0 0 0 .854.354L7 10.5h5a3 3 0 0 0 3-3V5z" />
                            <path d="M7 5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V5zM4 5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V5zM10 5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V5z" />
                        </svg>
                        Feedback
                    </a>
                </p>
            </div>

            <div className="feedback-form-container p-3 bg-light shadow-lg rounded">
                <div className='row align-items-center'>
                    <div className='col-12 col-md-12 col-lg-6 mb-3 mb-md-0'>
                        <img src={gifimage} alt="logo" className="img-fluid" />
                    </div>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <form onSubmit={handleSubmit} className="custom-feedback-form">
                            <h3 className="text-center mb-2 mt-2 custom-title">Feedback Form</h3>
                            <div className="input-with-icon">
                                <div className="input-container">
                                    <FaUser className="input-icon" />
                                    <label htmlFor="name" className="form-label">Name</label>
                                </div>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="input-with-icon">
                                <div className="input-container">
                                    <FaEnvelope className="input-icon" />
                                    <label htmlFor="email" className="form-label">Email</label>
                                </div>
                                <input
                                    type="email"
                                    className="form-control custom-input"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="input-with-icon">
                                <div className="input-container">
                                    <FaAccessibleIcon className="input-icon" />
                                    <label htmlFor="disabilityType" className="form-label">Disability Type</label>
                                </div>
                                <select
                                    className="form-select custom-select"
                                    id="disabilityType"
                                    name="disabilityType"
                                    value={formData.disabilityType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Disability Type</option>
                                    <option value="Locomotor">Locomotor</option>
                                    <option value="Visual">Visual</option>
                                    <option value="Hearing">Hearing</option>
                                    <option value="Speech & Language">Speech & Language</option>
                                    <option value="Mental Retardation">Mental Retardation</option>
                                    <option value="Mental Illness">Mental Illness</option>
                                    <option value="Other Disabilities">Other Disabilities</option>
                                </select>
                            </div>
                            <div className="mb-3 position-relative">
                                <label htmlFor="feedback" className="form-label">Feedback</label>
                                <textarea
                                    className="form-control custom-textarea"
                                    id="feedback"
                                    name="feedback"
                                    rows="4"
                                    value={formData.feedback}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <FaSyncAlt className="refresh-icon" onClick={handleRefreshFeedback} />
                            </div>
                            <div className="form-group d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary mx-2">Submit</button>
                                <button type="button" className="btn btn-secondary mx-2 d-flex" onClick={handleRefreshForm}>
                                    <FaSyncAlt className="me-1 my-1" /> Refresh
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedbackform;
