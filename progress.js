const input = document.querySelector(".progress__input");
const animationToggle = document.querySelector(".progress__animate");

animationToggle.addEventListener("change", () => {
  const rotatingElement = document.querySelector(".rotating-element");

  const isPaused =
    getComputedStyle(rotatingElement).getPropertyValue(
      "animation-play-state"
    ) === "paused";
  rotatingElement.style.animationPlayState = isPaused ? "running" : "paused";
});

input.addEventListener("input", () => {
  const inputValue = Number(document.querySelector(".progress__input").value);
  console.log(`${inputValue} ${typeof inputValue}`);
  document
    .querySelector("#arc")
    .style.setProperty("--a", `${3.6 * inputValue}deg`);
});
