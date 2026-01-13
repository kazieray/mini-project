// Get elements
const inputHrs = document.getElementsByTagName("input")[0];
const inputMin = document.getElementsByTagName("input")[1];
const inputSec = document.getElementsByTagName("input")[2];
const buttonStart = document.getElementsByTagName("button")[0];
const buttonReset = document.getElementsByTagName("button")[1];
const displayDays = document.querySelector("span.days");
const displayHrs = document.querySelector("span.hours");
const displayMin= document.querySelector("span.minutes");
const displaySec= document.querySelector("span.seconds");
let countdown = null;

function reset() {
   inputHrs.value = "";
   inputMin.value = "";
   inputSec.value = "";
   clearInterval(countdown);
   countdown = null;
   updateUI(0, 0, 0, 0);
}

function process() {
   numberHrs = inputHrs.value[0] == 0 ? -1 : Number(inputHrs.value);
   numberMin = inputMin.value[0] == 0 ? -1 : Number(inputMin.value);
   numberSec = inputSec.value[0] == 0 ? -1 : Number(inputSec.value);

   if(numberHrs < 0 || numberMin < 0 || numberSec < 0) {
      document.querySelector(".alert").innerHTML = "Harap masukkan angka dengan benar!";
      setTimeout(() => {
         reset();
         document.querySelector(".alert").innerHTML = "";
      }, 2000);
   } else {
      if(countdown != null) {
         clearInterval(countdown);
         countdown = null;
      }

      totalSec = (numberHrs * 3600) + (numberMin * 60) + numberSec;
      
      countdown = setInterval(() => {
         if(totalSec < 0) {
            clearInterval(countdown);
            countdown = null;
         } else {
            days = Math.floor(totalSec / 86400);
            sisa = totalSec % 86400;
            
            hours = Math.floor(sisa / 3600);
            sisa = sisa % 3600;
      
            minutes = Math.floor(sisa / 60);
            sisa = sisa % 60;
            
            seconds = sisa;
      
            totalSec--;
            updateUI(days, hours, minutes, seconds);
         }
      }, 1000)
   }
}

function updateUI(days, hours, minutes, seconds) {
   displayDays.innerHTML = days;
   displayHrs.innerHTML = hours;
   displayMin.innerHTML = minutes;
   displaySec.innerHTML = seconds
}

buttonStart.addEventListener("click", process);
buttonReset.addEventListener("click", reset);