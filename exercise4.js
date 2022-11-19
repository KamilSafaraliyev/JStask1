const a = +prompt('Please enter the value for A');
const b = +prompt('Please enter the value for B');
console.log(a)
console.log(b)
if (a > b) {
    console.log(a + b);
} else if (a == b) {
    console.log(a * b);
} else if (a < b) {
    console.log(a - b);
}