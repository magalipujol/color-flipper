
const btn = document.getElementById('btn')
//.color is for a class
const color = document.querySelector(".color")


//this function creates a random number between 0 and a positive number
//the random number is an integer
function getRandomNumberUpToANumber(biggest) {
    return Math.floor(Math.random() * (biggest + 1))
}

let redGlobal;
let greenGlobal;
let blueGlobal;


function createRGBColorFromValues(red, green, blue) {
    redGlobal = red
    greenGlobal = green
    blueGlobal = blue
    return `rgb(${red}, ${green}, ${blue})`}
    
    //eventListener "listen" when somehting happens, and execute the logical part
    //which is the function
    btn.addEventListener("click", function (){
        document.body.style.backgroundColor = createRGBColorFromValues(getRandomNumberUpToANumber(255), 
                                                                       getRandomNumberUpToANumber(255), 
                                                                       getRandomNumberUpToANumber(255))
        color.textContent = `RGB(${redGlobal}, ${greenGlobal}, ${blueGlobal})`
    })
    
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }  



    /*
    const colors = ["green", "red", "rgba(133,122,200)", 
    "#f15025"]; 
    btn.addEventListener("click", function (){
    document.body.style.backgroundColor = colors[2]
    THIS ACCESS THE STYLE OF THE BODY, AND CHANGES IT'S COLOR (rgb(255, 0, 0))
    color.textContent = colors[2] 
    THIS DISPLAYS THE NAME OF THE BACKGROUND COLOR ("red")
})

*/