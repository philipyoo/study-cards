# study-cards

A simple non-persistent study card application built with JavaScript, jQuery, AJAX, and Bootstrap.

## User Stories

- A User can create Cards by inputting the front and back with information.
- A User can start the quiz where they will be able to see the front of the cards in a random order.
- During quiz mode, a User can click the card to view the back of the card.
- During quiz mode, after the back of the card is revealed, a User can select choose to add the card into a "Redo" list.
- After completing all the cards, a User can restart the quiz using the full deck or the "Redo" cards only.
- If a User starts the quiz using "Redo" cards only, the User can further select "Redo" in order to create a revised "Redo" card deck.

## Things to implement or revise

- Currently the `Quiz` class is under-utilized. Refactor to incorporate more functionality of this class.
- [For `Quiz` Class] Allow user to add more cards to the full deck.
- [For `Quiz` Class] Allow user to remove cards from the full deck. Must consider removing card from current "Redo" cards list, if exists.
- [For `app.js`] Allow user to add/remove cards during initial deck creation.
- [For `app.js`] Allow user to view all current cards made during initial deck creation.
