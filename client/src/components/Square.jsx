import React from 'react';

class Square extends React.Component {

  constructor(props){
    super(props);
    this.selectSquare = this.selectSquare.bind(this);
  }

  render(){
    return(
      <button className="square" value={this.props.index} onClick={this.selectSquare}>{this.props.value}</button>
    )
  }

  selectSquare(event){
    console.log(event.target.innerText);
    if (event.target.innerText !== "") return;
    let index = parseInt(event.target.value)
    this.props.onChangeTurn(index);
  }
}

export default Square;
