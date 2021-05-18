import React from "react";

export default (props) => [
  <h1 hey="h1">Bom Dia {props.nome}!</h1>,
  <h2 key="h2">Até Breve!</h2>,
]; //key é só pra melhor interpreteção quando se usa um array

//OU

// export default (props) => (
//   <React.Fragment>
//     <h1>Bom Dia {props.nome}!</h1>
//     <h2>Até Breve!</h2>
//   </React.Fragment>
// );
