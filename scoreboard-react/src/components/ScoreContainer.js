import React from 'react';
import Time from './ScoreBoard/Time';
import Partida from './ScoreBoard/Partida';

class ScoreContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            gols_visitante: 0,
            gols_casa: 0,
        };
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
                    <Time nome={this.props.casa.nome}
                        gols={this.state.gols_casa}
                        marcarGols={this.marcarGolsCasa.bind(this)} />
                </div>
                <div style={{ float: "left", "marginRight": "20px" }}>
                    <Partida estadio={this.props.partida.estadio}
                        data={this.props.partida.data}
                        horario={this.props.partida.horario} />
                </div>
                <div style={{ float: "left", "marginRight": "20px" }}>
                    <h3>Visitante</h3>
                    <Time nome={this.props.visitante.nome}
                        gols={this.state.gols_visitante}
                        marcarGols={this.marcarGolsVisitante.bind(this)} />
                </div>
                <div style={{ clear: "both" }} ></div>
            </div>
        );
    }
}

export default ScoreContainer;