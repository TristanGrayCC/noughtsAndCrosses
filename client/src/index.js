import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';

window.onload = function(){
  ReactDOM.render(
    <Game title="Noughts and Crosses"/>,
    document.getElementById('app')
  );
}
