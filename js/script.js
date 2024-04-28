"use strict";

const scrollContainer = document.querySelector(".scroll-container");
const articles = document.querySelectorAll(".article");
const imagePreview = document.querySelector(".preview");

let currentScrollingSection = articles[0];

function generateImage(path) {
  //   const currentImage = imagePreview.querySelector("img");
  //   if (currentImage) {
  //     currentImage.classList.add("slide-left");
  //     setTimeout(() => currentImage.remove(), 1000);
  //   }

  const NextImage = document.createElement("img");
  NextImage.src = `./img/${path}`;
  imagePreview.innerHTML = "";
  imagePreview.append(NextImage);
}
generateImage(currentScrollingSection.dataset.image);

scrollContainer.addEventListener("scroll", () => {
  const scrollingSection = [...articles].find(
    (article) => article.getBoundingClientRect().bottom > 0
  );
  if (scrollingSection !== currentScrollingSection) {
    generateImage(scrollingSection.dataset.image);
    currentScrollingSection = scrollingSection;
  }
});
