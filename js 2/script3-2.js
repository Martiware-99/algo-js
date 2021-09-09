let sum = 0

let arr = [1, 2, 3, 4, 5]

for (let elem of arr) {
    sum =(sum + elem)
}

let average = (sum / arr.length)

console.log(average)