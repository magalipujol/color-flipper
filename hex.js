const hexPossibleValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"] 
//TODO
function createHexColorFromValues(red, green, blue) {

}
 
//TODO change from rgb to hex
btn.addEventListener("click", function (){
    document.body.style.backgroundColor = createRGBColorFromValues(getRandomNumberUpToANumber(255), 
                                                                   getRandomNumberUpToANumber(255), 
                                                                   getRandomNumberUpToANumber(255))
    color.textContent = `RGB(${redGlobal}, ${greenGlobal}, ${blueGlobal})`
})

