var quiz;
var cards = [];
var redoCards = []


// Create cards on "Add Card" button clicks
var addCard = document.getElementById("add-card");

addCard.onclick = createCard;

function createCard() {
  // var xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function(cFunc) {
  //   if (xhttp.readyState === 4 && xhttp.status === 200 ) {
  //     console.log(xhttp);
  //     console.log("******");
  //     console.log(cFunc)
  //   }
  // }



  var front = document.getElementById("front-card");
  var back = document.getElementById("back-card");

  if (front.value === "" || back.value === "") {
    alert("Field(s) are empty. Please try again.");
    return;
  }

  cards.push(new Card(front.value, back.value));

  // Display number of cards created so far
  var cardCount = document.getElementById("card-count");
  cardCount.innerHTML = cards.length;

  // Empty fields
  front.value = "";
  back.value = "";
}


// Start Quiz : On `Start` button click:
// 1. Shuffle cards
// 2. Display `quiz.html`
// 3. Using shuffled cards, iterate over the array and display cards in turn.
//    // Edit progress bar
//    // if `redo-card`, add to redoCards array, then continue to next card
//    // if `next-card`, just continue to next card
// 4. When done, display end
//    // if `restart-full`
//    //   // shuffle cards, and repeat
//    // if `restart-redo`
//    //   // Use redoCards array list, shuffle, and start quiz with this new list

// Start Quiz click handler
$('#main-container').on('click', 'button', function() {
  console.log(this);
  $('#main-container').load('quiz.html');

});

//
// var startButton = document.getElementById("start");
//
// startButton.onclick = startQuiz;
//
// function startQuiz() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function(cFunc) {
//     if (xhttp.readyState === 4 && xhttp.status === 200 ) {
//       console.log(xhttp);
//       console.log("******");
//       console.log(cFunc)
//     }
//   }
//   // Change Title
//   var pageTitle = document.getElementById("page-title");
//   pageTitle.innerHTML = "Quiz";
//
//   quiz = new Quiz(cards);
//   var shuffleDeck = quiz.shuffle(cards);
//
//   // Also swap out view
//   var container = document.getElementById("main-container");
//   // container.innerHTML = "";
//
//   var stringHTML = "<div class='col-md-12 text-center'>";
//   stringHTML += "<div class='progress'>";
//   stringHTML += "<div id='update-progress' class='progress-bar' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100' style='width: 0%;'>"
//   stringHTML += "0%</div></div></div>"; //End progress bar
//   stringHTML += "<div class='col-md-12 col-md-offset-4'>";
//   stringHTML += "<div class='col-md-4'>";
//   stringHTML += "<p id='card-display'></p>";
//   stringHTML += "</div></div>";  // End Card display
//   stringHTML += "<div class='col-md-12 col-md-offset-4' style='visibility: hidden;'>";
//   stringHTML += "<div class='col-md-4'>";
//   stringHTML += "<p>Redo?</p></div>";
//   stringHTML += "<div class='col-md-2'>";
//   stringHTML += "<button type='button' id='redo-card' class='btn btn-default'>";
//   stringHTML += "Yes</button>";
//   stringHTML += "<button type='button' id='next-card' class='btn btn-default'>";
//   stringHTML += "No</button></div></div>";  // End Redo buttons
//
//   container.innerHTML = stringHTML;
//   QuizUI.displayNext();
//
//   var redoCard = document.getElementById('redo-card');
//   var nextCard = document.getElementById('next-card');
//
//   redoCard.onclick = function() {
//     console.log(this);
//     // redoCards.push(new Card())
//   }
//
//   nextCard.onclick = function() {
//
//   }
//
// }
