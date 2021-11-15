// Desafio 10
function techList(tecnologias, aluno) {
  let listaTecnologias = [];
  let tecnologiasOrdenada = tecnologias.sort();
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }

  for (let i = 0; i < tecnologiasOrdenada.length; i += 1) {
    listaTecnologias.push({
      tech: tecnologiasOrdenada[i],
      name: aluno });
  }

  return listaTecnologias;
}

// Desafio 11
function validNumbers(array, maxRepeated) {
  let repeatedTimes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let number of array) {
    if (repeatedTimes[number] >= maxRepeated - 1 || number < 0 || number > 9) {
      return false;
    }
    repeatedTimes[number] += 1;
  }
  return true;
}

function generatePhoneNumber(phoneNumberArray) {
  let phoneNumberFormated = '(';

  if (phoneNumberArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (!validNumbers(phoneNumberArray, 3)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let number of phoneNumberArray) {
    phoneNumberFormated += number;
  }
  /** Precisei consultar a DevMedia para utilizr o Replace
    * Source https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
    */
  phoneNumberFormated = phoneNumberFormated.replace(/(\d{2})(\d{5})(\d{4})/, '$1) $2-$3');
  return phoneNumberFormated;
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (a > b + c || b > a + c || c > a + b) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(phrase) {
  /** Precisei consultar o StackOverflow para separar os numeros da string
   * Source: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
   */

  let alcoholCup = phrase.match(/\d+/g);
  let waterCup = 0;

  for (let cup of alcoholCup) {
    waterCup += Number(cup);
  }

  if (waterCup === 1) {
    return `${waterCup} copo de água`;
  }
  return `${waterCup} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
