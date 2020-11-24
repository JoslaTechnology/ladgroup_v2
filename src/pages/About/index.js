import React, { Fragment } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { tabContent, memberList } from "./aboutData";

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

const About = () => {
  return (
    <Fragment>
      <div className={main}>
        <h1>About Ladgroup</h1>
      </div>

      <section>
        <div className="container">
          <div className={`${grid_1x2} scale_effect`}>
            <div className={`${grid_1x2_text}`}>
              <h3>Leading for others to follow</h3>
              <p>'Great is Your Faithfulness O Lord'</p>
              <p>
                I founded Ladgroup in 1971, primarily out of the desire to provide for the future needs of my family and
                contribute to the development of our great nation, Nigeria. <br /> <br /> Ladgroup started out as a
                trading company focusing on the export of commodities such as ginger, gum, cocoa, sheanuts, etc. The
                Company grew to become Nigeria’s largest exporter of cocoa, importer of frozen fish from Argentina, and
                the first indigenous company to import rice from Thailand. <br /> <br />
                Ladgroup’s core values remain the overriding principles of hard work, courage and integrity, values
                which have supported the growth of the company till today. <br /> <br />
                As we enter the next phase of growth of the company, strong visionary leadership, teamwork, and
                tenacity, is needed to excel. I believe all the necessary ingredients to build on my legacy exist and
                with God on our side, great things are possible.
              </p>
            </div>
            <div id={left} className={grid_1x2_image}>
              <img src={ceo} alt="message from ceo" />
              <p>Founder's message</p>
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
            {memberList.map((boardMember, i) => {
              return (
                <div className={`${member}`} key={i}>
                  {boardMember.caption ? (
                    <figure>
                      <img src={boardMember.image} alt="board member" />
                      <figcaption>{boardMember.caption}</figcaption>
                    </figure>
                  ) : (
                    <img src={boardMember.image} alt="board member" />
                  )}

                  <p>{boardMember.name}</p>
                  <p>{boardMember.position}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
