let images = document.querySelector(".jsImages");
let rightBtn = document.querySelector(".jsRightBtn");
let leftBtn = document.querySelector(".jsLeftBtn");

rightBtn.addEventListener("click", () => {
  images.classList.remove("animation-right");
  images.classList.add("animation-left");
});

leftBtn.addEventListener("click", () => {
  if (images.classList.contains("animation-left")) {
    images.classList.remove("animation-left");
    images.classList.add("animation-right");
  }
});
