let n = window.prompt("enter a number")

let sum = 0

for (let i = 1; i <= n; i++) {
    let num = window.prompt("enter some other numbers")
    sum = sum + new Number(num)
}

console.log(sum)