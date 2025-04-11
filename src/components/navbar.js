import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import "./navbar.css";

const sections = [
  { id: "home", label: "HOME" },
  { id: "intro", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "expertise", label: "EXPERTISE" },
  { id: "contact", label: "CONTACT" },
  
];

const BottomNavbar = () => {
  const [progress, setProgress] = useState({});
  const [transitioning, setTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const newProgress = {};
      const scrollMid = window.scrollY + window.innerHeight / 2;
      let activeSection = null;

      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const elTop = el.offsetTop;
        const elBottom = elTop + el.offsetHeight;

        if (scrollMid >= elTop && scrollMid < elBottom) {
          activeSection = id;
          break;
        }
      }

      setTransitioning(activeSection === null);

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;

        const elTop = el.offsetTop;
        const elHeight = el.offsetHeight;

        if (id === activeSection) {
          if (id === "contact") {
            const rect = el.getBoundingClientRect();
            const visibleHeight =
              Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
            const visibility = visibleHeight / elHeight;
            newProgress[id] = Math.min(Math.max(visibility, 0), 1);
          } else {
            const sectionEnd = elTop + elHeight - window.innerHeight;
            const progress = (window.scrollY - elTop) / (sectionEnd - elTop);
            newProgress[id] = Math.min(Math.max(progress, 0), 1);
          }
        } else {
          newProgress[id] = 0;
        }
      });

      setProgress(newProgress);

      // Animate slider to the active nav-box
      if (activeSection && sliderRef.current && containerRef.current) {
        const activeBtn = containerRef.current.querySelector(`[data-id="${activeSection}"]`);
        if (activeBtn) {
          const btnRect = activeBtn.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
        
          const x = btnRect.left - containerRect.left;
          const y = btnRect.top - containerRect.top;
        
          const width = btnRect.width;
          const height = btnRect.height;
        
          gsap.to(sliderRef.current, {
            x,
            y,
            width,
            height,
            duration: 0.5,
            ease: "power3.out",
          });
        }
        
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bottom-navbar ${transitioning ? "transitioning" : ""}`}
      ref={containerRef}
    >
      <div ref={sliderRef} className="slider-overlay" />
      {sections.map(({ id, label }) => {
        const isActive = (progress[id] || 0) > 0;
        return (
          <Link
            key={id}
            to={id}
            smooth
            duration={500}
            className="nav-btn"
            data-id={id}
          >
            <div className={`nav-box ${isActive ? "active" : ""}`}>
              <div className="fill-box">
                <div
                  className="fill"
                  style={{
                    width: `${(progress[id] || 0) * 100}%`,
                  }}
                />
                <span className="label">{label}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavbar;
