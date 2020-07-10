import React, { Fragment } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import tabContent from "./aboutData";

import { main, about, board_grid, member, ceo_image, ceo_grid1, ceo_text, left, tab_content } from "./style.module.css";

import member1 from "assets/member1.svg";
import member2 from "assets/member2.svg";
import ceo from "assets/ceo.svg";

const About = () => {
  return (
    <div className={about}>
      <div className={main}>
        <h1>About Ladgroup</h1>
      </div>

      <section>
        <div className="container">
          <div className={`${ceo_grid1} scale_effect`}>
            <div className={ceo_text}>
              <h3>Leading for others to follow</h3>
              <p>Brief message from the CEO</p>
            </div>
            <div id={left} className={ceo_image}>
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
              <Nav variant="tabs" className={`flex-row ${tab_content} `} justify>
                {tabContent.map((content, index) => {
                  return (
                    <Nav.Item>
                      <Nav.Link eventKey={content.eventKey} className="mx-1 py-3">
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
                    <Tab.Pane eventKey={content.eventKey} key={index}>
                      <Row className="py-3 px-3">
                        <Col className="my-auto" sm={6}>
                          <img src={content.image} alt="" />
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

      <section className="board-members">
        <div className="container">
          <h2>Board Members</h2>
          <div className={board_grid}>
            <div className={member}>
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
    </div>
  );
};

export default About;
