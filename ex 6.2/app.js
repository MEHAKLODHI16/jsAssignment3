// Practice exercise 6.2
// We are going to create a program that will randomly describe an inputted name.
// 1. Create an array of descriptive words
const descriptiveWords = ['awesome', 'brilliant', 'charming', 'delightful', 'elegant', 'fantastic', 'graceful', 'humble', 'intelligent', 'joyful', 'kind', 'lively', 'magnificent', 'noble', 'outstanding', 'patient', 'quick-witted', 'remarkable', 'strong', 'thoughtful', 'unique', 'vibrant', 'wise', 'youthful', 'zestful'];

// 2. Create a function that contains a prompt asking the user for a name
function describeName() {
  const name = prompt("Please enter a name:");

  // 3. Select a random value from the array using Math.random
  const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
  const randomWord = descriptiveWords[randomIndex];

  // 4. Output into the console the prompt value and the randomly selected array value
  console.log(`${name} is ${randomWord}.`);
}

// 5. Invoke the function
describeName();
