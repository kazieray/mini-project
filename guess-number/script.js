// Get elements
const field = document.querySelector(".field");
const playerInput = document.querySelector(".field input");
const btnTebak = document.getElementsByTagName("button")[0];
const buttons = document.querySelector(".buttons");
const btnYa = document.getElementsByTagName("button")[1];
const btnTidak = document.getElementsByTagName("button")[2];
const displayContainer = document.querySelector(".display");
const displayTextBig = document.querySelector(".display h3");
const displayTextSmall = document.querySelector(".display p");

// Variable
let opportunity = 0;
let result;
let compNumber = Math.floor(Math.random() * 10) + 1;

function startGame() {
   opportunity = 0;
   compNumber = Math.floor(Math.random() * 10) + 1;
   playerInput.value = "";
   displayContainer.style.backgroundColor = "#BEDBFF";
   displayTextBig.innerHTML = "Siap? Mari mulai!";
   displayTextSmall.innerHTML = "Kesempatan: 1";
   field.style.display = "flex";
   buttons.style.display = "none";
}


function checkGame() {
   playerNumber = playerInput.value;
   if (playerNumber === "" || playerNumber < 1 || playerNumber > 10) {
      return displayTextBig.innerHTML = "Ketik angka antara 1-10";
   }

   if (opportunity <= 2 && playerNumber == compNumber) {
      result = "correct";
      opportunity = 3;
   } else if (opportunity < 2 && playerNumber != compNumber) {
      if (playerNumber > compNumber) {
         result = "too big";
      } else {
         result = "too small";
      }
      opportunity++;
   } else {
      result = "gameover";
   }
   
   return updateUI(result, opportunity, compNumber);
}


function updateUI(result, opportunity, compNumber) {
   if (result == "correct") {

      displayContainer.style.backgroundColor = "#A4F4CF";
      displayTextBig.innerHTML = "Tebakanmu benar!🥳";
      displayTextSmall.innerHTML = "Angka yang benar adalah " + compNumber;
      field.style.display = "none";
      
      setTimeout(() => {
         displayTextSmall.innerHTML = "Ingin bermain lagi?";
         buttons.style.display = "flex";
      }, 2500);

   } else if (result == "too big") {

      displayTextBig.innerHTML = "HINT: Angka terlalu besar!";
      displayTextSmall.innerHTML = "Kesempatan: " + opportunity;
   
   } else if (result == "too small") {
      
      displayTextBig.innerHTML = "HINT: Angka terlalu kecil!";
      displayTextSmall.innerHTML = "Kesempatan: " + opportunity;
   
   } else {
      
      displayContainer.style.backgroundColor = "#FFC9C9";
      displayTextBig.innerHTML = "Game Over☹️";
      displayTextSmall.innerHTML = "Angka yang benar adalah " + compNumber;
      field.style.display = "none";
      
      setTimeout(() => {
         displayTextSmall.innerHTML = "Ingin bermain lagi?";
         buttons.style.display = "flex";
      }, 2500);
   }
}


function endGame() {
   displayContainer.style.backgroundColor = "#BEDBFF";
   displayTextBig.innerHTML = "Terima kasih telah bermain!";
   displayTextSmall.innerHTML = "";
   field.style.display = "none";
   buttons.style.display = "none";
}

btnTebak.addEventListener("click", checkGame);
btnYa.addEventListener("click", startGame);
btnTidak.addEventListener("click", endGame);