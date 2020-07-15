import React, { Fragment } from "react";
import experience from "assets/experience.svg";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { grid_1x2, grid_1x2_image, left, main } from "style/layout.module.css";
import { tab_content, general_application } from "./style.module.css";

const Career = () => {
  return (
    <Fragment>
      <div className={main}>
        <h1>Career</h1>
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
              {/* <Tab.Pane eventKey={tabContent[0].eventKey}>
                <Row className="py-3 px-1">
                  <Col className="my-auto" sm={6}>
                    <div className={content_group}>
                      <img src={tabContent[0].image} alt="" />
                      <p>{tabContent[0].source}</p>
                      <h3>{tabContent[0].headline}</h3>
                    </div>
                    <p>{tabContent[0].text}</p>
                  </Col>
                  <Col className="my-auto" sm={6}>
                    <div className={content_group}>
                      <img src={tabContent[1].image} alt="" />
                      <p>{tabContent[1].source}</p>
                      <h3>{tabContent[1].headline}</h3>
                    </div>
                    <p>{tabContent[1].text}</p>
                  </Col>
                </Row>
              </Tab.Pane> */}
              <Tab.Pane eventKey="two" className={general_application}>
                <p>
                  At Ladgroup, we are always looking for innovative, highly skilled, well educated, committed, and
                  caring employees to join us. If you are interested in what we do and what we stand for, then we would
                  love to hear from you.
                </p>
                <p>Submit CV</p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
    </Fragment>
  );
};

export default Career;
