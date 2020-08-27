const shopList = document.querySelector("ul")
const form = document.querySelector("form")
const input = document.querySelector("input")
const button = document.querySelector("footer")



function addList(event) {
    event.preventDefault();
    const values = input.value
    const list = document.createElement("li")
    const name = document.createElement("div")
    const icon = document.createElement("div")
    list.appendChild(name)
    list.appendChild(icon)
    name.textContent = values
    icon.innerHTML = `<i class="fas fa-trash-alt"></i>`
    shopList.appendChild(list)
    input.value = ""
    icon.addEventListener("click", (event) => {
        const listItem = event.target
        shopList.removeChild(listItem.parentNode.parentNode)
    })
}

form.addEventListener("submit", addList)
button.addEventListener("click", addList)