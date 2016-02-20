var quiz;
var cards = [];
var redoCards = [];

$('#main-container').on('click', 'button', function() {
  console.log('in here');
  if ( this.id === 'add-card' ) {
    var $frontCard = $('#front-card');
    var $backCard = $('#back-card');

    if ( !$frontCard.val() || !$backCard.val() ) {
      alert("Field(s) are empty. Please try again.");
      return;
    }

    cards.push(new Card($frontCard.val(), $backCard.val()));

    $('#card-count').html(cards.length);
    $frontCard.val('');
    $backCard.val('');


  } else if ( this.id === 'start' || this.id === 'restart-full' ){
    // reset redoCards
    redoCards = [];

    $('#main-container').load('quiz.html', function() {
      // input first shuffled card

      $('#page-title').html('Quiz');

      quiz = new Quiz(cards);

      shuffleDeck = quiz.shuffle(cards);
      idx = 0;

      $('#card-display').html(shuffleDeck[idx].front);

    });
  } else if ( this.id === 'restart-redo' ) {
    $('#main-container').load('quiz.html', function() {
      // input first shuffled card

      $('#page-title').html('Quiz');

      quiz = new Quiz(redoCards);

      shuffleDeck = quiz.shuffle(redoCards);
      idx = 0;
      redoCards = [];

      $('#card-display').html(shuffleDeck[idx].front);

    });
  } else if ( this.id === 'redo-card' || this.id === 'next-card') {
    if (idx >= shuffleDeck.length - 1) {
      if ( this.id === "redo-card" && redoCards[redoCards.length - 1] !== shuffleDeck[idx] ) {
        redoCards.push(shuffleDeck[idx]);
      }

      // show end
      $('#main-container').load('end.html', function() {
        $('#page-title').html('Study Again?');
        $('#full-length').html("(" + cards.length + " cards)");
        $('#redo-length').html("(" + redoCards.length + " cards)");

        if ( redoCards.length === 0 ) {
          $('#restart-redo').prop('disabled', true);
        }
      });
    } else {
      var $cardContent = $('#card-display');

      if ( $cardContent.html() === shuffleDeck[idx].back ) {
        if ( this.id === "redo-card" && redoCards[redoCards.length - 1] !== shuffleDeck[idx] ) {
          redoCards.push(shuffleDeck[idx]);
        }

        idx++;

        console.log('y u no save??');

        console.log(quiz.percentComplete(idx) );
        $('#update-progress').prop('aria-valuenow', quiz.percentComplete(idx) );
        $('#update-progress').html(quiz.percentComplete(idx) + "% Complete");
        $('#update-progress').css('width', quiz.percentComplete(idx) + "%");

        $cardContent.html(shuffleDeck[idx].front);
        $('#after-options').toggle();

      }
    }
  }

});


$('#main-container').on('click', '#card-holder', function() {
  var $cardContent = $('#card-display');

  if (idx < shuffleDeck.length) {

    if ( $cardContent.html() === shuffleDeck[idx].front ) {
      // display back
      $cardContent.html(shuffleDeck[idx].back);

      // Show redo option buttons
      $('#after-options').toggle();

    }
  }
});
