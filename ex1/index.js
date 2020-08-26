// const windows = document.querySelector(this)
const screens = document.querySelector('.screen')
const outer = document.querySelector('.outer')
const inner = document.querySelector('.inner')
const client = document.querySelector('.client')

function displaySize() {
    screens.innerText = `${window.screen.width}, ${window.screen.height}`
    outer.innerText = `${window.outerWidth}, ${window.outerHeight}`
    inner.innerText = `${window.innerWidth}, ${window.innerHeight}`
    client.innerText = `${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`
}

function init() {
    window.addEventListener("resize", () => displaySize())
    displaySize()
}

init()