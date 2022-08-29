let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const newTitle = document.getElementById("main-title");
newTitle.innerText = "DOM's Personal Page";
  // Part 2
  
  document.body.style.backgroundColor = 'aqua';

  // Part 3

let favThings = document.getElementById('favorite-things');
favThings.removeChild(favThings.lastElementChild);

  // Part 4

  let titleFont = document.getElementsByClassName('.special-title');

for (let i = 0; i < titleFont.length; i++) {
  let titles = titleFont[i];
  titles.style.fontSize = "2rem";
}

  // Part 5
 let pastRaces = document.querySelectorAll('#past-races li');

 for(let i = 0;i < pastRaces.length; i++){
  if( pastRaces[i].textContent === 'Chicago'){
    pastRaces.removeChild(pastRaces[i]);
    console.log(pastRaces[i]);
  }
 }
 

  // Part 6
  document.querySelector("#quote-title").addEventListener("click", randomQuote);

  // Part 7
  document.querySelector("#quote-title").addEventListener("click", randomQuote);

  // Part 8

   document.querySelector("#quote-title").addEventListener("click", randomQuote);
  

  // Part 9

  document.querySelector("#quote-title").addEventListener("click", randomQuote);


});
