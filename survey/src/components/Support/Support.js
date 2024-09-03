// src/Support.js
import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Support.css'; // Import the CSS file
import { FaQuestionCircle } from 'react-icons/fa'; // Import the icon
import { FaQuestion } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";

import { Link } from "react-router-dom"


const Support = () => {

    // Scroll to the start of the page when the component is mounted
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    
  
  
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 section-title">Contact and Support</h2>

      {/* Helpline Information */}
      <div className="card mb-4 custom-card shadow">
        <div className="card-body">
          <h4 className="card-title">Helpline Information</h4>
          <p className="card-text">
            For assistance, please call our 24/7 toll-free helpline: <strong>1800-XXX-XXXX</strong>
          </p>
          <p className="card-text">
            <strong>Operating Hours:</strong> 24/7
          </p>
          <p className="card-text">
            <strong>Languages Supported:</strong> English, Hindi, and local languages.
          </p>
        </div>
      </div>

      {/* Email Support */}
      <div className="card mb-4 custom-card shadow">
        <div className="card-body">
          <h4 className="card-title">Email Support</h4>
          <p className="card-text">
            For detailed inquiries or support, email us at <a href="mailto:support@disabilitysurvey.gov.in">support@disabilitysurvey.gov.in</a>
          </p>
          <p className="card-text">
            <strong>Response Time:</strong> We aim to respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Live Chat Support */}
      <div className="card mb-4 custom-card shadow">
        <div className="card-body">
          <h4 className="card-title">Live Chat Support</h4>
          <p className="card-text">
            <button className="btn btn-primary btn-custom">Start Chat</button>
          </p>
        </div>
      </div>

      {/* Regional Office Directory */}
      <div className="card mb-4 custom-card shadow">
        <div className="card-body">
          <h4 className="card-title">Regional Office Directory</h4>
          <p className="card-text">Find your nearest regional disability office using our office locator tool.</p>
          <p className="card-text">
            <button className="btn btn-info btn-custom">Find Office</button>
          </p>
        </div>
      </div>

      {/* Complaint and Grievance Redressal */}
      <div className="card mb-4 custom-card shadow">
        <div className="card-body">
          <h4 className="card-title">Complaint and Grievance Redressal</h4>
          <p className="card-text">Submit a complaint or track the status of your grievance.</p>
          <p className="card-text">
            <button className="btn btn-warning btn-custom">File a Complaint</button>
          </p>
        </div>
      </div>

      {/* <!-- FAQ Section --> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-4">
            <div className="placement">
              <div className="time-management">
                <p style={{ fontFamily: 'Franklin Gothic Medium', fontSize: '29px' }}>
                  <span style={{ color: 'rgb(88, 89, 92)' }}>Frequently Asked Questions</span>
                </p>
                <div className="container text-center">
                  <Link className="btn1" to="/FAQ">
                    <span className="btnInner">View More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-8 col-sm-12 paddingbox">
            <div className="accordion accordion-flush f3" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed f2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <MdQuestionAnswer size={20} className="f1" />
                    What is the purpose of this survey?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    The purpose of this survey is to collect data on the experiences, needs, and challenges faced by persons with disabilities. This information will help improve support services and policies tailored to the needs of individuals with disabilities.            </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed f2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <MdQuestionAnswer size={20} className="f1" />
                    Who is eligible to participate in this survey?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Anyone with a disability, including physical, sensory, cognitive, and mental health disabilities, is eligible to participate.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed f2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <MdQuestionAnswer size={20} className="f1" />
                    What types of disabilities are covered in this survey?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    The survey covers a range of disabilities, including locomotor, visual, hearing, speech and language, mental retardation, mental illness, and other types of disabilities.                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>



      {/* Feedback and Suggestions */}
      <div className="card mb-4 custom-card shadow">
        <div className="card-body">
          <h4 className="card-title">Feedback and Suggestions</h4>
          <p className="card-text">We value your feedback. Please share your suggestions with us.</p>
          <p className="card-text">
          <Link to="/Feedbackform"> <button className="btn btn-success btn-custom">Submit Feedback</button></Link>
          </p>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="card mb-4 custom-card shadow">
        <div className="card-body">
          <h4 className="card-title">Emergency Contacts</h4>
          <p className="card-text">
            For urgent help, please contact us at <strong>1800-XXX-XXXX</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
