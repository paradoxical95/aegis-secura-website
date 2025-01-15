import React from "react";
import FormOne from "../contact/FormOne";

const AboutOne = () => {
  return (
    <section className='section section-padding-equal bg-color-light'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='about-us'>
              <div className='section-heading heading-left mb-0'>
                <span className='subtitle'>About Us</span>
                <h2 className='title mb--40'>We Protect, Secure and Assess.</h2>
                <p>
                  Aegis Secura is more than a cybersecurity firm — we’re your digital defenders. Our mission is to create a world where businesses operate fearlessly, armed with tailored, cutting-edge security solutions that protect against even the most advanced threats.
                </p>
                <p>
                  Our mission is to safeguard your business with robust, scalable, and proactive cybersecurity strategies. We believe in fortifying trust, ensuring compliance, and protecting your data like it’s our own.
                </p>
                <p>
                Aegis Secura specializes in protecting small and medium-sized businesses across the finance, healthcare, and education sectors — industries most targeted by cyber threats. Whether you need compliance assistance, real-time monitoring, or endpoint security, we’ve got you covered.
                </p>
              </div>
            </div>
          </div>

          <div className='col-xl-5 col-lg-6 offset-xl-1'>
            <div className='contact-form-box'>
              <h3 className='title'>Get a free Keystroke quote now</h3>
              <FormOne />
            </div>
          </div>
        </div>
      </div>
      <ul className='shape-group-6 list-unstyled'>
        <li className='shape shape-1'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"}
            alt='Bubble'
          />
        </li>
        <li className='shape shape-2'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt='line'
          />
        </li>
        <li className='shape shape-3'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
            alt='line'
          />
        </li>
      </ul>
    </section>
  );
};

export default AboutOne;
