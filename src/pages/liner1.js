import { useEffect } from "react";
import "../css/liner.css";

const ScrollText = () => {
  useEffect(() => {
    const letterCarousel = (parentClass, childClass) => {
      const element = document.querySelector(`${parentClass} ${childClass}`);
      if (!element) return;

      const handleScroll = () => {
        const scrollTop = window.scrollY + window.innerHeight;
        const sectionTop = document.querySelector(parentClass).offsetTop;

        if (sectionTop <= scrollTop) {
          const distance = window.scrollY - sectionTop + window.innerHeight;
          const scrollAmount = distance - 150;
          const scrollSlow = scrollAmount + (scrollAmount / 70) / 100;
          const imgScroll = (scrollSlow * 30) / 100;
          element.style.transform = `translateX(${imgScroll}px)`;
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };

    letterCarousel(".Frist", ".big-title");
    letterCarousel(".Frists", ".big-title");
    letterCarousel(".Fristss", ".big-title");
    letterCarousel(".Fristsss", ".big-title");
    letterCarousel(".Fristssss", ".big-title");
  }, []);

  return (
    <div style={{ backgroundColor: "#C7E1AC" }}>
      <div className="spancediv"></div>
      <section className="Frist">
        <h1 className="big-title">This is how I turn scattered </h1>
      </section>

      <div className="spancediv spancediv4"></div>
      <section className="Frists">
        <h1 className="big-title">thoughts into purposeful </h1>
      </section>

      <div className="spancediv spancediv3"></div>
      <section className="Fristss">
        <h1 className="big-title">Creations</h1>
      </section>

      <div className="spancediv spancediv2"></div>
      <section className="Fristsss">
        <h1 className="big-title">What’s the chaos that </h1>
      </section>

      <div className="spancediv spancediv4"></div>
      <section className="Fristssss">
        <h1 className="big-title">defines you?</h1>
      </section>
    </div>
  );
};

export default ScrollText;
