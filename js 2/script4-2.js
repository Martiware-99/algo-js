let rand10 = (min, max) => (Math.floor(Math.random() * max) + min)

//math.random generate a number between 0 and 1 wich is multiplied by you max number,then adding the min number and 
//finally rounding the number down. EX: 0.6 * 6 = 3,6 ; 3,6 + 1 = 4,6 ; rounded up = 4

document.write(rand10(1, 10))