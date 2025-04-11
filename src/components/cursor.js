import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/cursor.css";

const CustomCursor = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Detect mobile/touch device
    const isMobileDevice = () =>
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    if (isMobileDevice()) {
      setCursorVisible(false);
      return; // Exit early if mobile
    }

    const cursor = document.querySelector(".cursor");
    const outline = document.querySelector(".outline");

    if (!cursor || !outline) return;

    setCursorVisible(true);

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      outline.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    const handleMouseOver = (text) => {
      setCursorText(text);
      outline.classList.add("outline-hover");
    };

    const handleMouseLeave = () => {
      setCursorText("");
      outline.classList.remove("outline-hover");
    };

    const interactiveElements = document.querySelectorAll(".hover-effect, .project-image-wrapper, h2");
    const h4Elements = document.querySelectorAll("h4");
    const linkElements = document.querySelectorAll(".name-link");

    document.addEventListener("mousemove", moveCursor);

    interactiveElements.forEach((item) => {
      item.addEventListener("mouseover", () => handleMouseOver("View"));
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    h4Elements.forEach((item) => {
      item.addEventListener("mouseover", () => handleMouseOver("Hey!"));
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    linkElements.forEach((item) => {
      item.addEventListener("mouseover", () => handleMouseOver("Tap"));
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);

      interactiveElements.forEach((item) => {
        item.removeEventListener("mouseover", () => handleMouseOver("View"));
        item.removeEventListener("mouseleave", handleMouseLeave);
      });

      h4Elements.forEach((item) => {
        item.removeEventListener("mouseover", () => handleMouseOver("Hey!"));
        item.removeEventListener("mouseleave", handleMouseLeave);
      });

      linkElements.forEach((item) => {
        item.removeEventListener("mouseover", () => handleMouseOver("Tap"));
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [location.pathname]);

  return (
    <>
      {cursorVisible && (
        <>
          <div className={`cursor ${cursorText ? "cursor-hover" : ""}`}>
            {cursorText && <span className="cursor-text">{cursorText}</span>}
          </div>
          <div className="outline"></div>
        </>
      )}
    </>
  );
};

export default CustomCursor;
