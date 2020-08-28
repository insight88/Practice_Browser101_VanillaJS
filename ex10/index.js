const button = document.querySelector("header .button")
// const stop = document.querySelector(".stop")
// const playIcon = play.querySelector("i")
// const stopIcon = stop.querySelector("i")
const time = document.querySelector(".time")
const carrotNumber = document.querySelector(".carrot-number")
const playground = document.querySelector(".playground")
const bugs = document.querySelector(".bugs")
const carrots = document.querySelector(".carrots")
const messageContainer = document.querySelector(".container")
const result = document.querySelector(".message__result")
const replay = document.querySelector(".message__button")

const playSound = new Audio("./sound/bg.mp3");
const bugSound = new Audio("./sound/bug_pull.mp3");
const carrotSound = new Audio("./sound/carrot_pull.mp3");
const winSound = new Audio("./sound/game_win.mp3");
const alertSound = new Audio("./sound/alert.wav");

let carrotsLv = 10
let bugsLv = 10
let TIME = 10
let givenTime = TIME
let presentTime = undefined
let i = 0
let j = 0

function changeBtn() {
    if (button.classList.contains(play)) {
        console.log(button.innerHTML)
    } else if (button.classList.contains(stop)) {
        console.log(button.innerHTML)
    }
}

function generateRandPosition() {
    const randomNumber1 = Math.random()
    const randomNumber2 = Math.random()
    const playgroundPosition = playground.getBoundingClientRect()
    const positionX = randomNumber1 * (playgroundPosition.width - 70)
    const positionY = randomNumber2 * (playgroundPosition.height - 70) + playgroundPosition.top
    const position = [positionX, positionY]
    return position
}

function generateCarrots(i) {
    const newItem = document.createElement("div")
    newItem.setAttribute("class", "carrots")
    newItem.setAttribute("data-id", `${i}`)
    const positionXY = generateRandPosition()
    newItem.style.left = `${positionXY[0]}px`
    newItem.style.top = `${positionXY[1]}px`
    newItem.addEventListener("click", pullCarrot)
    playground.appendChild(newItem)
}

function generateBugs(j) {
    const newItem = document.createElement("div")
    newItem.setAttribute("class", "bugs")
    newItem.setAttribute("data-id", `${j}`)
    const positionXY = generateRandPosition()
    newItem.style.left = `${positionXY[0]}px`
    newItem.style.top = `${positionXY[1]}px`
    newItem.addEventListener("click", pullBug)
    playground.appendChild(newItem)
}

function playGame() {
    playSound.play()
    playground.innerHTML = ""
    hideMessageContainer()
    for (let m = 0; m < carrotsLv; m++) {
        generateCarrots(i)
        i++
    }
    for (let n = 0; n < bugsLv; n++) {
        generateBugs(j)
        j++
    }
    displayCarrotNumber()
    displayTime()
}

function displayTime(givenTime) {
    updateTime(givenTime)
    presentTime = setInterval(() => {
        if (givenTime <= 0) {
            clearInterval(presentTime);
            return
        }
        updateTime(--givenTime)
    }, 1000)
}

function updateTime(sec) {
    time.innerHTML = sec < 10 ? `00:0${givenTime}` : `00:${givenTime}`
}

function displayCarrotNumber() {
    let carrotsRemained = document.querySelectorAll(".carrots")
    carrotNumber.textContent = carrotsRemained.length
    if (carrotsRemained.length === 0) {
        winSound.play()
        displayMessageContainer()
        result.innerHTML = "YOU WON 🎉"
        gameEnd()
    }
}

function pullBug(event) {
    bugSound.play()
    event.target.style.transform = "scale(1.4)"
    result.innerHTML = "REPLAY 😥"
    gameEnd()
}

function pullCarrot(event) {
    carrotSound.play()
    playground.removeChild(event.target)
    displayCarrotNumber()
}

function gameEnd() {
    displayMessageContainer()
    playSound.pause()
}

function hideMessageContainer() {
    messageContainer.style.opacity = "0"
    messageContainer.style.zIndex = "0"
}

function displayMessageContainer() {
    messageContainer.style.opacity = "1"
    messageContainer.style.zIndex = "5"
}

function init() {
    hideMessageContainer()
    button.addEventListener("click", changeBtn)
    button.addEventListener("click", playGame)
    replay.addEventListener("click", playGame)
    bugs.addEventListener("click", pullBug)
    carrots.addEventListener("click", pullCarrot)
}

init();