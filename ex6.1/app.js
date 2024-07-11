// Practice exercise 6.1
// See if you can write a function for yourself. We want to write a function that adds
// two numbers.
// 1. Create a function that takes two parameters, adds the parameters together,
// and returns the result.
function add(n1,n2){
    console.log(n1+n2);
    return n1+n2
}
// 2. Set up two different variables with two different values.
let num1  = 12;
let num2  = 134;
// 3. Use your function on the two variables, and output the result using
// console.log.
let result =add(num1,num2);
console.log("Result of adding "+num1+ " and "+num2+" is " +result)
// 4. Create a second call to the function using two more numbers as arguments
// sent to the function.
let sum = add(5,7);
console.log("the sum of 5 and 7 is "+ sum)