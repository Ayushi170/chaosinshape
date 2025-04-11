import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./test.css";

const RectangleBorderShift = () => {
  const rectRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const currentRef = useRef(text1Ref);

  useEffect(() => {
    const rect = rectRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;
    const container = text1.parentNode;

    const moveTo = (target) => {
      const bounds = target.getBoundingClientRect();
      const containerBounds = container.getBoundingClientRect();

      gsap.to(rect, {
        x: bounds.left - containerBounds.left,
        y: bounds.top - containerBounds.top,
        width: bounds.width,
        height: bounds.height,
        duration: 0.5,
        ease: "power2.inOut",
      });
    };

    moveTo(text1); // initial move

    const interval = setInterval(() => {
      const nextTarget = currentRef.current === text1 ? text2 : text1;
      currentRef.current = nextTarget;
      moveTo(nextTarget);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="text" ref={text1Ref}>TEXT 1</div>
      <div className="text" ref={text2Ref}>TEXT 2</div>
      <div ref={rectRef} className="border-highlight"></div>
    </div>
  );
};

export default RectangleBorderShift;
