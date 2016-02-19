var QuizUI = {
  displayNext: function() {
    if (quiz.hasEnded()) {
      this.displayEnd();
    } else {
      this.displayProgress();
      this.displayCard();
    }
  },
  displayProgress: function() {
    var element = document.getElementById("progress");
    var newPercent = quiz.percentComplete();
    // element.getAttribute('aria-valuenow') = newPercent;
    element.style = "width: " + newPercent + "%;";
    element.innerHTML = newPercent + "%";
  },
  displayCard: function() {
    this.populateIdWithHTML("card-display", quiz.getCurrentCard().front);
  },
  flipCardHandler: function() {
    var cardDisplay = document.getElementById("card-display");
    cardDisplay.onclick = function() {
      this.populateIdWithHTML("card-display, quiz.getCurrentCard().back");
      // Unhide Redo button
      // Unhide Next button
    }
  },
  displayEnd: function() {
    var pageTitle = document.getElementById("page-title");
    pageTitle.innerHTML = "Study Again?";

    var container = document.getElementById("main-container");
    var stringHTML = "<div class='col-md-12 col-md-offset-4'>";
    stringHTML += "<div class='col-md-2'>";
    stringHTML += "<button id='restart-full' type='button' class='btn btn-default'>";
    stringHTML += "Full Deck <i>(" + quiz.cards.length + " cards)</i>";
    stringHTML += "</button></div>";
    stringHTML += "<div class='col-md-2'>";
    stringHTML += "<button id='restart-redo' type='button' class='btn btn-default'>";
    stringHTML += "Redo Only <i>(" + + " cards)</i>";  // input new quiz
    stringHTML += "</button></div></div>";

    container.innerHTML = stringHTML;
    restartButtonHandlers();
  },
  restartButtonHandlers: function() {

  },
  populateIdWithHTML: function(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
  }
}
