// Write your code here!
let div = document.getElementById("main");
div.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
document.body.appendChild(newHeader);
newHeader.innerHTML = 'YOUR-NAME is the champion\" inside';