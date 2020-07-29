let cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

let cardsInPlay = [];

function checkForMatch()
{
	if (cardsInPlay.length === 2)
	{
		if (cardsInPlay[0] === cardsInPlay[1])
		{
			console.log("You Found a, match!");
		}
		else
		{
			console.log("Sorry, try again");
		}
	}
}

function flipCard(cardID)
{
	cardsInPlay.push(cards[cardID].rank);

	console.log("User flipped " + cards[cardID].rank);
	console.log("Suit: " + cards[cardID].suit);
	console.log(cards[cardID].cardImage);

	checkForMatch();
}

flipCard(3);
flipCard(1);


	

	