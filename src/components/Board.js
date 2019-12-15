import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      error:'',
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {
        const cards = response.data.map((obj) => {
          return obj.card
        });
    
        this.setState({
          cards: cards
        });
        console.log(this.state.cards)
      })
      .catch((error) => {
        this.setState({
          error: 'Sorry, something went wrong'
        });
      });
  }

  render() {
    const cards = this.state.cards.map((card, i) => {
      return <Card
              id={card.id}
              text={card.text}
              emoji={card.emoji}
            />;
    });
    
    return (
      <div>
        <h1 className='board-title'> {this.props.boardName} Board </h1>
        <div className='board'>
          {cards}
        </div>
      </div>
    )
  }

}

Board.propTypes = {
  // url: PropTypes.string.isRequired,
  // boardName: PropTypes.isRequired,
};

export default Board;
