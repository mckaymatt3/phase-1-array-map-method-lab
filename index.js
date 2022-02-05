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

// const titleCased = (array) => {const newArray = array.map()
//   return tutorials
// }

const titleCased = () => {
  const tutorialSplit = tutorials.map(function(item) {
    let newItem = item.split(" ")
    console.log('This is the split string sentence: ', newItem)
    let tutorialUpper = newItem.map(function(item2) {
      let newItem2 = item2.slice(0,1).toUpperCase() + item2.slice(1)
        return newItem2
    })
    console.log('This is the upper case split string: ', tutorialUpper)
    return tutorialUpper.join(' ')
  })
  console.log('This is the final result: ',tutorialSplit)
  return tutorialSplit
}

// console.log(titleCased(tutorials))

