import React from "react";
import { Link } from "react-router-dom";
import TeamData from "../../data/team/TeamData.json";
import { slugify } from "../../utils";

const allData = TeamData;

const TeamOne = () => {
  return (
    <div className='section section-padding bg-color-dark pb--70 pb_lg--20 pb_md--0'>
      <div className='container'>
        <div className='section-heading heading-light'>
          <span className='subtitle'></span>
          <h2 className='title mb--50'>Meet the Minds Behind the Mission</h2>
          <p>
            Together, we drive forward with passion and purpose, committed to
            delivering excellence in everything we do.
          </p>
        </div>
        <div className='row'>
          {allData.map((data) => (
            <div className='col-xl-3 col-sm-6' key={data.id}>
              <div className='team-grid'>
                <div className='thumbnail'>
                  <Link
                    to={
                      process.env.PUBLIC_URL +
                      `/team-details/${slugify(data.title)}`
                    }
                  >
                    <img
                      src={process.env.PUBLIC_URL + data.thumb}
                      alt={data.title}
                    />
                  </Link>
                </div>
                <div className='content'>
                  <h4 className='title'>
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        `/team-details/${slugify(data.title)}`
                      }
                    >
                      {data.title}
                    </Link>
                  </h4>
                  <span
                    className='designation'
                    dangerouslySetInnerHTML={{ __html: data.designation }}
                  ></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ul className='list-unstyled shape-group-10'>
        <li className='shape shape-1'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/circle-1.png"}
            alt='Circle'
          />
        </li>
        <li className='shape shape-2'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-3.png"}
            alt='Circle'
          />
        </li>
        <li className='shape shape-3'>
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"}
            alt='Circle'
          />
        </li>
      </ul>
    </div>
  );
};

export default TeamOne;
