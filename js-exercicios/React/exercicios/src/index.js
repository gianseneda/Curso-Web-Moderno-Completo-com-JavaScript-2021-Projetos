import React from "react";
import ReactDOM from "react-dom";

import Pai from "./componentes/Pai";

//const elemento = <h1>React</h1>;

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva" />
  </div>,
  document.getElementById("root")
);

//insere o título na página ("<h1>React</h1>") JSX, javascript que será compilado em html pelo javascript nativo
