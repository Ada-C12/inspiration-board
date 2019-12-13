import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Card from './components/Card';

class App extends Component {

  
  render() {
    const card1 = {
      "text": "Make sure you pet a dog this week!",
      "emoji": "dog",
    }

    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`sabrina-lowney`}
          />
        <Card data={card1} />
      </section>
    );
  }
}

export default App;
