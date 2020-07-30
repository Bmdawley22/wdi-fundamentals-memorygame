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
			alert("You Found a, match!");
		}
		else
		{
			alert("Sorry, try again");
		}
	}
}

function flipCard()
{
	let cardID = this.getAttribute("data-id");

	console.log("User flipped " + cards[cardID].rank);
	console.log("Suit: " + cards[cardID].suit);
	console.log(cards[cardID].cardImage);
	
	this.setAttribute('src',cards[cardID].cardImage);

	cardsInPlay.push(cards[cardID].rank);

	checkForMatch();
}

function createBoard()
{
	for (let i = 0; i < 4; i++)
	{
		
		let cardElement = document.createElement('img');
		cardElement.setAttribute('data-id',i);
		cardElement.setAttribute('src','images/back.png');
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
    	
	}
}

createBoard();
