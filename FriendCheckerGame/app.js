// Friend checker game
// Ask the user to enter a name, using the switch statement to return a confirmation
// that the user is a friend if the name selected is known in the case statements. You
// can add a default response that you don't know the person if it's an unknown name.
// Output the result into the console.
let friendName = prompt("please enter the name:");
let message;

switch (friendName.toLowerCase().trim()) {
  case "amna":
    message = "amna is a friend";
    break;
  case "naila":
    message = "naila is a friend";
    break;
  case "rabia":
    message = "rabia  is a friend";
    break;
  case "aneesa":
    message = "aneesa is a friend";
    break;
  case "iqra":
    message = "iqra is a friend";
    break;
  case "anam":
    message = "anam is a friend";
    break;
  case "sehar":
    message = "sehar is a friend";
    break;
  case "sobia":
    message = "sobia is a friend";
    break;
  case "shumaila":
    message = "shumaila is a friend";
    break;
  case "yumna":
    message = "yumna  is a friend";
    break;
  case "mehwish":
    message = "mehwish  is a friend";
    break;
  case "muneeba":
    message = "muneeba  is a friend";
    break;
  case "gulfam":
    message = "gulfam  is a friend";
    break;
  default:
    message = `I don't know ${friendName}`;
}

console.log(message);
