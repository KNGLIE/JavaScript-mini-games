document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'black-panther',
            img: 'images/black-panther.png'
        },
        {
            name: 'jade',
            img: 'images/jade.png'
        },
        {
            name: 'lady',
            img: 'images/lady.png'
        },
        {
            name: 'penguin',
            img: 'images/penguin.png'
        },
        {
            name: 'pyramid-eye',
            img: 'images/pyramid-eye.png'
        },
        {
            name: 'rainbow-heart',
            img: 'images/rainbow-heart.png'
        },
        {
            name: 'weed',
            img: 'images/weed.png'
        },
        {
            name: 'wow',
            img: 'images/wow.png'
        },
        {
            name: 'black-panther',
            img: 'images/black-panther.png'
        },
        {
            name: 'jade',
            img: 'images/jade.png'
        },
        {
            name: 'lady',
            img: 'images/lady.png'
        },
        {
            name: 'penguin',
            img: 'images/penguin.png'
        },
        {
            name: 'pyramid-eye',
            img: 'images/pyramid-eye.png'
        },
        {
            name: 'rainbow-heart',
            img: 'images/rainbow-heart.png'
        },
        {
            name: 'weed',
            img: 'images/weed.png'
        },
        {
            name: 'wow',
            img: 'images/wow.png'
        },

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create board
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/ankh.png')
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/wall.png')
            cards[optionTwoId].setAttribute('src', 'images/wall.png')
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/ankh.png')
            cards[optionTwoId].setAttribute('src', 'images/ankh.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found all the cards!'
        }
        
    }

    // flip card function
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})
