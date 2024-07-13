// Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less than a dynamic number value in your code. Output the result to the user.
// Set a dynamic number value in your code
const dynamicNumber = 50;

// Ask the user to enter a number
let userNumber = prompt("Please enter a number:");

// Convert the prompt response to a number data type
userNumber = Number(userNumber);

// Check whether the user's number is greater than, equal to, or less than the dynamic number
let message;

if (userNumber > dynamicNumber) {
  message = `Your number (${userNumber}) is greater than dynamic number ${dynamicNumber}.`;
} else if (userNumber === dynamicNumber) {
  message = `Your number (${userNumber}) is equal to dynamic number ${dynamicNumber}.`;
} else {
  message = `Your number (${userNumber}) is less than dynamic number ${dynamicNumber}.`;
}

// Output the result to the user
alert(message);
