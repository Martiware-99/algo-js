let length = window.prompt("enter the lenght of your rectangle") //obtaining the value of the length
let height =  window.prompt("enter the height of your rectangle")//obtaining the value of the height

let calcSurface = (length, height) => length * height //calculating the surface of the rectangle

document.write(calcSurface(length, height)) //writing the result on the page instead of in the console 