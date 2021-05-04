const btn = document.getElementById('btn')
const color = document.querySelector(".color")

const hexPossibleValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"] 
//TODO 
let hexString = "#"
function createRandomHexColor() {
    hexString = "#"
    for (let i = 0; i < 6; i++) {
        hexString += hexPossibleValues[getRandomNumberUpToANumber(hexPossibleValues.length - 1)]
    }
    return hexString
}



 
function getRandomNumberUpToANumber(biggest) {
    return Math.floor(Math.random() * (biggest + 1))
}

btn.addEventListener("click", function (){
    document.body.style.backgroundColor = createRandomHexColor()
    color.textContent = hexString
})



