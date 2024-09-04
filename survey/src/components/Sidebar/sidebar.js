// import React from 'react';
// import { FaTasks, FaBolt, FaTachometerAlt, FaCalendarAlt, FaStickyNote, FaBox, FaChartBar, FaUsers, FaUserCircle, FaCog, FaQuestionCircle } from 'react-icons/fa';
// import './sidebar.css';
// import { Link } from 'react-router-dom';

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <>
//       <div className={`sidebar d-flex flex-column flex-shrink-0 p-3 bg-dark ${isOpen ? 'sidebar-open' : 'd-none d-lg-block'}`}>
//         <button className="btn btn-light d-lg-none mb-3" onClick={toggleSidebar} aria-label="Toggle sidebar">
//           &times;
//         </button>
//         <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
//           <img src="https://via.placeholder.com/40" alt="logo" className="rounded-circle me-2" />
//           <span className="fs-4 text-light">weihu</span>
//         </Link>
//         <hr className="text-light" />
//         <ul className="nav nav-pills flex-column mb-auto">
//           <li className="nav-item">
//             <Link to="/" className="nav-link active text-light">
//               <FaTasks className="me-2" />
//               Tasks <span className="badge bg-primary ms-auto">16</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="nav-link text-light">
//               <FaBolt className="me-2" />
//               Activities
//             </Link>
//           </li>
//           <hr className="text-light" />
//           <strong className="text-muted ms-3 mt-2 text-light">MAIN</strong>
//           <li>
//             <Link to="/" className="nav-link text-light">
//               <FaTachometerAlt className="me-2" />
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="nav-link text-light">
//               <FaCalendarAlt className="me-2" />
//               Schedule
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="nav-link text-light">
//               <FaStickyNote className="me-2" />
//               Note
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="nav-link text-light">
//               <FaBox className="me-2" />
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="nav-link text-light">
//               <FaChartBar className="me-2" />
//               Report
//             </Link>
//           </li>
//           <hr className="text-light" />
//           <strong className="text-muted ms-3 mt-2 text-light">RECORDS</strong>
//           <li>
//             <Link to="/" className="nav-link text-light">
//               <FaUsers className="me-2" />
//               Team
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="nav-link text-light">
//               <FaUserCircle className="me-2" />
//               Clients
//             </Link>
//           </li>
//           <hr className="text-light" />
//           <li>
//             <Link to="/" className="nav-link text-light">
//               <FaCog className="me-2" />
//               Settings
//             </Link>
//           </li>
//           <li>
//             <Link to="/" className="nav-link text-light">
//               <FaQuestionCircle className="me-2" />
//               Support
//             </Link>
//           </li>
//         </ul>
//       </div>
//       {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
//     </>
//   );
// };

// export default Sidebar;


import React, { useEffect } from 'react';
import { FaTasks, FaBolt, FaTachometerAlt, FaCalendarAlt, FaStickyNote, FaChartBar, FaUsers, FaCog, FaQuestionCircle } from 'react-icons/fa';
import './sidebar.css';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Sidebar = ({ isOpen, toggleSidebar, userName, user }) => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>

      <div className={`sidebar d-flex flex-column flex-shrink-0 p-3 mt-20 ${isOpen ? 'sidebar-open' : ''}`}>
        {/* <button className="btn btn-light d-lg-none mb-3" onClick={toggleSidebar} aria-label="Toggle sidebar">
          &times;
        </button> */}
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
          {/* <img src="https://via.placeholder.com/40" alt="logo" className="rounded-circle me-2" /> */}
          <Avatar name={userName} size="37" round={true} className="me-2 mx-1" />
          {/* <span className="fs-5 text-light">Akhilesh</span> */}
          <span className="fs-5 text-light px-2 fw-bold">{capitalizeFirstLetter(user.Username)}</span>
        </Link>
        <hr className="text-light" />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="#" className="nav-link ">
              <FaTasks className="me-2" style={{ marginTop: '5px' }} />
              Tasks <span className="badge ms-auto">16</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link ">
              <FaBolt className="me-2" style={{ marginTop: '5px' }} />
              Activities
            </Link>
          </li>
          <hr className="text-light" />
          <strong className="text-muted ms-3 mt-2 text-light">MAIN</strong>
          <li>
            <Link to="/" className="nav-link ">
              <FaTachometerAlt className="me-2" style={{ marginTop: '3px' }} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/HomePage" className="nav-link">
              <FaCalendarAlt className="me-2" style={{ marginTop: '5px' }} />
              Survey Form
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link ">
              <FaStickyNote className="me-2" style={{ marginTop: '5px' }} />
              Note
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link ">
              <FaChartBar className="me-2" style={{ marginTop: '5px' }} />
              Report
            </Link>
          </li>
          <hr className="text-light" />
          <strong className="text-muted ms-3 mt-2 text-light">RECORDS</strong>
          <li>
            <Link to="#" className="nav-link">
              <FaUsers className="me-2" style={{ marginTop: '5px' }} />
              Team
            </Link>
          </li>
          <hr className="text-light" />
          <li>
            <Link to="#" className="nav-link">
              <FaCog className="me-2" style={{ marginTop: '5px' }} />
              Settings
            </Link>
          </li>
          <li>
            <Link to="/Support" className="nav-link ">
              <FaQuestionCircle className="me-2" style={{ marginTop: '5px' }} />
              Support
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
