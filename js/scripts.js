var suits = ['hearts','diamonds','spades', 'clubs'];

var cards = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];

var deck = [];

suits.forEach(function(suit) {
	cards.forEach(function(card) {
  var combine = card + " of " + suit;
  deck.push(combine);
  });
});
console.log(deck);
