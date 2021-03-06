// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(palavras) {
  return `${palavras[palavras.length - 1]}, ${palavras[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let highest = numbers[0];

  for (let n = 0; n < numbers.length; n += 1) {
    if (highest === numbers[n]) {
      count += 1;
    } else if (highest < numbers[n]) {
      highest = numbers[n];
      count = 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posCat1 = Math.abs(cat1 - mouse);
  let posCat2 = Math.abs(cat2 - mouse);

  if (posCat1 < posCat2) {
    return 'cat1';
  }
  if (posCat2 < posCat1) {
    return 'cat2';
  }
  if (posCat1 === posCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

function buzzFizz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzArray = [];

  for (let number of numbers) {
    fizzBuzzArray.push(buzzFizz(number));
  }

  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  let encoded = string;
  encoded = encoded.replace(/a/gi, '1');
  encoded = encoded.replace(/e/gi, '2');
  encoded = encoded.replace(/i/gi, '3');
  encoded = encoded.replace(/o/gi, '4');
  encoded = encoded.replace(/u/gi, '5');

  return encoded;
}

function decode(string) {
  let decoded = string;
  decoded = decoded.replace(/1/gi, 'a');
  decoded = decoded.replace(/2/gi, 'e');
  decoded = decoded.replace(/3/gi, 'i');
  decoded = decoded.replace(/4/gi, 'o');
  decoded = decoded.replace(/5/gi, 'u');

  return decoded;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
