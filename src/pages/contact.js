// Contact.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/contact.css";
import Jellyfish from "../assets/images/greenjelly-07.svg";
import { ArrowUpRight } from "lucide-react";

function Contact() {
    return (
        <Container fluid className="contact-container" id="contact">
            <Row className="contact-content">
                <Col xs={12}>
                    <h1 className="contact-heading">
                        Let’s find your <br />
                        <span className="italic">clarity</span> together
                    </h1>

                    <div className="contact-info">
                        <h4>
                        <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ayushikowe03@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                        >
                        ayushikowe03@gmail.com
                        </a>

                        </h4>

                        <h4>
                            <a
                                href="https://www.linkedin.com/in/ayushi-kowe-91b181231/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="linkedin-link"
                            >
                                LinkedIn <ArrowUpRight size={25} />
                            </a>
                        </h4>

                        {/* Uncomment if phone support is added later */}
                        {/* <p>
                            <a href="tel:+917821907735" className="contact-link">
                                +91 7821907735
                            </a>
                        </p> */}
                    </div>
                </Col>
            </Row>

            <img src={Jellyfish} alt="Jellyfish overlay" className="jellyfish-overlay" />
        </Container>
    );
}

export default Contact;
