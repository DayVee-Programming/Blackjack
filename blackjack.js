function generateDeck() {
  const suits = ["Hearts", "Clubs", "Diamonds", "Spades"],
    cards = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ],
    deck = [];

  cards.forEach((card) => {
    suits.forEach((suit) => {
      deck.push({
        card: card,
        suit: suit,
      });
    });
  });

  return deck;
}

function generateCard(deck) {
  const randomIndex = Math.floor(Math.random() * deck.length),
    card = deck[randomIndex];

  deck.splice(randomIndex, 1);

  return card;
}

function calcScore(playerHand) {
  let total = 0;

  playerHand.forEach((card) => {
    switch (card.card) {
      case "Jack":
      case "Queen":
      case "King":
        total += 10;
        break;
      case "Ace":
        total++;
        break;
      default:
        total += Number(card.card);
        break;
    }
  });

  return total;
}

function drawCard() {
  playerHand.push(generateCard(deck));
  dealerHand.push(generateCard(deck));
  (playerScore = calcScore(playerHand)), (dealerScore = calcScore(dealerHand));
}

const deck = generateDeck();
let playerHand = [],
  dealerHand = [],
  playerScore = 0,
  dealerScore = 0;

drawCard();
drawCard();

console.log("Starting Player Hand: ", playerHand);
console.log("Starting Player Score: ", playerScore);
console.log("Starting Dealer Hand: ", dealerHand);
console.log("Starting Dealer Score: ", dealerScore);

while (true) {
  drawCard();

  console.log("Player Hand: ", playerHand);
  console.log("Player Score: ", playerScore);
  console.log("Dealer Hand: ", dealerHand);
  console.log("Dealer Score: ", dealerScore);

  if (playerScore === 21) {
    console.log(
      `You win! Your final score was ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  } else if (playerScore > 21) {
    console.log(
      `You lose! Your final score was ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  }
}

class Player {
  constructor(obj) {
    this.section = document.querySelector(obj.section)
  }
}

const player = new Player({
  section: '.player'
})
