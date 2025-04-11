import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/home.css";

// import Projects from "../pages/projects";
// import Contact from "../pages/contact";
// import Expertise from "../pages/expertise";
// import Outro from "../pages/outro";
// import Intro from "../pages/intro";

import { initScrollEffect } from "../components/scrolleffect";
import chaos1 from "../assets/images/new-img-02.svg";

const Home = () => {
  useEffect(() => {
    initScrollEffect(); // your GSAP scroll animations
  }, []);

  return (
    <div id="home">
      <Container fluid>
        <Row className="container">
          <Col className="bg-image">
            <img src={chaos1} alt="Snow" />
          </Col>
          <Row className="overlay-content">
            <Col className="top-left">Do you see Chaos?</Col>
            <Col className="bottom-right">I see potential to weave a Story.</Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
