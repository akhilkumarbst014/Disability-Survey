import React, { useEffect } from "react";
import { MdAccountBox } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import img from '../../assets/logo5.png';
import './navbar.css';

const NavBar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    // Check if the google translate script already exists
    if (!document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
      const googleTranslateScript = document.createElement('script');
      googleTranslateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(googleTranslateScript);
    }

    window.googleTranslateElementInit = () => {
      if (!document.getElementById('google_translate_element').childNodes.length) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,mr,hi', // Only include the languages you want
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL
          },
          'google_translate_element'
        );
      }
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: 'white' }}>
      <div className="container-fluid">

        <div className="d-flex align-items-center">
          <img src={img} alt="logo" className="logo" style={{ maxHeight: '80px', marginRight: '15px' }} />
        </div>
        
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center ms-auto me-3 px-4">
            <div id="google_translate_element" className="d-flex align-items-center"></div>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: 'black' }}
            >
              <div className="icon-wrapper">
                <MdAccountBox className="profile-icon" style={{ color: 'black' }} />
              </div>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <span className="dropdown-item-text p-0 text-center">{capitalizeFirstLetter(user.Username)}</span>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item p-0 text-center" onClick={handleLogout}>
                  Logout
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item p-0 text-center">
                  Setting
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
