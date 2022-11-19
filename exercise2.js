let a = prompt('Enter A variable: ');
let b = prompt('Enter B variable: ');
[a, b] = [b, a];
console.log(The value of A after swapping: ${a});
console.log(The value of B after swapping: ${b});