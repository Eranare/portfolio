import React from 'react';
import './Footer.css';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
function Footer({togglePrivacyPolicy, showPrivacyPolicy}){
    return(
    <footer className="footer-container">
        <p>footer here</p>
        <p>copyright mention</p>
        <button onClick={togglePrivacyPolicy}>
        Privacyverklaring
      </button>

      {showPrivacyPolicy && <PrivacyPolicy onClose={togglePrivacyPolicy} />}
      

    </footer>
    )
}
export default Footer;