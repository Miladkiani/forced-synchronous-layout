document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  const createCards = () => {
    Array.from({ length: 100 }).map((item, index) => {
      const newCardElement = document.createElement("article");
      newCardElement.textContent = index + 1;
      newCardElement.className = "card";
      container.append(newCardElement);
    });
  };

  const updateCardsDimension = (e) => {
    // TODO:
  };

  const debounce = (fn, time = 1000) => {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, time);
    };
  };

  window.addEventListener("resize", debounce(updateCardsDimension, 2000));

  createCards();
});
