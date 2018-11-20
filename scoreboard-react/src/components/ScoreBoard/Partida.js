import React, { Component } from 'react'

export default class Partida extends Component {
    constructor(propos){
        super(propos);
        this.state = {
            estadio: "Morumbi/SP",
            data: "01/12/2018",
            horario: "22hr",
        }

       
    }
    render() {
        return (
            <div>
                <h2>{this.props.estadio}</h2>
                <div>
                    <span>{this.props.data}</span>
                    <span>-</span>
                    <span>{this.props.horario}</span>
                </div>
            </div>
        )
    }
}
