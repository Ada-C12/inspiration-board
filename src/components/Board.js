import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      error: '',
    };
  }


  // componentDidMount() {
  //   axios.get('https://inspiration-board.herokuapp.com/boards/hallie')
  //     .then((response) => {
  //       this.setState({ cards: response.data });
  //     })
  //     .catch((error) => {
  //       this.setState({ error: error.message });
  //     });
  // }

  addCard = (card) => {
    axios.post("https://inspiration-board.herokuapp.com/boards/hallie", card)
      .then((response) => {
        console.log(response.data);
        // We can update the state so we don't need to make another GET request
        const { cards } = this.state;
        cards.push(response.data);
        this.setState({
          cards,
          error: undefined,
        });
      })
      .catch((error) => {
        // Use the same idea we had in our GET request
        this.setState({ 
          error: error.message,
         });
      });
  }

  render() {
    return (
      <section>
      <div>
        <Card />
      </div>
      <div>
        <NewCardForm addCardCallback={this.addCard} />
      </div>
      </section> 
    )
  }

}

Board.propTypes = {
  // url: propTypes.string,
  // boardName: propTypes.string,
};

export default Board;
