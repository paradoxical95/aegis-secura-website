import React from "react";
import { Link } from "react-router-dom";

const AboutFive = () => {
  return (
    <div className='section-padding-equal'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-7'>
            <div className='about-team'>
              <div className='thumbnail'>
                <img
                  src={process.env.PUBLIC_URL + "/images/about/about-2.png"}
                  alt='thumbnail'
                />
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='about-team'>
              <div className='section-heading heading-left'>
                <span className='subtitle'>Our Team</span>
                <h2>Alone we can do so little; together we can do so much.</h2>
                <p>
                At Aegis Secura, we are more than a cybersecurity firm—we’re a team of passionate problem-solvers dedicated to forging genuine 
                connections with businesses of all sizes and industries. Our experts bring together a wealth of knowledge, hands-on experience, and 
                a relentless drive to uncover the best solutions for every unique challenge. 
                </p>  
                <p>
                We pride ourselves on understanding your needs deeply, tailoring our strategies to fit your specific goals, and building trust 
                through collaboration. With us, you’re not just hiring a service—you’re partnering with a team that loves what we do and is committed to securing your success.
                </p>
                {/* <Link to='/team' className='axil-btn btn-large btn-fill-primary'>
                  Our Team
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFive;
