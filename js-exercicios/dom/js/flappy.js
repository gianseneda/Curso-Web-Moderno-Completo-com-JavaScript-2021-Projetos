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

// const b = new Barreira(false);
// b.setAltura(200);
// document.querySelector("[wm-flappy]").appendChild(b.elemento);

function ParDeBarreiras(altura, abertura, x) {
  this.elemento = novoElemento("div", "par-de-barreiras");

  this.superior = new Barreira(true);
  this.inferior = new Barreira(false);

  this.elemento.appendChild(this.superior.elemento);
  this.elemento.appendChild(this.inferior.elemento);

  this.sortearAbertura = () => {
    //deixando essa funçao publica, acessível fora da função
    const alturaSuperior = Math.random() * (altura - abertura);
    const alturaInferior = altura - abertura - alturaSuperior;
    this.superior.setAltura(alturaSuperior);
    this.inferior.setAltura(alturaInferior);
  };

  this.getX = () => parseInt(this.elemento.style.left.split("px")[0]); //retorna a altura sem o px, retorna um array, por isso o [0]
  this.setX = (x) => (this.elemento.style.left = `${x}px`);
  this.getLargura = () => this.elemento.clientWidth;

  this.sortearAbertura();
  this.setX(x);
}

// const b = new ParDeBarreiras(700, 300, 400);
// document.querySelector("[wm-flappy]").appendChild(b.elemento);
