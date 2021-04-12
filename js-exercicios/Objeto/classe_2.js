class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  //herança para Classes
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome); //sobreposto pela classe pai deste
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super("Silva");
  }
}

const filho = new Filho();
console.log(filho);
