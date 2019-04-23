// Write your code here!
document.querySelector('main#main').remove()
let newHeader = document.createElement("h1")
newHeader.setAttribute('id','victory')
newHeader.textContent = "I is the champion"
document.appendChild(newHeader)