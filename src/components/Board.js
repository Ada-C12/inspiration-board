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
      cardsUrl: this.props.url + this.props.boardName + '/cards',
      error: '',
    };

  }

  componentDidMount() {
    axios.get(this.state.cardsUrl)
      .then((response) => {
        const cardObjects = response.data.map((cardInfo) => {
          return (
            cardInfo.card
          )
        })
        this.setState({
          cards: cardObjects
        });
        console.log(cardObjects)
      })
      .catch((error) => {
        this.setState({
          error: 'No Dice'
        })
      });
  }

  

  deleteCard = (cardId) => {

    axios.delete(this.state.cardsUrl + `/${cardId}`)
    .then(() => {
      const allButOneCard = this.state.cards.filter((card) => card.id !==cardId)
      this.setState({
        cards: allButOneCard,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message,
      });
    });
  }

  cardList = () => {
    return (
      this.state.cards.map((card,i) => {
        return (
          <Card
            key={i}
            text={card.text}
            emoji={card.emoji}
            deleteCardCallback={this.deleteCard}

          />
        )
      })
    )
  }


  render() {
    return (
      <div>
        {this.cardList()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
