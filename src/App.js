import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      currentBoard: "Emily-Ball"
    };
  }
  componentDidMount() {
    this.listBoards()
  }
  
  listBoards() {
    axios.get('https://inspiration-board.herokuapp.com/boards')
      .then((response) => {
        const boards = response.data.map((board) => {
          return board.board.name
        });
    
        this.setState({
          boards: boards
        });
      })
      .catch((error) => {
        this.setState({
          error: 'Sorry, something went wrong'
        });
      });
  }

  onBoardChange = (event) => {
    const value = event.target.value;

    const updatedState = {};
    updatedState['currentBoard'] = value;
    this.setState(updatedState);
  }
  
  
  render() {
    const allBoards = this.state.boards.map((board, i) => {
      return <option value={board} key={i}>{board}</option>
    });
    
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
          <form
            name="currentBoard"
            onChange={this.onBoardChange}
            value={this.state.currentBoard} 
          >
            <label htmlFor="boards"> Boards: </label>

            <select>{allBoards}</select>       
        </form>
          
          <Board
            url="https://inspiration-board.herokuapp.com/boards/"
            boardName={this.state.currentBoard}
          />
      
      </section>
    );
  }
}

export default App;
