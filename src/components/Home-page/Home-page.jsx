import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Text from "./Text";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../Home-page/Home-page.css";

function HomePage() {
  return (
    <div className="homePage">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="hello-text">
              Hello<span className="emoji">👋</span>
            </h2>
            <h2 className="name-text"> I'm Kenan Novalić</h2>
            <span></span>
            <Text />
            <div className="icon-btns">
              <button
                onClick={() => {
                  window.open("https://github.com/kensi1995");
                }}
                className="socialmediabtn"
              >
                <AiFillGithub className="icon" />
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/kenan-novalic-3bba5a240/"
                  );
                }}
                className="socialmediabtn"
              >
                <FaLinkedinIn className="icon" />
              </button>
            </div>
          </Col>
          <Col md={5}>
            <div className="homepageImageDev"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default HomePage;
