import React, { useEffect } from 'react';
import "./work.css";
import ui from "../assets/images/ui1.png";
import ui2 from "../assets/images/ui2.png";
import ui3 from "../assets/images/ui3.png";
import ui4 from "../assets/images/ui4.png";
import BackToHome from '../components/backArrow';
import video1 from '../assets/videos/VcWeb HomePage.mp4';
import video2 from '../assets/videos/VcWeb AboutUs.mp4';
import video3 from '../assets/videos/VcWeb Panelist.mp4';
import video4 from '../assets/videos/VcWeb faq.mp4';

const ImageGrid = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const videos = document.querySelectorAll(".media-video");
    videos.forEach((video) => {
      video.currentTime = 0;
      video.play();
    });
  }, []);

  return (
    <>
      <BackToHome targetId="projects" />
      <div className="section-container">
        <div className="content-row">
          <div className="content-block">
            <h1>UI/UX Design & Web Development</h1>
          </div>
          <div className="content-block">
            <p>
              Experienced in UI/UX design with Figma and Webflow, 
              combined with web development expertise in JavaScript, React.js, and the MERN stack, 
              ensuring seamless and user-centric digital experiences. Proficient in crafting intuitive interfaces, responsive designs, 
              and interactive web applications with a focus on aesthetics, functionality, and user engagement.
            </p>
          </div>
        </div>
        
        <div className="grid-wrapper">
          <div className="grid-item">
            <img src={ui} alt="UI/UX design example" />
          </div>

          <div className="grid-item">
            <video className="video-content" key={video3} autoPlay loop muted>
              <source src={video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="grid-item">
            <img src={ui2} alt="Web development layout" />
          </div>

          <div className="grid-item">
            <video className="video-content" key={video1} autoPlay loop muted>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="grid-item">
            <img src={ui4} alt="Modern UI design" />
            {/* <p className="grid-caption">This is another text in place of an image</p> */}
          </div>

          <div className="grid-item">
            <video className="video-content" key={video2} autoPlay loop muted>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="grid-item">
            <video className="video-content" key={video4} autoPlay loop muted>
              <source src={video4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="grid-item">
            <img src={ui3} alt="Responsive website sample" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
