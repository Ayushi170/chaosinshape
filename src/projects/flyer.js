import React from 'react';
import { useEffect } from 'react';
import "./work.css";
import f1 from '../assets/images/f1.png';
import f2 from '../assets/images/f2.png';
import f3 from '../assets/images/f3.png';
import f4 from '../assets/images/f4.png';
import BackToHome from '../components/backArrow';

const ImageGrid = () => {
  useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, []);
  return (
    <>
      <BackToHome targetId="projects" />
      <div className="section-container">
        <div className="content-row">
          <div className="content-block">
            <h1>Flyer & Printables</h1>
          </div>
          <div className="content-block">
            <p>
              Well-versed in flyer and printable design, creating visually compelling layouts that 
              effectively communicate messages. Skilled in designing marketing materials, brochures, 
              and promotional prints with a balance of creativity, readability, and brand consistency.
            </p>
          </div>
        </div>

        <div className="grid-wrapper">
          <div className="grid-item">
            <img src={f1} alt="Flyer Design 1" />
          </div>
          <div className="grid-item">
            <img src={f2} alt="Flyer Design 2" />
          </div>
          <div className="grid-item">
            <img src={f3} alt="Flyer Design 3" />
          </div>
          <div className="grid-item">
            <img src={f4} alt="Flyer Design 4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
