document.addEventListener("DOMContentLoaded", () => {
  const containerElm = document.querySelector(".container");

  const adjustContainerElm = document.querySelector(".adjustment-container");
  const adjustControllerElm = document.querySelector(".adjustment-controller");

  let isAdjusting = false;

  const createCards = () => {
    Array.from({ length: 100 }).map((item, index) => {
      const newCardElement = document.createElement("article");
      newCardElement.textContent = index + 1;
      newCardElement.className = "card";
      containerElm.append(newCardElement);
    });
  };

  const updateCardsDimension = (e) => {
    // TODO:
  };

  const updateControllerUI = (e) => {
    let newWidth = e.clientX - adjustControllerElm.getBoundingClientRect().left;

    if (newWidth < 0) newWidth = 0;
    else if (newWidth > adjustContainerElm.offsetWidth)
      newWidth = adjustContainerElm.offsetWidth;

    adjustControllerElm.style.width = `${newWidth}px`;
  };

  const updateFontSize = (e) => {
    isAdjusting = false;
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

  window.addEventListener("mousemove", (e) => {
    if (isAdjusting) updateControllerUI(e);
  });

  window.addEventListener("mouseup", () => {
    if (isAdjusting) updateFontSize();
  });

  adjustContainerElm.addEventListener("mousedown", (e) => {
    isAdjusting = true;
    updateControllerUI(e);
  });

  createCards();
});
