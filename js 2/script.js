let min = window.prompt("Enter a small number");
let max = window.prompt("Enter a large number");
let current = window.prompt("Enter a number between the last two");

if ((current < max) && (min < current)) {
    document.write("Congratulation you succesfully put a number between two other ones")
} else {
    document.write("You fucking donkey")
}