import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/intro.css";
import { MoveDownLeft } from "lucide-react";
import overlayImage from "../assets/images/greenjelly-07.svg";
import { Link } from "react-router-dom";


function Intro() {
  return (
    <Container id="intro" className="intro-section">
      <Row className="name-container">
        <Col className="name-col">
          <h3>
            <MoveDownLeft size={27} style={{ transform: "translateY(20px)" }} /> about me
          </h3>
          <h1>
                Hi I am <Link to="/about" className="name-link">Ayushi Kowe</Link>,<br />a Creative Technologist
            </h1>
        </Col>
        <Col className="name-col">
          <p>I untangle chaos into clear, beautiful stories.</p>
        </Col>
      </Row>

      

      <img src={overlayImage} alt="Overlay" className="overlay-img1" />
      <img src={overlayImage} alt="Overlay" className="overlay-img2" />
    </Container>
  );
}

export default Intro;
