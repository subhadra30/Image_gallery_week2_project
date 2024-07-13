const images = ["pics/bay.jpg", "pics/hill.jpg", "pics/tunnel.jpg"];

let currentIndex = 0;

const largeImage = document.getElementById("largeimage");

const firstImage = document.getElementById("first");
firstImage.addEventListener("click", loadImage1);
function loadImage1() {
  currentIndex = 0;
  largeImage.src = images[currentIndex];
}
const secondImage = document.getElementById("second");
secondImage.addEventListener("click", loadImage2);
function loadImage2() {
  currentIndex = 1;
  largeImage.src = images[currentIndex];
}
const thirdImage = document.getElementById("third");
thirdImage.addEventListener("click", loadImage3);
function loadImage3() {
  currentIndex = 2;
  largeImage.src = images[currentIndex];
}
const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", loadNextimage);
function loadNextimage() {
  if (currentIndex == 2) {
    currentIndex = -1;
  }
  currentIndex++;
  largeImage.src = images[currentIndex];
}
const prevButton = document.getElementById("previous-button");
prevButton.addEventListener("click", loadPreviousimage);
function loadPreviousimage() {
  if (currentIndex <= 0) {
    currentIndex = 3;
  }
  currentIndex--;
  largeImage.src = images[currentIndex];
}
