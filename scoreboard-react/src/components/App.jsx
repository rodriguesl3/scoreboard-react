import React, { Component } from 'react';

import './App.css';
import Menu from './Menu/Menu'



// const dados = {
//   partida:{
//     estadio: "Morumbi/SP",
//     data: "01/12/2018",
//     horario: "22hr",
//   },
//   casa:{
//     nome: "São Paulo - SP",
//   },
//   visitante:{
//     nome: "Cruzeiro - MG"
//   }
// };

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />

        <section className="section">
          <div className="container">
            {this.props.children}
          </div>
        </section>
      </div>
    )
  }
}


/*
<fieldset>
          <legend>Contador Simples</legend>
          <Contador />
        </fieldset>

        <hr />
        <fieldset>
          <legend>
            Placar do Jogo
          </legend>
          <ScoreContainer partida={dados.partida}
                          casa={dados.casa}
                          visitante={dados.visitante} />
        </fieldset>

*/