import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


const AboutFour = () => {
    return (
      <div className='section section-padding case-study-featured-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-7 col-lg-6'>
              <div className='case-study-featured-thumb text-start'>
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/others/case-study-4_N.png"
                  }
                  alt='travel'
                />
              </div>
            </div>
            <div className='col-xl-5 col-lg-6'>
              <div className='case-study-featured'>
                <div className='section-heading heading-left'>
                  <span className='subtitle'>Who are we?</span>
                  <h2 className='title'>
                  Protecting Businesses from Cyber Threats
                  </h2>
                  <p>
                  At Aegis Secura, we are your trusted guardians in the digital world. 
                  Founded on the principles of innovation, integrity, and resilience, we specialize in delivering 
                  tailored cybersecurity solutions to safeguard businesses in the finance, healthcare, education, and other vulnerable sectors.
                  </p>
                  <p>
                  <u>Our mission is simple</u> : <b>to empower organizations to operate fearlessly by providing proactive defense, robust compliance support, and cutting-edge threat mitigation strategies.</b> 
                  </p>
                  <p>
                  As a dynamic and dedicated team, we combine expertise with a personalized approach, ensuring that every client receives the protection they deserve.
                  In a world where cyber threats evolve daily, Aegis Secura stands as a steadfast shield, ready to protect your most valuable digital assets. 
                  Together, let’s build a safer, more secure future.
                  </p>
                  <Link to='/contact' className='axil-btn btn-fill-primary btn-large'>
                    Discuss with us
                  </Link>
                </div>
                <div className='case-study-counterup'>
                  <div className='single-counterup'>
                    <h2 className='count-number'>
                      <TrackVisibility once>
                        {({ isVisible }) => (
                          <span className='number count'>
                            {isVisible ? (
                              <CountUp end='2' duration={1} />
                            ) : null}
                          </span>
                        )}
                      </TrackVisibility>
                      <span className='symbol'>+</span>
                    </h2>
                    <span className='counter-title'>Years on the market</span>
                  </div>
                  <div className='single-counterup'>
                    <h2 className='count-number'>
                      <TrackVisibility once>
                        {({ isVisible }) => (
                          <span className='number count'>
                            {isVisible ? (
                              <CountUp end='10' duration={1} />
                            ) : null}
                          </span>
                        )}
                      </TrackVisibility>
                      <span className='symbol'>+</span>
                    </h2>
                    <span className='counter-title'>
                      Clients protected so far
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutFour;