import React, { Component } from 'react'

export default class BotaoGol extends Component {
  handleClick(e){
    e.preventDefault();

    console.log(e);

    this.props.marcarGols();

  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Gol!!!</button>
      </div>
    )
  }
}
