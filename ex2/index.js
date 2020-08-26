const divs = document.querySelectorAll("div")

function showCoords(event) {
    const rect = divs[5].getBoundingClientRect();
    console.log(rect)
    console.log(`client: ${event.screenX}, ${event.screenY}`)
    console.log(`page: ${event.pageX}, ${event.pageY}`)
}

function init() {
    divs[5].addEventListener("click", showCoords)
}

init();