const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// function splitAndTitleCased(string) {
//   const splitString = string.split()
//   for(word in splitString) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }
// }

function titleCased() {
  const titleCased = tutorials.map(string => {
    const splitString = string.split(' ')
    let sentence = ''
    for (const word of splitString) {
      const wordUpper = word.charAt(0).toUpperCase() + word.slice(1);
      if (word !== splitString[splitString.length - 1]) {
        sentence += wordUpper + ' '
      } else {
        sentence += wordUpper
      }
    }
    return sentence
  })
  return titleCased;
}
