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
function generatePhoneNumber(numbers) {
  // A função não esta identificadno repetição de numeros
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let phoneNumber = '(';
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    phoneNumber += number;
  }
  /** Precisei consultar a DevMedia para fazer esse trecho do codigo
   * Source https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
   */
  phoneNumber = phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '$1) $2-$3');

  return phoneNumber;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
