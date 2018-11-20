import React from 'react';
import Time from './Time';
import Partida from './Partida';

const _dados = {
          partida:{
            estadio: "Morumbi/SP",
            data: "01/12/2018",
            horario: "22hr",
          },
          casa:{
            nome: "São Paulo - SP",
          },
          visitante:{
            nome: "Cruzeiro - MG"
          }
        };



class ScoreContainer extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            gols_visitante: 0,
            gols_casa: 0,
            dados: {}
        };
    }

    componentWillMount(){
        debugger;
        this.setState({dados: _dados});
    }


    marcarGolsCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        })
    }
    marcarGolsVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        })
    }


    render() {
        return (
            <div>
                <div style={{ float: "left", "marginRight": "20px" }}>
                    <h3>Casa</h3>
                    <Time nome={this.state.dados.casa.nome}
                        gols={this.state.gols_casa}
                        marcarGols={this.marcarGolsCasa.bind(this)} />
                </div>
                <div style={{ float: "left", "marginRight": "20px" }}>
                    <Partida estadio={this.state.dados.partida.estadio}
                        data={this.state.dados.partida.data}
                        horario={this.state.dados.partida.horario} />
                </div>
                <div style={{ float: "left", "marginRight": "20px" }}>
                    <h3>Visitante</h3>
                    <Time nome={this.state.dados.visitante.nome}
                        gols={this.state.gols_visitante}
                        marcarGols={this.marcarGolsVisitante.bind(this)} />
                </div>
                <div style={{ clear: "both" }} ></div>
            </div>
        );
    }
}

export default ScoreContainer;