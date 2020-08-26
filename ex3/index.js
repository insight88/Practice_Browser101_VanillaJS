const buttons = document.querySelectorAll("button")
const divs = document.querySelectorAll("div")

function scrollBy100px() {
    window.scrollBy(0, 100)
}

function scrollTo100px() {
    window.scroll(0, 100)
}

function scrollTo6thDiv() {
    divs[5].scrollIntoView()
}

function init() {
    buttons[0].addEventListener("click", scrollBy100px)
    buttons[1].addEventListener("click", scrollTo100px)
    buttons[2].addEventListener("click", scrollTo6thDiv)
}

init()