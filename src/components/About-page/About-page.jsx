import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About-page.css";
function AboutPage() {
  return (
    <div className="aboutPage">
      <Container>
        <Row className="textBackground">
          <Col md={7}>
            <h3 className="aboutMeText">
              About <span>Me</span>
            </h3>
            <p className="aboutMeDetails">
              Hello, and welcome to my portfolio page. My name is Kenan Novalić,
              and I am a passionate web developer from Bosnia and Herzegovina.
              My journey in the world of web development began with curiosity
              and a desire to learn. I'm continuously pushing myself to learn
              and master new tools, frameworks, and techniques. I love
              collaborating with other developers to bring ideas to life,
              because effective communication and teamwork are fundamental to
              achieving success in any project.Thank you for visiting my
              portfolio page. Feel free to explore my projects and reach out if
              you have any questions or exciting opportunities.
            </p>
            <ul className="skillsList">
              <Row>
                <h3 className="text-align">Skills</h3>
                <Col md={7} className="text-align">
                  <li>HTML/CSS/SCSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Angular</li>
                </Col>
                <Col md={5} className="text-align">
                  <li>MySql</li>
                  <li>Node.js</li>
                  <li>Flutter</li>
                  <li>Bootstrap</li>
                  <li>Git/Github</li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webImage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default AboutPage;
