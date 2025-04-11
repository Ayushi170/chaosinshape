import { useState, useEffect } from "react";
import './test.css';

export default function ScrollingPage() {
  const [overlayText, setOverlayText] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Triggers when section is in the middle of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.className) {
            case "wecanhelp":
              setOverlayText("We can help");
              break;
            case "internet-statement":
              setOverlayText("The Internet");
              break;
            case "projects":
              setOverlayText("Work");
              break;
            case "know-more-about":
              setOverlayText("Contact");
              break;
            default:
              setOverlayText("");
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <main className="relative bg-pink-200">
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-600 text-8xl italic opacity-80">
        {overlayText}
      </div>
      <section className="landingpage border-b border-red-600 h-[400px]">Home</section>
      <section className="wecanhelp border-b border-red-600 h-[400px]">We can help you</section>
      <section className="internet-statement border-b border-red-600 h-[400px]">The Internet???</section>
      <section className="projects border-b border-red-600 h-[400px]">Work</section>
      <section className="know-more-about border-b border-red-600 h-[400px]">Contact us</section>
      <footer className="h-[800px]">Footer</footer>
    </main>
  );
}
