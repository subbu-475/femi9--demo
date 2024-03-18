import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
        <footer className="footer">
            <div className="footer-align">
                <div className="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><Link to={'/'} className="nav-link p-0 text-body-secondary">Home</Link></li>
                    <li className="nav-item mb-2"><Link to={'/'} className="nav-link p-0 text-body-secondary">About</Link></li>
                    </ul>
                </div>
            </div>
            <div className="copydiv">
                <p className='copyright-text'>&copy; copyrights Subbu</p>
            </div>

        </footer>
    </>
  )
}

export default Footer;