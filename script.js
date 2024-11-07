document.addEventListener("DOMContentLoaded", () => {
  const layoutContainerElm = document.querySelector(".layout-container");
  const sliderContainerElm = document.querySelector(".slider-container");
  const sliderElm = document.querySelector(".slider-controller");

  const cardElements = [];

  let isAdjusting = false;

  const createCards = () => {
    Array.from({ length: 100 }).map((item, index) => {
      const newCardElement = document.createElement("article");
      newCardElement.textContent = "Lorem, ipsum dolor.";
      newCardElement.className = "card";
      layoutContainerElm.append(newCardElement);
      cardElements.push(newCardElement);
    });
  };

  const getCurrentFontSize = () => {
    switch (true) {
      case sliderElm.offsetWidth > 125:
        return "2.5rem";
      case sliderElm.offsetWidth > 100:
        return "2.3rem";
      case sliderElm.offsetWidth > 75:
        return "1.8rem";
      case sliderElm.offsetWidth > 50:
        return "1.5rem";
      case sliderElm.offsetWidth > 25:
        return "1.2rem";
      default:
        return "1rem";
    }
  };

  const updateFontSize = (e) => {
    cardElements.map((item) => {
      item.style.fontSize = getCurrentFontSize();
    });
  };

  const updateSliderSize = (e) => {
    let newWidth = e.clientX - sliderElm.getBoundingClientRect().left;

    if (newWidth < 0) newWidth = 0;
    else if (newWidth > sliderContainerElm.offsetWidth)
      newWidth = sliderContainerElm.offsetWidth;

    sliderElm.style.width = `${newWidth}px`;
  };

  window.addEventListener("mousemove", (e) => {
    if (isAdjusting) updateSliderSize(e);
  });

  window.addEventListener("mouseup", () => {
    if (isAdjusting) {
      isAdjusting = false;
      updateFontSize();
    }
  });

  sliderContainerElm.addEventListener("mousedown", (e) => {
    isAdjusting = true;
    updateSliderSize(e);
  });

  createCards();
});
