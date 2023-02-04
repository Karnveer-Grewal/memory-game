const cardArray = [
  {
    name: 'bee',
    img: 'images/bee.png',
  },
  {
    name: 'chicken',
    img: 'images/chicken.png',
  },
  {
    name: 'elephant',
    img: 'images/elephant.png',
  },
  {
    name: 'giraffe',
    img: 'images/giraffe.png',
  },
  {
    name: 'goat',
    img: 'images/goat.png',
  },
  {
    name: 'lion',
    img: 'images/lion.png',
  },
  {
    name: 'bee',
    img: 'images/bee.png',
  },
  {
    name: 'chicken',
    img: 'images/chicken.png',
  },
  {
    name: 'elephant',
    img: 'images/elephant.png',
  },
  {
    name: 'giraffe',
    img: 'images/giraffe.png',
  },
  {
    name: 'goat',
    img: 'images/goat.png',
  },
  {
    name: 'lion',
    img: 'images/lion.png',
  },
];

cardArray.sort(() => 0.5 - Math.random());

console.log(cardArray);

const gridDisplay = document.querySelector('#grid');
const cardsChosen = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/card.png');
    card.setAttribute('data-id', i);
    gridDisplay.appendChild(card);
  }
}

createBoard();
