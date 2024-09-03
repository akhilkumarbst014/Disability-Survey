// Footer.js
import React from 'react';
import './footer.css';
import nicLogo from '../../assets/nicLogo.png';
import s3waas from '../../assets/s3waas.png';
import digitalIndia from '../../assets/digitalIndia.png';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light text-center py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3">
                        <p>Content Owned by <strong>दिव्यांग कल्याण विभाग</strong></p>
                        <p>
                            Developed and hosted by <a href="https://www.nic.in/" className="text-light">National Informatics Centre</a>,
                            <br />
                            <a href="https://www.meity.gov.in/" className="text-light">Ministry of Electronics & Information Technology</a>,
                            Government of India
                        </p>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-center">
                            <img src={nicLogo} alt="Swaas" className="footer-logo mx-3" />
                            <img src={s3waas} alt="NIC" className="footer-logo mx-3" />
                            <img src={digitalIndia} alt="Digital India" className="footer-logo mx-3" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
