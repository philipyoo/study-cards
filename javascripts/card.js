function Card(front, back) {
  this.front = front;
  this.back = back;
  this.redo = true;
}

Card.prototype.useCard = function() {
  return this.redo === true
}

Card.prototype.takeOutCard = function() {
  this.redo = false;
}
