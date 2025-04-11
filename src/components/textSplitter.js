// components/textSplitter.js

export const splitTextForAnimation = () => {
    const splitChars = (el) => {
      const text = el.innerText;
      el.innerHTML = text
        .split("")
        .map((char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");
    };
  
    const splitWords = (el) => {
      const text = el.innerText;
      el.innerHTML = text
        .split(" ")
        .map((word) => `<span class="word-wrapper"><span class="word">${word}</span></span>`)
        .join(" ");
    };
  
    const splitWordsAndChars = (el) => {
      const text = el.innerText;
      el.innerHTML = text
        .split(" ")
        .map(
          (word) =>
            `<span class="word-wrapper"><span class="word">${word
              .split("")
              .map((char) => `<span class="char">${char}</span>`)
              .join("")}</span></span>`
        )
        .join(" ");
    };
  
    document.querySelectorAll(".style-1 h1, .style-6 h1").forEach(splitChars);
    document.querySelectorAll(".style-2 h1, .style-4 h1").forEach(splitWords);
    document.querySelectorAll(".style-3 h1").forEach(splitWordsAndChars);
  };
  