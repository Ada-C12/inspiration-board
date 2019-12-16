import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import NewCardForm from './components/NewCardForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: "https://inspiration-board.herokuapp.com/boards/c-gutierrez/cards",
      name: "c-gutierrez",

    }
  };

  // will have a callback function passed into NewCard form, that will lead to the creation of a new card which will be used to do an API call for the post request to add this to the board. 

  // Pass forward callback function to create a new card

  // axios call here to get a list of cards for a given board

  // axios call here to post a new card for a given board







  render() {
    return (
      <section>

        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          boardName={this.state.name}
          url={this.state.url}
          />


        <NewCardForm/>

      </section>
    );
  }
}

export default App;