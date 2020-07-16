import React, { Fragment } from "react";
import { openings } from "./careerData";

import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import experience from "assets/experience.svg";

import { grid_1x2, grid_1x2_image, left, main, content_group } from "style/layout.module.css";
import { applications_content, cv } from "./style.module.css";

const Career = () => {
  return (
    <Fragment>
      <div className={main}>
        <h1>Careers</h1>
      </div>

      <section>
        <div className="container">
          <div className={`${grid_1x2} scale_effect`}>
            <p>
              Join us on an exciting journey to build the largest oil seed processing company in West Africa and Africa
              as a whole. Our proven expertise in shea nut processing is based on more than 45 years of experience.
            </p>
            <div id={left} className={`${grid_1x2_image}`}>
              <img src={experience} alt="media" />
              <p>Working with US</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about_info">
        <div className={`container`}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="one">
            <Col>
              <Nav variant="tabs" className={`flex-row `} justify>
                <Nav.Item>
                  <Nav.Link eventKey="one" className={`mx-1 py-3 nav-content`}>
                    Available jobs
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="two" className={`mx-1 py-3 nav-content`}>
                    General application (submit cv)
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Tab.Content>
              <Tab.Pane eventKey="one" className={applications_content}>
                {openings.length > 0 ? (
                  <>
                  <p className="text-center my-3">Ladgroup is an equal opportunity employer</p>
                  <Row className="py-3 px-1">
                    <Col className="my-auto" sm={6}>
                      <div className={content_group}>
                        <img src={openings[0].image} alt="" />
                        <p>{openings[0].department}</p>
                        <h3>{openings[0].position}</h3>
                      </div>
                    </Col>
                    <Col className="my-auto" sm={6}>
                      <div className={content_group}>
                        <img src={openings[1].image} alt="" />
                        <p>{openings[1].department}</p>
                        <h3>{openings[1].position}</h3>
                      </div>
                    </Col>
                  </Row>
                  <Row className="py-3 px-1">
                    <Col className="my-auto" sm={6}>
                      <div className={content_group}>
                        <img src={openings[2].image} alt="" />
                        <p>{openings[2].department}</p>
                        <h3>{openings[2].position}</h3>
                      </div>
                    </Col>
                    <Col className="my-auto" sm={6}>
                      <div className={content_group}>
                        <img src={openings[3].image} alt="" />
                        <p>{openings[3].department}</p>
                        <h3>{openings[3].position}</h3>
                      </div>
                    </Col>
                  </Row>
                  </>
                ) : (
                  <p>Hello there, sorry there are no vacancy at the moment. Kindly check back some other time</p>
                )}
              </Tab.Pane>
              <Tab.Pane eventKey="two" className={applications_content}>
                <p>
                  At Ladgroup, we are always looking for innovative, highly skilled, well educated, committed, and
                  caring employees to join us. If you are interested in what we do and what we stand for, then we would
                  love to hear from you.
                </p>
                <p className={cv}>Submit CV</p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
    </Fragment>
  );
};

export default Career;
