import React, { Component } from "react";

export default class Saudacao extends Component {
  state = {
    tipo: this.props.tipo,
    nome: this.props.nome,
  };

  constructor(props) {
    super(props); //precisa chamar por causa de compatibilidade
    this.setTipo = this.setTipo.bind(this); //marcando o escopo do this em outros escopos
  }
  setTipo(e) {
    this.setState({ tipo: e.target.value }); //digitar no input, mudando o estado que eu precisei para ler os atributos do props
  }

  setNome(e) {
    this.setState({ nome: e.target.value }); //digitar no input, mudando o estado que eu precisei para ler os atributos do props
  }

  render() {
    const { tipo, nome } = this.state;
    return (
      <div>
        <h1>
          {tipo} {nome}!
        </h1>
        <hr />
        <input
          type="text"
          placeholder="Tipo..."
          value={tipo}
          onChange={this.setTipo}
        />
        <input
          type="text"
          placeholder="Nome..."
          value={nome}
          onChange={(e) => this.setNome(e)}
        />
      </div>
    );
  }
} //usamos this.props pra acessar o props que nao pode ser passado na class
