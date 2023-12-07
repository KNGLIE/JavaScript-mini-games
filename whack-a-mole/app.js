const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const hit = document.querySelectorAll('.hit')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent
let timerInterval = setInterval(countDown, 1000)

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    // assign the id of the randomPosition to hitPosition
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mousedown', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole() {
    timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0){
        clearInterval(timerId)
        alert('GAME OVER! Score = ' + result)
    }
}


