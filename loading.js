const loadingBarFill = document.querySelector(".loading-bar-fill");
const loadingBarText = document.querySelector(".loading-bar-text");
const startText = document.querySelector(".start-text");

loadingBarFill.addEventListener("animationend", function() {
  loadingBarText.classList.add("hidden");
  startText.classList.remove("hidden");
});

startText.addEventListener("click", function() {
  startText.classList.add("hidden");
  loadingBarText.classList.remove("hidden");
  loadingBarFill.style.width = "0%";
  loadingBarFill.style.animation = "loading-bar-fill 7s linear forwards";
});
