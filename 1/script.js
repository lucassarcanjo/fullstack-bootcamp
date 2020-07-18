window.addEventListener("load", () => {
  const sliders = document.querySelectorAll(".color-input");

  sliders.forEach((slider) => slider.addEventListener("input", handleInputChange));
});

const handleInputChange = (e) => {
  const colorContainer = document.querySelector("#color-container");
  const colorInputList = document.querySelectorAll(".color-code");

  // Set text input with slider value
  e.target.nextElementSibling.value = e.target.value;

  // Draw color
  colorContainer.style.backgroundColor = `rgb(${colorInputList[0].value}, ${colorInputList[1].value}, ${colorInputList[2].value})`;
};
