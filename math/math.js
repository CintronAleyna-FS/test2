const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) =>  num1 - num2;
const divide = (num1, num2) =>  num1 / num2;
const multiply = (num1, num2) =>  num1 * num2;
const squareroot = (num1) => Math.sqrt(num1);
const max = (...nums) => Math.max(...nums);

module.exports = {
    add, subtract, divide, multiply, squareroot, max
}