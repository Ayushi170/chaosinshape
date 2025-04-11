import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/cursor.css";

const CustomCursor = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const location = useLocation(); // Detects page changes
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) setCursorVisible(false);
  }, []);
  
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const outline = document.querySelector(".outline");

    if (!cursor || !outline) return; // Ensure elements exist before applying changes

    // Show cursor again when returning to the page
    setCursorVisible(true);

    // Move cursor with mouse
    const moveCursor = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      outline.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    // Functions to handle hover effects
    const handleMouseOver = (text) => {
      setCursorText(text);
      outline.classList.add("outline-hover");
    };

    const handleMouseLeave = () => {
      setCursorText("");
      outline.classList.remove("outline-hover");
    };

    // Select elements requiring hover effects
    const interactiveElements = document.querySelectorAll(".hover-effect, .project-image-wrapper, h2");
    const h4Elements = document.querySelectorAll("h4");
    const linkElements = document.querySelectorAll(".name-link");

    // Attach event listeners
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

    // Ensure cursor resets on navigation
    const resetCursorOnPageChange = () => {
      setCursorText("");
      setCursorVisible(true);
      outline.classList.remove("outline-hover");
    };
    resetCursorOnPageChange();

    // Cleanup function
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
  }, [location.pathname]); // Runs every time the URL changes

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
