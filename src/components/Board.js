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
      // cards: []
      cards: CARD_DATA['cards']
    };
  }

  makeCollection() {
    const emoji = require("emoji-dictionary");
    const cardsCollection = this.state.cards.map((card, i) => {
      if (card.emoji) {
        const name = card.emoji
        return < Card text={card.text} emoji={emoji.getUnicode(name)} key={i}/>
      } else if ( card.Emoji ) {
        const name = card.Emoji
        return < Card text={card.text} emoji={emoji.getUnicode(name)} key={i}/>
      } else {
        return < Card text={card.text}  key={i}/>
      }
    });

    return cardsCollection
  } 
  
  // componentDidMount() {
  //   Axios.get(this.props.url).then(res => console.log(res.data))
  // }

  render() {
    return (
      <div>
        {this.makeCollection()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
