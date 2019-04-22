// Write your code here!

document.querySelector("main#main").remove(); //no longer has DOM node 'main#main'
const newHeader = document.createElement("h1");
newHeader.id = "victory" // has a 'newHeader' variable that points to node 'h1#victory'
newHeader.innerHTML = "Test is the champion!";  // 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.className = "victory";
