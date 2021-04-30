function novoElemento(tagName, className) {
  const elem = document.createElement(tagName);
  elem.className = className;
  return elem;
}

function Barreira(reversa = false) {
  //barreira de posição normal
  this.elemento = novoElemento("div", "barreira"); //é o elemento criado no dom ali em cima

  const borda = novoElemento("div", "borda");
  const corpo = novoElemento("div", "corpo");

  this.elemento.appendChild(reversa ? corpo : borda); //corpo e bora, reversa
  this.elemento.appendChild(reversa ? borda : corpo); //borda e corpo, normal

  this.setAltura = (altura) => (corpo.style.height = `${altura}px`);
}

const b = new Barreira(false);
b.setAltura(200);
document.querySelector("[wm-flappy]").appendChild(b.elemento);
