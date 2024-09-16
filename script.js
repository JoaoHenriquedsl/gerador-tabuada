const listaVezes = document.querySelector('#listaVezes')
const button = document.querySelector('button')

function getValues() {
  const vezes = document.querySelector('#vezes').value
  const tabuada = document.querySelector('#tabuada').value
  return { vezes, tabuada }
}

function validation(vezes, tabuada) {
  return !(
    isNaN(vezes) ||
    isNaN(tabuada) ||
    vezes.trim() === '' ||
    tabuada.trim() === '' ||
    vezes > 100 ||
    tabuada > 100
  );
}

function clearUl() {
  listaVezes.innerHTML = ''
}

function generateTabuada(vezes, tabuada) {
  if (validation(vezes, tabuada)) {
    clearUl()
    for (let i = 1; i <= vezes; i++) {
      const li = document.createElement('li')
      listaVezes.appendChild(li).innerHTML = `${tabuada} x ${i} = ${tabuada * i}`
    }
  }
}

button.addEventListener('click', () => {
  const { vezes, tabuada } = getValues()
  generateTabuada(vezes, tabuada)
}
)


