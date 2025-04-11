import React from 'react';
import { useEffect } from 'react';
import "./work.css";
import flex1 from '../assets/images/flex1.png';
import flex2 from '../assets/images/flex2.png';
import flex3 from '../assets/images/flex3.jpg';
import flex4 from '../assets/images/flex4.jpg';
import flex5 from '../assets/images/flex5.jpg';
import BackToHome from '../components/backArrow';

const ImageGrid = () => {
  useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, []);
  return (
    <>
      <BackToHome targetId="projects"/>
      <div className="section-container">
        <div className="content-row">
          <div className="content-block">
            <h1>Flex & Banner Design</h1>
          </div>
          <div className="content-block">
            <p>
              Specialized in flex and banner design, combining visual aesthetics with impactful 
              messaging to create eye-catching promotional materials. Skilled in designing for 
              various formats, ensuring high-quality, print-ready outputs that align with brand 
              identity and marketing goals.
            </p>
          </div>
        </div>
        
        <div className="grid-wrapper">
          <div className="grid-item">
            <img src={flex1} alt="Flex design 1" />
          </div>
          <div className="grid-item">
            <img src={flex2} alt="Flex design 2" />
          </div>
          <div className="grid-item">
            <img src={flex3} alt="Flex design 3" />
          </div>
          <div className="grid-item">
            <img src={flex4} alt="Flex design 4" />
            {/* <p className="grid-text">This is another text in place of an image</p> */}
          </div>
          <div className="grid-item">
            <img src={flex5} alt="Flex design 5" />
            {/* <p className="grid-text">This is another text in place of an image</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
