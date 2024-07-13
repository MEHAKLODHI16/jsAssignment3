// 1. Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
let prize = prompt("Please select a number between 0 and 10");

// 2. Convert the prompt response to a number data type
prize = Number(prize);

// 3. Create a variable to use for the output message containing the value "My Selection: "
let message = "My Selection: ";

// 4. Using the switch statement (and creativity), provide a response back regarding a prize that is awarded depending on what number is selected
switch (prize) {
  case 0:
    message += "You get a toy car!";
    break;
  case 1:
  case 2:
    message += "You win a chocolate bar!";
    break;
  case 3:
  case 4:
    message += "You win a keychain!";
    break;
  case 5:
  case 6:
    message += "You win a book!";
    break;
  case 7:
  case 8:
    message += "You win a $10 gift card!";
    break;
  case 9:
  case 10:
    message += "You win a $20 gift card!";
    break;
  default:
    message += "Invalid selection. Please choose a number between 0 and 10.";
}

// 6. Output the message back to the user by concatenating your prize variable strings and the output message string
alert(message);
