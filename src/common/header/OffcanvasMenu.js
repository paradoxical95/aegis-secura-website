import React from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
  FaPhone,
  FaFax,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const OffcanvasMenu = ({ offcanvasShow, offcanvasHide }) => {
  return (
    <Offcanvas
      show={offcanvasShow}
      onHide={offcanvasHide}
      placement='end'
      className='header-offcanvasmenu'
    >
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        {/* <form action="#" className="side-nav-search-form">
                    <div className="form-group">
                        <input type="text" className="search-field" name="search-field" placeholder="Search..." />
                        <button className="side-nav-search-btn"><i className="fas fa-search"></i></button>
                    </div>
                </form> */}
        <div className='row '>
          <div className='col-lg-5 col-xl-6'>
            <ul className='main-navigation list-unstyled'>
              <li>
                <Link
                  to={
                    process.env.PUBLIC_URL +
                    "/service-details/consultation"
                  }
                >
                  Consultation
                </Link>
              </li>
              <li>
                <Link
                  to={
                    process.env.PUBLIC_URL + "/service-details/va-pt"
                  }
                >
                  VAPT
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/service-details/incident-response"}>
                  Incident Response
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/service-details/data-protection-compliance"}
                >
                  Data Protection & Compliance
                </Link>
              </li>
              <li>
                <Link
                  to={process.env.PUBLIC_URL + "/service-details/cyber-awareness-training"}
                >
                  Cybersecurity Awareness Training
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/service-details/secure-infrastructure"}>
                  Secure Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to={
                    process.env.PUBLIC_URL +
                    "/service-details/bc-dr"
                  }
                >
                  BC-DR
                </Link>
              </li>
              <li>
                <Link
                  to={
                    process.env.PUBLIC_URL +
                    "/service-details/audit-and-reporting"
                  }
                >
                  Audit and Reporting
                </Link>
              </li>
              <li>
                <Link
                  to={
                    process.env.PUBLIC_URL +
                    "/service-details/vciso-service"
                  }
                >
                  vCISO Service
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-lg-7 col-xl-6'>
            <div className='contact-info-wrap'>
              <div className='contact-inner'>
                <address className='address'>
                  <span className='title'>Contact Information</span>
                  <p>
                    New Delhi, India
                  </p>
                </address>
                <address className='address'>
                  <span className='title'>Write to us</span>
                  <a href='mailto:info@aegis-secura.tech'>
                      info@aegis-secura.tech
                  </a>
                </address>
              </div>
              <div className='contact-inner'>
                <h5 className='title'>Find us here</h5>
                <div className='contact-social-share'>
                  <ul className='social-share list-unstyled'>
                    <li>
                      <a href='https://twitter.com/'>
                        <FaXTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasMenu;
