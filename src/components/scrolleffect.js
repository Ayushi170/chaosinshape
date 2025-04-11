import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const animateTextScroll = () => {
  // Lenis instance outside to persist
  const lenis = new Lenis();
  lenis.on("scroll", () => ScrollTrigger.update());

  // Setup RAF for Lenis
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const setupScrollAnimations = () => {
    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((element) => {
      const bg = element.dataset.bgColor || "#558257";
      const fg = element.dataset.fgColor || "#b7e797";

      // Prevent multiple splits
      if (!element.classList.contains("split-done")) {
        new SplitType(element, { types: "words, chars" }); // Split into words and chars
        element.classList.add("split-done");
      }

      const words = element.querySelectorAll(".word");

      gsap.fromTo(
        words,
        { color: bg },
        {
          color: fg,
          duration: 0.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            toggleActions: "play play reverse reverse",
            markers: false,
          },
        }
      );
    });

    ScrollTrigger.refresh();
  };

  // 🔐 Final DOM rendering check before animation
  window.requestAnimationFrame(() => {
    setTimeout(() => {
      setupScrollAnimations();
    }, 100); // Slight delay to ensure DOM + styles are ready
  });
};

export default animateTextScroll;

// ✅ Visibility logic (unchanged)
export function checkForVisibility() {
  const headers = document.querySelectorAll(".header");
  headers.forEach((header) => {
    if (isElementInViewport(header)) {
      header.classList.add("headerVisible");
    } else {
      header.classList.remove("headerVisible");
    }
  });

  const projectHeaders = document.querySelectorAll(".project-header");
  projectHeaders.forEach((header) => {
    if (isElementInViewport(header)) {
      header.classList.add("projectHeaderVisible");
    } else {
      header.classList.remove("projectHeaderVisible");
    }
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ✅ Visibility event listeners (unchanged)
export function initScrollEffect() {
  window.addEventListener("DOMContentLoaded", checkForVisibility);
  window.addEventListener("load", checkForVisibility);
  window.addEventListener("scroll", checkForVisibility);
}
