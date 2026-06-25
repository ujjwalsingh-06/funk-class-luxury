/* ======================================
   FUNK CASUAL LUXURY
   Gallery JavaScript
====================================== */

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("gallery-active");
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    galleryItems.forEach((item) => {
      item.classList.remove("gallery-active");
    });
  }
});
