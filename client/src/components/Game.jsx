import React from 'react';
import Square from './Square';
import Result from './Result';

class Game extends React.Component {

  constructor(){
    super();
    this.state = {
      game: [null, null, null, null, null, null, null, null, null],
      turn: "X",
      whoWon: null,
    }
    this.takeTurn = this.takeTurn.bind(this);
  }

  render(){
    let className = (this.state.whoWon === null) ? "game" : "game-over"
    let result = (this.state.whoWon === null) ? null : <Result value={this.state.whoWon}/>
      return(
        <div className = {className}>
          <div className = "row">
            <Square index = "0" value = {this.state.game[0]} onChangeTurn = {this.takeTurn}/>
            <Square index = "1" value = {this.state.game[1]} onChangeTurn = {this.takeTurn}/>
            <Square index = "2" value = {this.state.game[2]} onChangeTurn = {this.takeTurn}/>
          </div>
          <div className = "row">
            <Square index = "3" value = {this.state.game[3]} onChangeTurn = {this.takeTurn}/>
            <Square index = "4" value = {this.state.game[4]} onChangeTurn = {this.takeTurn}/>
            <Square index = "5" value = {this.state.game[5]} onChangeTurn = {this.takeTurn}/>
          </div>
          <div className = "row">
            <Square index = "6" value = {this.state.game[6]} onChangeTurn = {this.takeTurn}/>
            <Square index = "7" value = {this.state.game[7]} onChangeTurn = {this.takeTurn}/>
            <Square index = "8" value = {this.state.game[8]} onChangeTurn = {this.takeTurn}/>
          </div>
          {result}
        </div>
        )
  }

  takeTurn(index){
    let array = this.state.game.slice();
    array[index] = this.state.turn;

    let turn = this.state.turn;

    const player = this.state.turn;

    if(turn === "X") {
      turn = "O";
    }else {
      turn = "X";
    }

    let whoWon = null;
    let game = array;

    if (game[0] === game[1] && game[0] === game[2] && game[0] !== null) {
      whoWon = player;
      array = [player, player, player, null, null, null, null, null, null]
    };
    if (game[3] === game[4] && game[3] === game[5] && game[3] !== null) {
      whoWon = player;
      array = [null, null, null, player, player, player, null, null, null]
    };
    if (game[6] === game[7] && game[6] === game[8] && game[6] !== null){
      whoWon = player;
      array = [null, null, null, null, null, null, player, player, player]
    };
    if (game[0] === game[3] && game[0] === game[6] && game[0] !== null){
      whoWon = player;
      array = [player, null, null, player, null, null, player, null, null]
    };
    if (game[1] === game[4] && game[1] === game[7] && game[1] !== null){
      whoWon = player;
      array = [null, player, null, null, player, null, null, player, null]
    };
    if (game[2] === game[5] && game[2] === game[8] && game[2] !== null){
      whoWon = player;
      array = [null, null, player, null, null, player, null, null, player]
    };
    if (game[0] === game[4] && game[0] === game[8] && game[0] !== null){
      whoWon = player;
      array = [player, null, null, null, player, null, null, null, player]
    };
    if (game[2] === game[4] && game[2] === game[6] && game[2] !== null){
       whoWon = player;
       array = [null, null, player, null, player, null, player, null, null]
     };
     if (!game.includes(null)) whoWon = "No One";

    this.setState({game: array, turn: turn, whoWon: whoWon});
  }
}

export default Game;
