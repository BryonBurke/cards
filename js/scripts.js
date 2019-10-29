var suits = ['hearts','diamonds','spades', 'clubs'];

var cards = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];

var deck = [];



for(i = 0; i < suits.length; i++) {
	 var suit = suits[i];
	for(j = 0; j < cards.length; j++) {
		card = cards[j];
		var combine = card + " of " + suit;
		deck.push(combine);
	  };
};


console.log(deck);
