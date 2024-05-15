import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="footer-content" style={footerContentStyle}>
        <div className="logo-container" style={logoContainerStyle}>
          {/* Social Media Icons */}
          <FontAwesomeIcon icon={faFacebookF} style={socialIconStyle} />
          <FontAwesomeIcon icon={faTwitter} style={socialIconStyle} />
          <FontAwesomeIcon icon={faInstagram} style={socialIconStyle} />
        </div>
        <div className="footer-details" style={footerDetailsStyle}>
          <p style={footerTextStyle}>© 2024 Gry Inc. All rights reserved.</p>
          <p style={footerTextStyle}>Contact: info@gry.com</p>
          <p style={footerTextStyle}>Terms of Service | Privacy Policy</p>
        </div>


        <div className="footer-details1" style={footerDetailsStyle}>
          <p style={footerTextStyle}>024 Gry Inc. All rights reserved.</p>
          <p style={footerTextStyle}>Contact: info@gry.com</p>
          <p style={footerTextStyle}>Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Styles
const footerStyle = {
  backgroundColor: '#111',
  color: '#fff',
  padding: '20px',
  marginBottom:'-10px'
};


const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const logoContainerStyle = {
  
  display: 'flex',
};

const socialIconStyle = {
  marginRight: '15px',
  fontSize: '30px',
  color: '#fff',
};

const footerDetailsStyle = {
  textAlign: 'center',
};

const footerTextStyle = {
  margin: '5px 0',
};
