import React, { useState } from "react";
import "../css/expertise.css";

const skills = [
  {
    name: "UI/UX Product Strategy & Branding.",
    year: "+3 yrs Experience",
    description:
      "I specialize in UI/UX product strategy and branding, defining user journeys, creating design systems, and crafting cohesive brand identities that enhance user experience and align with business goals.",
    tools: ["FIGMA", "FRAMER", "ADOBE XD", "ADOBE ILLUSTRATOR", "CANVA", "NOTION"]
  },
  {
    name: "Web Design & Development.",
    year: "+3 yrs Experience",
    description:
      "With a strong background in web design and development, I create responsive, high-performance websites and applications using modern frameworks, ensuring seamless user experiences and scalable architectures.",
    tools: ["REACT JS", "HTML", "CSS", "JAVASCRIPT", "WEBFLOW", "FRAMER"]
  },
  {
    name: "Graphic Design & Visual Identity.",
    year: "+4 yrs Experience",
    description:
      "Bringing extensive experience in graphic design and visual identity, I craft compelling brand identities, logos, and marketing materials that communicate a brand’s essence with clarity and creativity.",
    tools: ["ADOBE ILLUSTRATOR", "ADOBE PHOTOSHOP", "CANVA", "FIGMA", "ADOBE COLOR", "GOOGLE FONTS"]
  },
  {
    name: "Software Development.",
    year: "+1 yrs Experience",
    description:
      "With experience in software development, I create functional and user-friendly applications, focusing on clean code, performance, and seamless integration of frontend and backend technologies.",
    tools: ["JAVASCRIPT", "REACT JS", "NODE JS", "HTML5", "TAILWIND CSS", "BOOTSTRAP", "MONGODB", "VS CODE", "AWS", "NOTION", "DOCKER"]
  }
];

const Expertise = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  // const scrollToSection = (id) => {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     el.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="expertise-section" id="expertise">
      <div className="container mt-4">
        <h3 className="text-center">EXPERTISE</h3>
        <ul className="list-group skills-list">
          {skills.map((skill, index) => (
            <li
              key={index}
              role="button"
              className={`list-group-item skill-item ${hoveredSkill === index ? "expanded" : ""}`}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-title">{skill.name}</div>

              <div className="skill-content">
                <div className="skill-year">{skill.year}</div>
                <div className="skill-description">{skill.description}</div>
                <div className="expertise-tools">
                  {skill.tools.map((tool, i) => (
                    <span key={i} className="tool-chip">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="scroll-down-wrapper">
        <button onClick={() => scrollToSection("outro")} className="scroll-down-btn">
          Scroll to Expertise ↓
        </button>
      </div> */}
    </div>
  );
};

export default Expertise;
