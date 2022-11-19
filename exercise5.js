let root1, root2;
let a = prompt("Enter A number: ");
let b = prompt("Enter B number: ");
let c = prompt("Enter C number: ");
let discriminant = b * b - 4 * a * c;
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(The roots ${root1} and ${root2});
} else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(The roots are ${root1} and ${root2});
}