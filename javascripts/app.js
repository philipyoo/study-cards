var quiz;
var cards = [];

// Add Cards click handler
var addCard = document.getElementById("add-card");

addCard.onclick = function() {
  var front = document.getElementById("front-card");
  var back = document.getElementById("back-card");

  if (front.value === "" || back.value === "") {
    alert("Field(s) are empty. Please try again.");
    return;
  }

  cards.push(new Card(front.value, back.value));

  var cardCount = document.getElementById("card-count");
  cardCount.innerHTML = cards.length;

  // Empty fields
  front.value = "";
  back.value = "";
}

// Start Quiz click handler
var startButton = document.getElementById("start");

startButton.onclick = function() {
  quiz = new Quiz(cards);
}
