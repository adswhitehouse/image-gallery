let gallery = document.querySelector(".jsGallery");
let leftBtn = document.querySelector(".jsLeftBtn");
let rightBtn = document.querySelector(".jsRightBtn");

rightBtn.addEventListener("click", () => {
  gallery.scrollTo({ left: 800 });
});

leftBtn.addEventListener("click", () => {
  gallery.scrollTo({ left: -800 });
});
