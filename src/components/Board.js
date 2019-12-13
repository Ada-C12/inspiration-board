import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      error: '',
    };
  }

 

  componentDidMount() {
  axios.get(`${this.props.url}/${this.props.boardName}/cards`)
  .then((response) => {
    let updatedState = this.state.cards;
    let cardsFromApi = response.data.map((cardData) => {
      return cardData.card;   
    })

    updatedState = [...updatedState, ...cardsFromApi]
 
    this.setState({ 
      cards: updatedState,
      error: '' 
    });
  })
  .catch((error) => {
    this.setState({ error: error.message });
  });
}

  render() {
    return (
      <div className="board">
        {this.state.cards.map((name, i) => {
          return(
            <Card 
              text={(name.text) ? name.text : ""}
              emoji={(name.emoji) ? name.emoji : ""}
              key={i}
            />
          );
        })
        }
      <NewCardForm />
      </div>
    );
  }

}

Board.propTypes = {

};

export default Board;
