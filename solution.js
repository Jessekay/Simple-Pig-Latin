function pigIt(str){

  // Split the input string into an array of words
  const words = str.split(' ');

  // Initialize an empty array to store the pig latin transformed words
  const pigLatinWords = [];

  // Loop through each word in the array
  for (let word of words) {
    // Check if the word consists only alphabetic characters
    if (/^[a-zA-Z]+$/.test(word)) {

      // If it's not an alphabetic word, apply a piglatin transformation
      pigLatinWords.push(word.slice(1) + word[0] + 'ay'); 
    } else {
      // If it's not an alphabetic word, keep it unchanged
      pigLatinWords.push(word);
    }
  }
  // Join the transformed words back into a single string
  return pigLatinWords.join(' ');
}

// Test cases
console.log(pigIt('Pig Latin is cool'));