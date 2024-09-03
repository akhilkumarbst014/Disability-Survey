// src/SectionHeader.js
import React from 'react';
import './Sectionheader.css'; // Import the CSS file

const Sectionheader = ({ title }) => {
  return (
    <div className="section-header-container">
      <div className="section-header">
        <span className="section-header-text">{title}</span>
      </div>
    </div>
  );
};

export default Sectionheader;
