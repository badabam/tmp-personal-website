const img = document.querySelector("img");
const button = document.querySelector("#button");

const firstImageUrl = img.src;
const secondImageUrl = "src/assets/ich2.jpeg";

button.addEventListener("click", () => {
  if (img.src === firstImageUrl) {
    img.src = secondImageUrl;
  } else {
    img.src = firstImageUrl;
  }
});
