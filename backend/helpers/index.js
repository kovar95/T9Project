const wordList = require('wordlist-english');
const englishWords = wordList['english'];
const combinatorics = require('combinatorics');

const transformToLetters = (number) => {
  let letters = [];
  switch (number) {
    case '2':
      letters = ['a', 'b', 'c'];
      break;
    case '3':
      letters = ['d', 'e', 'f'];
      break;
    case '4':
      letters = ['g', 'h', 'i'];
      break;
    case '5':
      letters = ['j', 'k', 'l'];
      break;
    case '6':
      letters = ['m', 'n', 'o'];
      break;
    case '7':
      letters = ['p', 'q', 'r', 's'];
      break;
    case '8':
      letters = ['t', 'u', 'v'];
      break;
    case '9':
      letters = ['w', 'x', 'y', 'z'];
      break;
  }

  return letters;
};

const makeMatrix = (numbers) => {
  let myArray = [];
  numbers.forEach((num) => myArray.push(transformToLetters(num)));
  return myArray;
};

const generateCombinations = (args) => {
  let r = [],
    max = args.length - 1;
  let helper = (arr, i) => {
    for (let j = 0, l = args[i].length; j < l; j++) {
      let a = arr.slice(0); // clone arr
      a.push(args[i][j]);
      if (i == max) r.push(a);
      else helper(a, i + 1);
    }
  };
  helper([], 0);
  return r;
};

const findRealWords = arrayOfWords => {
  let filterWords = arrayOfWords.filter(word => englishWords.indexOf(word.join('')) > -1)
  return filterWords.map(r => r.join(''))
}

exports.generate = (req, res) => {
  const phoneword = req.params.phoneword;
  const transformedArray = makeMatrix(phoneword.split(''));
  const combinations = generateCombinations(transformedArray);

  // We can generate combinations via npm package also
  // const combinations = combinatorics.holistic(...transformedArray)

  const realWords = findRealWords(combinations)

  let payload = {
    allWords: combinations,
    realWords: realWords
  }

  return res
    .status(200)
    .json(payload)
};

