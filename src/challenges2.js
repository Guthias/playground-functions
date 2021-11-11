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
function generatePhoneNumber() {
  // seu código aqui
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
