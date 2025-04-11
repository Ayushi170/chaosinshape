import React, { useEffect, useRef, useState } from "react";
import "./loading.css";

const ChaoticThread = ({ onComplete }) => {
  const pathRef = useRef(null);
  const [splitBlack, setSplitBlack] = useState(false);
  const [splitText, setSplitText] = useState(false);
  const [showSVG, setShowSVG] = useState(false);
  const [exit, setExit] = useState(false);
  const [lightBg, setLightBg] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const isDevToolsOpen = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      return widthThreshold || heightThreshold;
    };

    if (isDevToolsOpen()) {
      if (onComplete) onComplete(); // Immediately finish if DevTools are open
      return;
    }

    const blackSplitTimeout = setTimeout(() => {
      setSplitBlack(true);
    }, 1000); // Black screen splits

    const lightBgTimeout = setTimeout(() => {
      setLightBg(true);
    }, 1800); // Fade background to light

    const showContentTimeout = setTimeout(() => {
      setShowContent(true);
    }, 2000); // Show the text content

    const textSplitTimeout = setTimeout(() => {
      setSplitText(true);
    }, 2500); // Text split

    const svgTimeout = setTimeout(() => {
      setShowSVG(true);
    }, 3000); // SVG appears a bit later

    const finishTimeout = setTimeout(() => {
      setExit(true); // Start exit animation
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000); // Wait for animation to end
    }, 7600); // Adjust to match full animation

    return () => {
      clearTimeout(blackSplitTimeout);
      clearTimeout(lightBgTimeout);
      clearTimeout(showContentTimeout);
      clearTimeout(textSplitTimeout);
      clearTimeout(svgTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onComplete]);


  useEffect(() => {
    if (showSVG && pathRef.current) {
      const path = pathRef.current;
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    }
  }, [showSVG]);

  return (
    <div
      className={`chaotic-thread-wrapper ${lightBg ? "light-bg" : ""} ${
        exit ? "fade-out" : ""
      } ${showContent ? "show-thread-content" : ""}`}
    >
      {/* Black split screen */}
      <div className={`black-screen ${splitBlack ? "split-black" : ""}`}>
        <div className="black-half top" />
        <div className="black-half bottom" />
      </div>

      {/* Animated content */}
      <div className="chaotic-thread-content">
        <span className={`chaotic-thread-text ${splitText ? "split" : ""}`}>
          <span className="left-part">chaos in</span>
          {showSVG && (
            <svg
              className="chaotic-thread-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2455.15 1009.02"
            >
              <path
                ref={pathRef}
                className="chaotic-thread-path"
                d="M659.94,337c110,118,138.13,279.4,74.84,389.35C639.25,892.3,360.38,897.76,220,765.82,123.43,675,78.68,506.12,138.12,444.23c85.8-89.36,383.12,50.14,502-39.19,3.79-2.85,12.43-9.71,16.75-21.49,26.48-72.22-133.7-262.74-289.23-237.65C254.19,164.2,155.61,295.3,181.6,367.37c.62,1.7,14.25,37.79,47.39,45.82,93.56,22.69,153.26-224.12,309-248.07,106.6-16.4,238.35,74.67,283.77,200.22,3.44,9.53,50.79,146.48-21.24,244.74C684.14,768.82,324.83,732.86,239.25,559.51c-51-103.24-17-279.85,91-321.59,74.36-28.73,190.43,5.12,222.49,89,23.78,62.24-2.35,142.48-52.2,179-60.61,44.34-123.84.21-194.56,54.32-10.18,7.78-50.31,38.49-54.61,84.27C245,712.63,321.51,777.87,390.94,798.18c113.52,33.2,212.4-53.57,236.64-74.84,48.63-42.67,97.41-112.05,80.9-133.49-23.37-30.35-142.86,80.57-258.89,38.43-57.72-21-121.16-82.21-117.31-157.76,3.45-67.61,58.87-129.8,117.31-137.54,65.82-8.7,119.73,52.84,189.12,134.5C734.8,580.59,731,630.6,782.31,682.89c104.39,106.36,314.28,97.2,449,51.57,334.5-113.26,317.92-489.21,646.21-567.33,36.1-8.59,156.54-35.42,274.06,26.3,104.73,55,189,170.7,192.15,303.38,4.1,173.25-129.63,357.66-328.67,368.11-188.13,9.88-357.57-138-365.08-328.67-7.57-192.6,152.75-361.78,343.43-356.39,167.29,4.74,316.27,142.68,322.84,318.52C2322.87,675.5,2183,836.54,2001.7,841.53c-171.5,4.72-323.28-131.79-331.91-304.34-9-180.14,140.81-343,321.7-337,161.38,5.36,297.85,143.5,300.25,308.43,2.24,153.86-112.65,300.26-271.65,314.55C1850.27,838.41,1697.2,696.94,1693.28,527c-3.76-162.76,128.9-313.12,296.23-310.41,164.63,2.66,302.59,152.5,287.94,328.79"
              />
            </svg>
          )}
          <span className="right-part">shape</span>
        </span>
      </div>
    </div>
  );
};

export default ChaoticThread;
