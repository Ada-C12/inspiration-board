import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Board from './components/Board';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardsList: [],
      error: undefined,
    };    
  }
    componentDidMount () {
      axios.get('https://inspiration-board.herokuapp.com/boards/muffin-poppy/cards')
        .then((response) => {
           this.setState({
            cardsList: response.data,
          });
        })
        .catch((error) => {
        this.setState({error: error.message})});
    }

  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`muffin-poppy`}
          cardsList={this.state.cardsList}
          />
      </section>
    );
  }
}

export default App;
