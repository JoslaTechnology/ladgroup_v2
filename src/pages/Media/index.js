import React, { Fragment } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { tabsTitle, tabContent } from "./mediaData";

import Leading from "components/leading";

import media1 from "assets/media1.svg";

import {
  main,
  product_grid1,
  left,
  product_image,
  tab_content,
  content_group,
} from "./style.module.css";

const Media = () => {
  return (
    <Fragment>
      <div className={main}>
        <h1>News and Media</h1>
      </div>

      <section>
        <div className="container">
          <div className={`${product_grid1} scale_effect`}>
            <p>
              Stay updated, find information on selected new product releases as well as news about what is happening in
              the Ladgroup world.
            </p>
            <div id={left} className={`${product_image}`}>
              <img src={media1} alt="media" />
              <p>Stay updated</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about_info">
        <div className={`container`}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="news">
            <Col>
              <Nav variant="tabs" className={`flex-row `} justify>
                {tabsTitle.map((content, index) => {
                  return (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={content.eventKey} className={`mx-1 py-3 ${tab_content}`}>
                        {content.title}
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </Col>

            <Col>
              <Tab.Content>
                <Tab.Pane eventKey={tabContent[0].eventKey}>
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
                  <Row className="py-3 px-1">
                    <Col className="my-auto" sm={6}>
                      <div className={content_group}>
                        <img src={tabContent[2].image} alt="" />
                        <p>{tabContent[2].source}</p>
                        <h3>{tabContent[2].headline}</h3>
                      </div>
                      <p>{tabContent[2].text}</p>
                    </Col>
                    <Col className="my-auto" sm={6}>
                      <div className={content_group}>
                        <img src={tabContent[3].image} alt="" />
                        <p>{tabContent[3].source}</p>
                        <h3>{tabContent[3].headline}</h3>
                      </div>
                      <p>{tabContent[3].text}</p>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Tab.Container>
        </div>
      </section>
      <Leading />
    </Fragment>
  );
};

export default Media;
