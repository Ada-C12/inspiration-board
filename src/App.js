import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

const boardList = ['xinran', 'xinran1', 'xinran2']
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardName: 'xinran'
    };

  }

  onBoardChange = (event) => {
    this.setState({
      boardName: event.target.value
    })
  }

  render() {
    const boardOptions = boardList.map((boardName, i) => {
      return (
        <option key={i} value={boardName} >{boardName}</option>
      )
    })
    
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>

        <div>
          <h2>Select a Board</h2>
          <select
            onChange={this.onBoardChange}
            value={this.state.boardName}
          >
            {boardOptions}
          </select>
        </div>

        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={this.state.boardName}
        />
      </section>
    );
  }
}

export default App;
