// Make quotes data
const quotes = [
   {
      quote: "Stay hungry, stay foolish.",
      author: "Steve Jobs",
   },
   {
      quote: "Happiness depends upon ourselves.",
      author: "Aristotle",
   },
   {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
   },
   {
      quote: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
   },
   {
      quote: "Growth is painful. Change is painful. But nothing is as painful as staying stuck.",
      author: "N. R. Narayana Murthy",
   },
   {
      quote: "Do not wait for the perfect moment. Take the moment and make it perfect.",
      author: "Zoey Sayward",
   },
];

// Get elements
const quoteText = document.querySelector(".quote");
const author = document.querySelector(".author");
const btnGenerate = document.querySelector("button");
let getRandomIndex;
let lastIndex;

function getIndex() {
   return Math.floor(Math.random() * quotes.length);
}

function generateQuotes() {
   getRandomIndex = getIndex();
   
   while (lastIndex === getRandomIndex) {
      getRandomIndex = getIndex();
   }
   
   quoteText.innerHTML = quotes[getRandomIndex].quote;
   author.innerHTML = `—${quotes[getRandomIndex].author}`;
   
   lastIndex = getRandomIndex;
}

btnGenerate.addEventListener("click", generateQuotes);