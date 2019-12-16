import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      boards: [],
      selectedBoard: 'eve',
    };
  }

  componentDidMount() {
    const url = "https://inspiration-board.herokuapp.com/boards";
    axios.get(url).then((response) => {
      this.setState({ boards: response.data })
    }).catch((error) => {
      this.setState({ error: 'Sorry, something went wrong' })
    })
  }

  onInputChange = (event) => {
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  render() {
    const allBoards = this.state.boards.map((boardItem, i) => {
      return (<option key={i} value={boardItem.board.name}>{boardItem.board.name}</option>);
    });


    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>

        <section >
          <label> Choose a board </label>
          <select
            className="new-board-select"
            name="selectedBoard"
            value={this.state.selectedBoard}
            onChange={this.onInputChange}>
            {allBoards}
          </select>
        </section>

        <section>
          <Board
            url="https://inspiration-board.herokuapp.com"
            boardName={this.state.selectedBoard}>
          </Board>
        </section>
      </section>
    );
  }
}

export default App;