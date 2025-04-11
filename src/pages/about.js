import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/about.css";
import about from "../assets/images/me.jpg";
import Jellyfish from "../assets/images/greenjelly-07.svg";
import art from "../assets/images/paint.jpg";
import craft from "../assets/images/craft.jpg";
import journal from "../assets/images/sketch.jpg";
import BackToHome from "../components/backArrow.js";

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const timelineData = [
    {
      date: "2018 - 2019",
      company: "SECONDARY EDUCATION",
      role: "CBSE",
      description:
        "Completed secondary education from CBSE board with 90.40%.",
    },
    {
      date: "2020 - 2021",
      company: "SENIOR SECONDARY EDUCATION",
      role: "PCM",
      description:
        "Excelled in senior secondary education from RTMNU, securing 98%.",
    },
    {
      date: "2021 - 2025",
      company: "BACHELOR IN TECHNOLOGY (B.Tech)",
      role: "Computer Science",
      description:
        "Pursuing a Bachelor's degree from Vishwakarma Institute of Technology, Pune with an 8.5 CGPA.",
    },
  ];
  

  return (
    <div id="about">
      <Container className="about-section" style={{ background: "#C5ECAC" }}>
        <BackToHome targetId="intro" />

        <Row className="row-intro">
          <Col className="col-introImg">
            <div className="intro-img-wrapper">
              <img src={about} alt="Ayushi" />
              <div className="intro-overlay-text">Ayushi Kowe</div>
            </div>
          </Col>
          <Col className="col-intro">
            <h3>ABOUT ME</h3>
            <h1>Hi there! I'm a Creative Technologist</h1>
            <a
              href={`${process.env.PUBLIC_URL}/AyushiKoweCV.pdf`}
              download="AyushiKoweCV.pdf"
              className="download-btn"
            >
              Get Resume
            </a>
          </Col>
        </Row>

        <Row className="row-aboutMe">
          <Col className="col-aboutMe">
            <p>
              Hello, I’m Ayushi, I don’t just design— I craft experiences that
              merge logic with aesthetics, turning scattered ideas into
              structured, meaningful visuals. With expertise in UI/UX Product
              Strategy, Full Stack Development, and Graphic Design, I blend
              artistry with tech, shaping brands, interfaces, and stories that
              flow seamlessly. My journey spans fintech security, AI-driven
              solutions, and intelligent automation, where technology meets
              design to create impactful experiences. <br />
              But at heart, I’m an artist who believes great design is like a
              jellyfish—fluid, adaptable, and captivating.
            </p>
          </Col>
          <Col className="col-jellyfish">
            <img src={Jellyfish} alt="chaos" />
          </Col>
        </Row>

        {/* New Timeline Section */}
        <section className="custom-timeline">
          <h1 className="education-title">EDUCATION</h1>
  {timelineData.map((entry, index) => (
    <div className="timeline-entry" key={index}>
      <div className="timeline-date">{entry.date}</div>
      <div className={`timeline-line ${index === timelineData.length - 1 ? "no-bar" : ""}`}>
        <div className="timeline-dot" />
        {index !== timelineData.length - 1 && <div className="timeline-bar" />}
      </div>
      <div className="timeline-content">
        <h2>{entry.company}</h2>
        <h4>{entry.role}</h4>
        <p>{entry.description}</p>
      </div>
    </div>
  ))}
</section>


        <Row className="row-interest">
          <Col md={4} className="about-interest">
            <h1>My Interests</h1>
            <p>
              Beyond tech creativity, I enjoy exploring handmade
              aesthetics—sketching, DIY creations, and tactile design, bringing
              ideas to life beyond the digital space.
            </p>
            <p>
              Follow my creative journey on{" "}
              <a
                href="https://www.instagram.com/chaosinshape"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                ChaosinShape
              </a>
              .
            </p>
          </Col>
          <Col md={8} className="interest-img">
            <Row>
              <Col md={4} className="art-img">
                <img src={art} alt="art" />
              </Col>
              <Col md={4} className="art-img">
                <img src={craft} alt="craft" />
              </Col>
              <Col md={4} className="art-img">
                <img src={journal} alt="sketch" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
