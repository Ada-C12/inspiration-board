import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      error:'',
    };
  }

  componentDidUpdate() {
    this.listCards()
  }


  listCards() {
    axios.get(`${this.props.url}${this.props.boardName}/cards`)
      .then((response) => {
        const cards = response.data.map((obj) => {
          return obj.card
        });
    
        this.setState({
          cards: cards
        });
      })
      .catch((error) => {
        this.setState({
          error: 'Sorry, something went wrong'
        });
      });
  }

  onRemoveCard = (id) => {
    axios.delete(` https://inspiration-board.herokuapp.com/cards/${id}`)
      .then((response) => {
        this.listCards()
      })  
      .catch((error) => {
        this.setState({
          error: 'Sorry, something went wrong'
        });
      });
  }

  onAddCard = (card) => {
    axios.post(`${this.props.url}${this.props.boardName}/cards`, card)
      .then((response) => {
        this.listCards()
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
              key={i}
              id={card.id}
              text={card.text}
              emoji={card.emoji}
              deleteCardCallback = {() => {this.onRemoveCard(card.id)}}
            />;
    });
    
    return (
      <section>
          <NewCardForm
            addCardCallback = {this.onAddCard}
          />;
          <h1 className='header__h1'> {this.props.boardName} Board </h1>
        <div className='board'>
          {cards}
        </div>
      </section>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
