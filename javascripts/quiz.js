function Quiz(cards) {
  this.cards = cards;
  this.currentCardIndex = 0;
  this.shuffledCards = this.shuffle(this.cards);
}

Quiz.prototype.shuffle = function(cards) {
  var newCardDeck = cards.slice(0);
  for (var j, x, i = newCardDeck.length; i; j = Math.floor(Math.random() * i), x = newCardDeck[--i], newCardDeck[i] = newCardDeck[j], newCardDeck[j] = x);
  return newCardDeck;
}

Quiz.prototype.hasEnded = function() {
  return this.currentCardIndex >= this.shuffledCards.length;
}
