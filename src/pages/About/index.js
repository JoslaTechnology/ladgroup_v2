import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { tabContent } from "./aboutData";

import member1 from "assets/member1.svg";
import member2 from "assets/member2.svg";
import ceo from "assets/ceo.svg";

import { grid_1x2, grid_1x2_image, grid_1x2_text, left, main, sub_heading } from "style/layout.module.css";
import {
  board_grid,
  member,
  tab_image,
  tab_group,
  vision_content,
  vertical_text,
  vision_mission
} from "./style.module.css";
import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className={main}>
        <h1>About Ladgroup</h1>
      </div>

      <section>
        <div className="container">
          <div className={`${grid_1x2} scale_effect`}>
            <div className={grid_1x2_text}>
              <h3>Pioneering in shea nut production</h3>
              <p>Brief message from the CEO</p>
            </div>
            <div id={left} className={grid_1x2_image}>
              <img src={ceo} alt="message from ceo" />
              <p>CEO message</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about_info">
        <div className="container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Col>
              <Nav variant="tabs" className={`flex-row `} justify>
                {tabContent.map((content, index) => {
                  return (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={content.eventKey} className={`mx-1 py-3 nav-content`}>
                        {content.title}
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </Col>

            <Col>
              <Tab.Content>
                {tabContent.map((content, index) => {
                  return (
                    <Tab.Pane eventKey={content.eventKey} key={index} className={tab_group}>
                      <Row className="py-3 px-3">
                        <Col className="my-auto" sm={6}>
                          <img src={content.image} className={tab_image} alt="" />
                        </Col>
                        <Col className="my-auto py-3 text-justify">
                          <p>{content.text}</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Col>
          </Tab.Container>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className={sub_heading}>Vision and Mission</h2>
          <div className={vision_content}>
            <div className={vertical_text}>
              <p>vision</p>
            </div>
            <div className={vision_mission}>
              <h3>Our Vision</h3>
              <p>
                Ladgroup aims to be a model company in the Agro allied sector exploiting opportunities to create value,
                provide direct and indirect employment opportunities to Nigerian citizens and contribute towards the
                economic wellbeing of the country.
              </p>
              <h3>Our Mission</h3>
              <p>
                To be the foremost company in Agro Commodities Marketing and Processing in Nigeria, contributing
                significantly to the economy of Nigeria through its non-oil export earnings generating capacity and
                provision of employment opportunities to Nigerian citizens. Ladgroup will be known for quality and
                integrity and will be the preferred supplier to its customers.
              </p>
            </div>
            <div className={vertical_text}>
              <p>mission</p>
            </div>
          </div>
        </div>
      </section>

      <section className="board-members" id="board">
        <div className="container">
          <h2 className={sub_heading}>Board Members</h2>
          <div className={`${board_grid} scale_effect`}>
            <div className={`${member}`}>
              <img src={member1} alt="board member" />
              <p>Prince (Dr) B. A. Onafowokan</p>
              <p>Chairman</p>
            </div>
            <div className={member}>
              <img src={member1} alt="board member" />
              <p>Mr. Adekunle O. Onafowokan</p>
              <p>Managing Director</p>
            </div>
            <div className={member}>
              <img src={member2} alt="board member" />
              <p>Mrs. Afolake A. Oladitan</p>
              <p>Legal/Admin & Company Secretary</p>
            </div>
            <div className={member}>
              <img src={member2} alt="board member" />
              <p>Mrs. Adeola O. Bali</p>
              <p>Director</p>
            </div>
            <div className={member}>
              <img src={member2} alt="board member" />
              <p>Mrs. Adepeju O. Adebajo</p>
              <p>Director</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
