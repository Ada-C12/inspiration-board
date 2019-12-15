import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
import Axios from 'axios';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
      // cards: CARD_DATA['cards']
    };
  }

  componentDidMount() {
    const myCards = `${this.props.url+this.props.boardName}/cards`
    Axios.get(myCards).then((response) => {
      this.setState({
        cards: response.data,
      });
    })
    .catch((error) => {
      // TODO
    });
  }
    
  makeCollection() {
    const emoji = require("emoji-dictionary");
    const cardsCollection = this.state.cards.map((singleCard) => {
      const card = singleCard['card']

      if (card.emoji) {
        const name = card.emoji
        return < Card text={card.text} emoji={emoji.getUnicode(name)} key={card.id}/>
      } else if ( card.Emoji ) {
        const name = card.Emoji
        return < Card text={card.text} emoji={emoji.getUnicode(name)} key={card.id}/>
      } else {
        return < Card text={card.text}  key={card.id}/>
      }
    });

    return cardsCollection
  } 
  
  render() {
    return (
      <div className="board">
        {this.makeCollection()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
