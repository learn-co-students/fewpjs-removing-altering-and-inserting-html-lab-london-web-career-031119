// Write your code here!

// delete main id
document.getElementById('main').remove()

// "has a 'newHeader' variable that points to node 'h1#victory' with \"YOUR-NAME is the champion\" inside"
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = 'Manon is the champion!'
// optional for css:
newHeader.className = 'victory'
