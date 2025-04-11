import React from 'react';
import { useEffect } from 'react';
import "./work.css";
import m1 from "../assets/images/mug.png";
import m2 from "../assets/images/book.png";
import m3 from "../assets/images/shirt.jpg";
import m4 from "../assets/images/thankyou.png";
import m5 from "../assets/images/bag.png";
import BackToHome from '../components/backArrow';
import { Row } from "react-bootstrap";

const ImageGrid = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
  return (
    <>
      <BackToHome targetId="projects" />

      <div className="section-container">
        <Row>
          <div className="content-row">
            <div className="content-block">
              <h1>Merchandise Design</h1>
            </div>
            <div className="content-block">
              <p>
                Experienced in merchandise design, crafting unique and visually appealing designs for mugs, 
                notebooks, t-shirts, tote bags, and other customized products. Focused on blending creativity 
                with brand identity to create impactful and market-ready merchandise that resonates with the 
                target audience.
              </p>
            </div>
          </div>
        </Row>

        <Row>
          <div className="grid-wrapper">
            <div className="grid-item">
              <img src={m1} alt="Custom mug design" />
            </div>
            <div className="grid-item">
              <img src={m3} alt="Printed shirt design" />
            </div>
            <div className="grid-item">
              <img src={m4} alt="Thank you card design" />
            </div>
            <div className="grid-item">
              <img src={m2} alt="Notebook design" />
            </div>
            <div className="grid-item">
              <img src={m5} alt="Tote bag design" />
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default ImageGrid;
