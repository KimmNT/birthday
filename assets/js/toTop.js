window.addEventListener("scroll", () => {
  const toTop = document.querySelector(".totop");
  toTop.classList.toggle("showUp", window.scrollY > 250);
});
