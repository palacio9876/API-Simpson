//Llamando boton desde html
const btnGenerateCharacter = document.getElementById('btn-generate-character')

//Aplicando evento al boton (evento click)
btnGenerateCharacter.addEventListener('click', getCharacter)

//Creando funcion para creacion de card
function createCard(character) {
  //Traer por medio de su id el elemento div
  const containerCard = document.getElementById('container-card');
  containerCard.innerHTML= "";

  //Creando elementos
  const imgCharacter = document.createElement('img');
  const hr = document.createElement('hr');
  const nameCharacter = document.createElement('h2');
  const quoteCharacter = document.createElement('p')

  //Añadiendo clases para aplicar estilos
  containerCard.classList.add('container-card');
  imgCharacter.classList.add('img-character');
  nameCharacter.classList.add('name-character');
  quoteCharacter.classList.add('quote-character');

  //Añadiendo elementos sengun la necesidad
  imgCharacter.src = character.image;
  imgCharacter.alt = character.character;

  nameCharacter.textContent = character.character;

  quoteCharacter.textContent = character.quote;

  //Estructurando arbol de elementos
  containerCard.appendChild(imgCharacter);
  containerCard.appendChild(hr);
  containerCard.appendChild(nameCharacter);
  containerCard.appendChild(quoteCharacter);

}

//Realizando el consumo de la API
function getCharacter() {
  const requestMethod = {method: 'GET'};
  const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

  fetch(URL, requestMethod)
    .then(response => response.json())
    .then(data => createCard(data[0]))
    .catch(err => console.error(err));

}