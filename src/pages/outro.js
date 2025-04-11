import React, { useEffect, useRef } from "react";
import animateTextScroll from "../components/scrolleffect";
import "../css/outro.css";

const AnimatedText = () => {
  const pathRef = useRef();
    
  useEffect(() => {
    animateTextScroll();

    const path = document.querySelector('.drawing-path');
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.setProperty("--path-length", length);
  }, []);

  return (
    <div id="outro"> {/* ✅ Added ID here */}
      <div className="svg-draw-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 700"
          className="drawing-svg"
        >
          <path
            ref={pathRef}
            className="drawing-path"
            d="M0,343.15c377.52,3.26,520.5-20.64,573.1-47.13,3.08-1.55,34.58-17.57,79.5-26.4,36.53-7.19,92.48-18.19,136.5,13.47,9.09,6.54,32.81,23.33,37.95,49.53,15.58,79.22-136,206.59-231.53,174.3-2.26-.76-48.8-17.21-60.49-55.95-11.19-37.06,21.48-54.81,16.63-96.8-6.37-55.18-67.09-61.56-69.57-108.89-2.19-41.91,42.6-91.23,89-93.32,33.61-1.5,59,22.16,62.21,25.27,68,65.28-14.25,182.75,31.76,258.61,64.78,106.82,368.65,106.15,425-13.61,37.49-79.7-27.68-227-116.45-243.49-28.47-5.3-69.6.95-89.23,28.74-50.13,71,38.3,284.85,180,299.44,74.54,7.68,166.71-39.5,175.44-98.3,13.19-88.84-171.62-153.43-151.24-232.9,9.42-36.73,60.29-67.39,89.23-56,21,8.28,37.47,41.41,30.25,68.06-19.16,70.64-191.46,45-217.78,124-8.53,25.61-.4,58.2,18.15,75.62,38.36,36,102-10.93,226.85-19.66,78.87-5.52,210.85,2.21,227.13,52.93,8.67,27-15.52,65.78-44.14,74.1-37.63,10.95-82.58-30.93-99.81-69.56-35.73-80.1,22.94-201.59,93.77-211.73,31.33-4.49,57.32,13.91,59,15.12,68.88,50.25,18.13,175.45,69.57,205.68,27.31,16.05,60.86-8,118.31-31.44S1802,355,1920,355.4"
          />
        </svg>
      </div>

      <div className="wrapper">
        <section>
          <p className="reveal-type" data-bg-color="#b7e797" data-fg-color="#558257">
            This is how I turn scattered thoughts into purposeful Creations
          </p>
          <p className="reveal-type" data-bg-color="#b7e797" data-fg-color="#558257">
            What’s the chaos that defines you?
          </p>
        </section>
      </div>
      
    </div>
  );
};

export default AnimatedText;
