import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';


class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      error: '',
    };
  }

  addCard = (card) => {
    axios.post(`${this.props.url}/${this.props.boardName}/cards`, card)
      .then((response) => {
        const updatedData = this.state.cards;
        updatedData.push(response.data.card);
        this.setState({
          cards: updatedData,
          error: ''
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
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
        <NewCardForm addCardCallback={this.addCard}/>

        {this.state.cards.map((card, i) => {
          return(
            <Card 
              text={(card.text) ? card.text : ""}
              emoji={(card.emoji) ? card.emoji : ""}
              key={i}
            />
          );
        })
        }
      </div>
    );
  }
}

Board.propTypes = {
  
};

export default Board;
