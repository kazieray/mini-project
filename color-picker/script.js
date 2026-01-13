// Get elements
const body = document.querySelector("body");
const hexaColor = document.querySelector("span.hex-color");
const userInput = document.querySelector("input");

// Get last color from localstorage
const currentColor = localStorage.getItem("color");

// Keep the last color
if (currentColor) {
   userInput.value = currentColor;
   body.style.backgroundColor = currentColor;
   hexaColor.innerHTML = currentColor;
}

userInput.addEventListener("input", () => {
   const color = userInput.value;
   hexaColor.innerHTML = color;
   body.style.backgroundColor = color;

   // Save last color to localstorage
   localStorage.setItem("color", color);
})